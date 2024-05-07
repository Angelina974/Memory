kiss.app.defineView({
    id: 'category',
    renderer: function (id, target) {
        function createTheme(theme) {
            const html = `<div class="theme">${theme}
            <input type="checkbox" class="themeCheckbox"></input>
            </div>`
            return html
        }
        const themesHtml = themes.map(createTheme).join('')
        return createBlock({
            id,
            target,
            items: [
                {
                    type: 'view',
                    id: 'topBar',

                },
                {
                    type: 'html',
                    id: 'categoryTitle',
                    class: 'categoryTitle',
                },
                {
                    class: "theme",
                    display: 'flex',
                    alignItems: 'center',
                    items: [
                        {
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
                        }
                    ]
                },
                {
                    type: 'html',
                    html: themesHtml,
                    class: 'themes',

                },
                {
                    type: 'button',
                    text: 'Supprimer',
                    icon: 'fas fa-trash',
                },
                {
                    type: 'button',
                    text: 'Jouer',
                    icon: 'fas fa-gamepad',
                }
            ],
            events: {
                click: function (event) {
                    const theme = event.target.textContent
                    console.log(theme)
                    currentTheme = theme
                    kiss.router.navigateTo('theme')
                },
            },
            methods: {
                load: function () {
                    console.log('Category:', currentCategory)
                    $('categoryTitle').setInnerHtml(currentCategory)
                }
            }

        })

    }
})