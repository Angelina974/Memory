kiss.app.defineView({
    id: 'theme',
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
                    class: "add-card",
                    display: 'flex',
                    alignItems: 'center',
                    items: [
                        {
                            type: 'button',
                            text: "Ajouter une carte",
                            icon: 'fas fa-plus',
                            height: 40,
                            action: () => {
                                currentCard = null
                                kiss.router.navigateTo('card')
                            }
                        }
                    ]
                },
                {
                    id: 'cards',
                    class: 'themes',
                },
            ],
            methods: {
                load: function () {
                    $('themeTitle').setInnerHtml(currentCategory + ':' + currentTheme)

                    const category = memory.find(category => category.name === currentCategory)
                    const theme = category.themes.find(theme => theme.name === currentTheme)
                    const cardItems = theme.cards.map(card =>{
                        return $(id).createCard(card)
                    })
                    $('cards').setItems(cardItems)
                },
                createCard: function(card) {
                    return createBlock({
                        class: 'card-recto',
                        layout: 'vertical',
                        items: [
                            {
                                type: 'html',
                                html: card.recto,
                            },
                            {
                                layout: 'horizontal',
                                defaultConfig: {
                                    margin: '10px 10px',
                                },
                                items:[
                                    {
                                        type: 'button',
                                        icon: 'fas fa-edit',
                                        action: () => {
                                            currentCard = card
                                            kiss.router.navigateTo('card')
                                        }
                                    },
                                    {
                                        type: 'button',
                                        icon: 'fas fa-trash',
                                        action: () => {
                                            console.log('Supprimer')
                                        }
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