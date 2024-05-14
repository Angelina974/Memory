kiss.app.defineView({
    id: 'category',
    renderer: function (id) {
        return createBlock({
            id,
            items: [
                // Top bar
                createTopBar(),

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
                            action: () => $(id).addNewTheme()
                        }
                    ]
                },

                // Zone pour afficher les thèmes de la catégorie
                {
                    class: 'themes',
                    id: "themeHtml",
                    margin: '30px 0px',
                },

                // Conteneur du bouton pour jouer (permet de le centrer)
                {
                    class: "play-button",
                    items: [
                        // Bouton pour jouer
                        {
                            type: 'button',
                            text: 'Jouer',
                            icon: 'fas fa-gamepad',
                            action: () => $(id).play()
                        }
                    ]
                }
            ]
        })
    }
})