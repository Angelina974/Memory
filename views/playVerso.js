kiss.app.defineView({
    id: 'playVerso',
    renderer: function (id) {
        return createBlock({
            id,
            items: [
                // Top bar
                createTopBar(),

                {
                    layout: 'vertical',
                    alignItems: 'center',
                    items: [
                        // Block pour afficher le verso de la carte à jouer
                        {
                            items: [{
                                    id: "cardPlayVerso",
                                    type: "html",
                                },
                                {
                                    id: "cardPlayVerso",
                                    type: "html",
                                    animation: {
                                        name: "flipInY",
                                        speed: "slow"
                                    }
                                },

                            ]
                        },

                        // Block contenant les boutons
                        {
                            layout: 'horizontal',
                            defaultConfig: {
                                margin: '10px 10px',
                                type: 'button',
                            },
                            items: [
                                // Bouton pour dire "Oui" je me rappelle
                                {
                                    text: 'Oui',
                                    icon: 'fas fa-check',
                                    action: () => {
                                        // Incrémente le niveau de la carte
                                        const currentCardLevel = cardToPlay.level || 1
                                        const nextLevel = currentCardLevel + 1
                                        updateCardLevel(currentCategory, currentTheme, cardToPlay.id, nextLevel)

                                        // Supprime la carte de la liste des cartes à jouer
                                        cardsToPlay.shift()

                                        // Si c'est la dernière carte, retourne à la catégorie
                                        if (cardsToPlay.length === 0) {
                                            kiss.router.navigateTo('category')
                                        } else {
                                            // Sinon, passe à la carte suivante
                                            kiss.router.navigateTo('playRecto')
                                        }
                                    }
                                },
                                // Bouton pour dire "Non" je ne me rappelle pas
                                {
                                    text: 'Non',
                                    icon: 'fas fa-times',
                                    action: () => {
                                        // Passe le niveau de la carte à 1
                                        updateCardLevel(currentCategory, currentTheme, cardToPlay.id, 1)

                                        // Supprime la carte de la liste des cartes à jouer
                                        cardsToPlay.shift()

                                        // Si c'est la dernière carte, retourne à la catégorie
                                        if (cardsToPlay.length === 0) {
                                            kiss.router.navigateTo('category')
                                        } else {
                                            // Sinon, passe à la carte suivante
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
                /**
                 * Fonction appelée lors du chargement de la vue
                 */
                load: function () {
                    // Récupére la prochaine carte à jouer
                    cardToPlay = cardsToPlay[0]

                    // Génère le HTML de la carte à jouer
                    let cardHtml = `<div class='cardContainer'>
                        <div class="cardPlay">
                        <h2>${cardToPlay.verso}</h2>
                        </div>
                        
                        <h3>Est-ce que tu t'en souviens ?</h3>
                        </div>`

                    // Injecte le HTML dans la vue
                    $('cardPlayVerso').setInnerHtml(cardHtml)
                }
            }
        })
    }
})