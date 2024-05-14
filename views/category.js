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
                    margin : '20px 10px 10px 10px',
                    items: [{
                            id: "fieldTheme",
                            type: 'text',
                            label: 'Ajouter un thème',
                            labelPosition: 'top',
                            placeholder: 'Exemple : Animaux, Nature, Sciences, etc...',
                            fontSize: 13,
                            fieldWidth: 280
                        },
                        {
                            type: 'button',
                            icon: 'fas fa-plus',
                            class: 'addThemeButton',
                            action: () => $(id).addNewTheme()
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
                            fontSize: 16,
                            action: () => $(id).play()
                        },
                    ]
                },
            ]
        })
    }
})