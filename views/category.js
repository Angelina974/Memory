kiss.app.defineView({
    id: 'category',
    renderer: function (id, target) {
        return createBlock({
            id,
            target,
            items: [
                createTopBar(),
                {
                    type: 'html',
                    id: 'themeTitle',
                    class: 'themeTitle',
                },
                {
                    class: "theme",
                    display: 'flex',
                    alignItems: 'center',
                    items: [{
                            id: "fieldTheme",
                            type: 'text',
                            label: 'Ajouter un thème',
                            labelPosition: 'top',
                            placeholder: 'Exemple : Animaux, Nature, Sciences, etc...',
                            fieldWidth: 300,

                        },
                        {
                            type: 'button',
                            icon: 'fas fa-plus',
                            height: 40,
                            action: () => {
                                const theme = $('fieldTheme').getValue()
                                if (!theme) {
                                    return createNotification('Veuillez saisir un thème')
                                }
                                const result = addTheme(currentCategory, theme)
                                if (result == false) {
                                    return createNotification('Ce thème existe déjà')
                                }
                                $(id).load()
                                $('fieldTheme').setValue('')
                            }

                        }
                    ]
                },
                {
                    class: 'themes',
                    id: "themeHtml",
                    margin: '30px 0px',
                },
                {
                    id: "containerButton",
                    type: "block",
                    display: "flex",
                    flexFlow: "row",
                    defaultConfig: {
                        margin: "10px",
                    },
                    items: [{
                            type: 'spacer',
                            flex: 1
                        },
                        {
                            type: 'button',
                            text: 'Jouer',
                            icon: 'fas fa-gamepad',
                            events: {
                                click: function (event) {
                                    const checkboxes = document.querySelectorAll('.themeCheckbox')
                                    checkedThemes = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.id)
                                    if (checkedThemes.length === 0) {
                                        return createNotification('Veuillez sélectionner au moins un thème')
                                    }
                                    kiss.router.navigateTo('playRecto')
                                },
                            },
                        },
                        {
                            type: 'spacer',
                            flex: 1
                        }
                    ]
                },
            ],


            methods: {
                load: function () {
                    // Récupère la catégorie actuelle
                    const category = memory.find(category => category.name === currentCategory)

                    // Boucle sur tout les thèmes de la catégorie actuelle pour construire le html
                    const themesBlocks = category.themes.map(theme => $(id).createTheme(theme.name))

                    // Récupère le block qui contiendra les thèmes
                    const themesElement = document.querySelector('.themes')

                    // Injecte les blocks des thèmes dans l'élément block 
                    themesElement.setItems(themesBlocks)
                },
                createTheme: function (theme) {
                    return createBlock({
                        class: 'theme',
                        layout: 'vertical',
                        items: [
                            {
                                layout: 'horizontal',
                                width: '100%',
                                items: [
                                    {
                                        type: 'spacer',
                                        flex: 1
                                    },
                                    {
                                        type: 'html',
                                        html: `<input type="checkbox" class="themeCheckbox" id="${theme}"></input>`
                                    },
                                    
                                ]
                            },
                            {
                                type: 'html',
                                html: theme
                            },
                            {
                                defaultConfig: {
                                    class: 'themeButtons',

                                },
                                layout: 'horizontal',
                                items: [{
                                        type: 'button',
                                        text: 'Modifier',
                                        icon: 'fas fa-edit',
                                        events: {
                                            click: function (event) {
                                                const theme = event.target.textContent
                                                console.log(theme)
                                                currentTheme = theme
                                                kiss.router.navigateTo('theme')
                                            },
                                        },
                                    },
                                    {
                                        type: 'button',
                                        text: 'Supprimer',
                                        icon: 'fas fa-trash',
                                        events: {
                                            click: function (event) {
                                                const theme = event.target.textContent
                                                console.log(theme)
                                                currentTheme = theme
                                            },
                                        },
                                    }
                                ]
                            }
                        ]
                    })
                }
            }

        })

    }
})