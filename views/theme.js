kiss.app.defineView({
    id: 'theme',
    renderer: function (id, target) {

        function createCard(card) {
            const html = `<div class="card">${card}</div>`
            return html
        }
        const cardsHtml = cards.map(createCard).join('')
        
        return createBlock({
            id,
            target,
            items: [{
                    type: 'view',
                    id: 'topBar',

                },
                {
                    type: 'html',
                    id: 'themeTitle',
                    class: 'themeTitle',
                },
                {
                    class: "card",
                    display: 'flex',
                    alignItems: 'center',
                    items: [{
                            type: 'text',
                            label: 'Ajouter une carte',
                            labelPosition: 'top',
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
                    html: cardsHtml,
                    class: 'themes',

                },
            ],
            methods: {
                load: function () {
                    console.log('Category:', currentCategory)
                    $('themeTitle').setInnerHtml(currentCategory + ':' + currentTheme)
                }
            }

        })

    }
})