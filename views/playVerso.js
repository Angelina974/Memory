kiss.app.defineView({
    id: 'playVerso',
    renderer: function (id, target) {
        return createBlock({
            id,
            target,
            items: [
                createTopBar(),
                {
                    layout: 'vertical',
                    alignItems: 'center',
                    items: [{
                            id: "cardPlayVerso",
                            type: "html",
                        },
                        {
                            layout: 'horizontal',
                            defaultConfig: {
                                margin: '10px 10px',
                                type: 'button',
                            },
                            items: [{
                                    text: 'Oui',
                                    icon: 'fas fa-check',
                                    action: () => {

                                        const currentCardLevel = cardToPlay.level || 1
                                        const nextLevel = currentCardLevel + 1
                                        updateCardLevel(currentCategory, currentTheme, cardToPlay.id, nextLevel)

                                        cardsToPlay.shift()
                                        if (cardsToPlay.length === 0) {
                                            kiss.router.navigateTo('category')
                                        } else {
                                            kiss.router.navigateTo('playRecto')
                                        }
                                    }
                                },
                                {
                                    text: 'Non',
                                    icon: 'fas fa-times',
                                    action: () => {
                                        updateCardLevel(currentCategory, currentTheme, cardToPlay.id, 1)

                                        cardsToPlay.shift()
                                        if (cardsToPlay.length === 0) {
                                            kiss.router.navigateTo('category')
                                        } else {
                                            kiss.router.navigateTo('playRecto')
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ],
            methods: {
                load: function () {
                    cardToPlay = cardsToPlay[0]
                    let cardHtml = `<div class='cardContainer'>
                        <div class="cardPlay">
                        <h2>${cardToPlay.verso}</h2>
                        </div>
                        
                        <h3>Est-ce que tu t'en souviens ?</h3>
                        </div>`
                    $('cardPlayVerso').setInnerHtml(cardHtml)
                }
            }
        })
    }
})