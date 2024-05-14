kiss.app.defineViewController("category", {

    /**
     * Fonction appelée automatiquement lors du chargement de la vue
     */
    load: function () {
        // Met à jour le titre de la page
        $('categoryTitle').setInnerHtml("Catégorie : " + currentCategory)

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
            layout: 'vertical',
            items: [
                // Case à cocher du thème
                {
                    layout: 'horizontal',
                    width: '100%',
                    items: [{
                            type: 'spacer',
                            flex: 1
                        },
                        {
                            type: 'html',
                            html: `<input type="checkbox" class="themeCheckbox" id="${theme}"></input>`
                        }
                    ]
                },
                // Nom du thème
                {
                    type: 'html',
                    html: theme
                },
                // Boutons pour modifier et supprimer le thème
                {
                    defaultConfig: {
                        class: 'themeButtons'

                    },
                    layout: 'horizontal',
                    items: [
                        // Bouton pour modifier le thème
                        {
                            type: 'button',
                            text: 'Modifier',
                            icon: 'fas fa-edit',
                            action: () => this.editTheme(theme)
                        },
                        // Bouton pour supprimer le thème
                        {
                            type: 'button',
                            text: 'Supprimer',
                            icon: 'fas fa-trash',
                            action: () => this.deleteTheme(theme)
                        }
                    ]
                }
            ]
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
        const theme = $('fieldTheme').getValue()
        if (!theme) {
            return createNotification('Veuillez saisir un thème')
        }

        const result = addTheme(currentCategory, theme)
        if (result == false) {
            return createNotification('Ce thème existe déjà')
        }

        $('fieldTheme').setValue('')

        this.load()
    },

    /**
     * Lancer le jeu
     */
    play() {
        const checkboxes = document.querySelectorAll('.themeCheckbox')

        // Récupère les thèmes cocher
        checkedThemes = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.id)
        if (checkedThemes.length === 0) {
            return createNotification('Veuillez sélectionner au moins un thème')
        }

        // Choisit les cartes à jouer à partir des thèmes cochés
        cardsToPlay = chooseCards()
        if (cardsToPlay.length === 0) {
            return createNotification('Il n\'y a pas de carte à jouer')
        }

        // Affiche le recto de la 1ère carte à jouer
        kiss.router.navigateTo('playRecto')
    }
})