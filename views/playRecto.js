kiss.app.defineView({
    id: 'playRecto',
    renderer: function (id) {
        return createBlock({
            id,
            target: 'content',
            items: [
                {
                    layout: 'vertical',
                    alignItems: 'center',
                    items: [
                        // Block pour afficher le recto de la carte à jouer
                        {
                            id: "cardPlay",
                            type: "html",
                        },
                        // Bouton pour retourner la carte
                        {
                            type: 'button',
                            icon: 'fas fa-chevron-right',
                            class: 'yes-no-buttons',
                            action: async () => {
                                await kiss.router.navigateTo('playVerso')
                                $('cardPlayVerso').setAnimation({
                                    name: 'flipInY',
                                    speed: 'slow'
                                })
                            },
                            events: {
                                mouseOver: function () {
                                    this.setAnimation({
                                        name: 'bounceIn',
                                        speed: 'slow'
                                    })
                                }
                            }
                        }
                    ]
                }
            ],
            methods: {
                /**
                 * Fonction appelée lors du chargement de la vue
                 */
                load: function () {
                    // Récupére la prochaine carte à jouer
                    let cardToPlay = cardsToPlay[0]

                    // Génère le HTML de la carte à jouer
                    let cardHtml = `<div class='cardContainer'>
                        <div class="cardPlay">
                        <h2>${cardToPlay.recto}</h2>
                        </div>
                        
                        <h3>Essaie de te souvenir et retourne la carte.</h3>
                        </div>`

                    // Injecte le HTML dans la vue
                    $('cardPlay').setInnerHtml(cardHtml)
                }
            }
        })
    }
})