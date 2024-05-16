kiss.app.defineView({
    id: 'category',
    renderer: function (id) {
        return createBlock({
            id,
            target: 'content',
            items: [
                // Titre
                {
                    type: 'html',
                    id: 'categoryTitle',
                    class: 'categoryTitle',
                },

                // Zone pour ajouter un nouveau thème
                {
                    class: "theme",
                    display: 'flex',
                    alignItems: 'center',
                    margin : '20px 10px 10px 25px',
                    items: [{
                            id: "fieldTheme",
                            type: 'text',
                            label: 'Ajouter un thème',
                            labelPosition: 'top',
                            placeholder: 'Exemple : Animaux, Nature, Sciences, etc...',
                            fontSize: 13,
                            fieldWidth: 280,
                            events: {
                                keyPress: function (e) {
                                    if (e.key === 'Enter') {
                                        $(id).addNewTheme()
                                    }
                                }
                            }
                        },
                        {
                            type: 'button',
                            icon: 'fas fa-plus',
                            class: 'addThemeButton',
                            iconSize: 16,
                            action: () => $(id).addNewTheme(),
                            events: {
                                mouseOver: function () {
                                    this.setAnimation('zoomIn')
                                }
                            }
                        }
                    ]
                },

                // Zone pour afficher les thèmes de la catégorie
                {
                    class: 'themes',
                    id: "themeHtml",
                },
                
                // Conteneur du bouton pour jouer (permet de le centrer)
                {
                    class: 'playButtonContainer',
                    items: [
                        // Bouton pour jouer
                        {
                            type: 'button',
                            text: 'Jouer',
                            icon: 'fas fa-gamepad',
                            class: "play-button",
                            fontSize: 18,
                            iconSize: 16,
                            animation: {
                                name: 'heartBeat',
                                speed: 'slower',
                                repeat: 'infinite'
                            },
                            action: () => $(id).play()
                        },
                    ]
                },
            ]
        })
    }
})