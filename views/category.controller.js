kiss.app.defineViewController("category", {

    /**
     * Fonction appelée automatiquement lors du chargement de la vue
     */
    load: function () {
        // Met à jour le titre de la page
        $('categoryTitle').setInnerHtml('Thèmes de la catégorie : <span class="themeTitleColor">' + currentCategory + '</span>')

        // Récupère la catégorie actuelle
        const category = memory.find(category => category.name === currentCategory)

        // Boucle sur tout les thèmes de la catégorie actuelle pour construire le html
        const themesBlocks = category.themes.map(theme => this.createTheme(theme.name))

        // Récupère le block qui contiendra les thèmes
        const themesElement = document.querySelector('.themes')

        // Injecte les blocks des thèmes dans l'élément block 
        themesElement.setItems(themesBlocks)
    },

    /**
     * Crée un block pour un thème
     * 
     * @param {string} theme 
     * @returns {object} block
     */
    createTheme: function (theme) {
        return createBlock({
            class: 'theme',
            layout: 'horizontal',
            backgroundColor: '#f5f5f5',
            items: [
                // Case à cocher du thème
                {
                    type: 'checkbox',
                    id: theme,
                    shape: 'circle',
                    class: 'themeCheckbox',
                    events: {
                        onchange: function () {
                            const checkboxes = document.querySelectorAll('input[type=checkbox]');
                            const dayArray = JSON.parse(localStorage.getItem('date')) || [];
                            let levelMessage = "";

                            checkboxes.forEach((cb) => {
                                if (cb.checked) {
                                    const themeChecked = cb.id;

                                    memory.forEach(category => {
                                        category.themes.forEach(theme => {
                                            if (theme.name === themeChecked) {
                                                let entry = dayArray.find(item => item.theme === theme.name);
                                                if (entry) {
                                                    levelMessage += `${themeChecked} : jour n°${entry.counter}<br>`;
                                                } else {
                                                    levelMessage += `${themeChecked} : jour n°0<br>`;
                                                }
                                            }
                                        });
                                    });
                                }
                            })

                            const dateLevelElement = $("dateLevel")
                            if (dateLevelElement) dateLevelElement.innerHTML = levelMessage
                        }
                    }

                },

                // Nom du thème
                {
                    type: 'html',
                    html: theme,
                    padding: '0 20px',
                },
                {
                    type: 'spacer',
                    flex: 1
                },

                // Boutons pour modifier et supprimer le thème
                {
                    defaultConfig: {
                        class: 'themeButtons',
                        iconSize: 16,
                        events: {
                            mouseOver: function () {
                                this.setAnimation('jello')
                            },
                        }
                    },
                    layout: 'horizontal',
                    items: [
                        // Bouton pour modifier le thème
                        {
                            type: 'button',
                            icon: 'fas fa-edit',
                            action: () => this.editTheme(theme)
                        },
                        // Bouton pour supprimer le thème
                        {
                            type: 'button',
                            icon: 'fas fa-trash',
                            action: () => this.deleteTheme(theme),
                        }
                    ]
                }
            ],
            events: {
                mouseOver: function () {
                    this.style.backgroundColor = '#e5e5e5'

                },
                mouseOut: function () {
                    this.style.backgroundColor = '#f5f5f5'
                },
                click: function (event) {
                    const checkbox = event.target.closest('a-checkbox')
                    if (checkbox) {
                        return
                    }
                    this.querySelector('a-checkbox').toggleValue()
                }
            }
        })
    },

    /**
     * Modifier un thème
     */
    editTheme(theme) {
        currentTheme = theme
        kiss.router.navigateTo('theme')
    },

    /**
     * Supprimer un thème
     * 
     * @param {string} theme 
     */
    deleteTheme(theme) {
        createDialog({
            title: 'Supprimer le thème',
            type: 'danger',
            buttonCancelText: 'Annuler',
            message: 'Etes-vous sûr de vouloir supprimer ce thème ?',
            animation: 'slideInUp',
            action: () => {
                deleteTheme(currentCategory, theme)
                this.load()
            }
        })
    },

    /**
     * Ajouter un nouveau thème
     */
    addNewTheme() {
        // Récupère le thème saisi dans le champs
        const theme = $('fieldTheme').getValue()

        // Vérifie si le thème est vide
        if (!theme) {
            return createNotification('Veuillez saisir un thème')
        }

        // Ajoute le thème à la catégorie actuelle
        const result = addTheme(currentCategory, theme)

        // Vérifie si le thème existe déjà
        if (result == false) {
            return createNotification('Ce thème existe déjà')
        }

        // Vide le champs de saisie
        $('fieldTheme').setValue('')

        this.load()
    },

    /**
     * Lancer le jeu
     */
    play() {
        const checkboxes = document.querySelectorAll('a-checkbox')

        // Récupère les thèmes cocher
        checkedThemes = Array.from(checkboxes).filter(checkbox => checkbox.getValue()).map(checkbox => checkbox.id)
        if (checkedThemes.length === 0) {
            return createNotification('Veuillez sélectionner au moins un thème')
        }

        let checkedThemesString = JSON.stringify(checkedThemes);
        if (arrayPlayedOnce.includes(checkedThemesString)) {
            console.log("already played");
            return createNotification("Vous avez déjà joué aujourd'hui")
        } else {
            console.log(arrayPlayedOnce);
            arrayPlayedOnce.push(checkedThemesString);

            // Choisit les cartes à jouer à partir des thèmes cochés
            cardsToPlay = chooseCards()
            if (cardsToPlay.length === 0) {
                return createNotification('Il n\'y a pas de carte à jouer')
            }
            // Affiche le recto de la 1ère carte à jouer
            kiss.router.navigateTo('playRecto')
        }
    }
})