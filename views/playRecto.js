kiss.app.defineView({
    id: 'playRecto',
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
                            id: "cardPlay",
                            type: "html",
                        },
                        {
                            type: 'button',
                            icon: 'fas fa-chevron-right',
                            action: () => kiss.router.navigateTo('playVerso')
                        }
                    ]
                }
            ],
            methods: {
                load: function () {
                    let cardToPlay = cardsToPlay[0]
                    let cardHtml = `<div class='cardContainer'>
                        <div class="cardPlay">
                        <h2>${cardToPlay.recto}</h2>
                        </div>
                        
                        <h3>Essais de te souvenir et retourne la carte.</h3>
                        </div>`
                    $('cardPlay').setInnerHtml(cardHtml)
                }
            }
        })
    }
})