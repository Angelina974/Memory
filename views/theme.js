kiss.app.defineView({
    id: 'theme',
    renderer: function (id) {
        return createBlock({
            id,
            items: [
                // Top bar
                createTopBar(),

                // Titre du thème
                {
                    type: 'html',
                    id: 'themeTitle',
                    class: 'themeTitle',
                },

                // Bouton pour ajouter une carte au thème
                {
                    type: 'button',
                    text: "Ajouter une carte à ce thème",
                    icon: 'fas fa-plus',
                    class: 'add-card-button',
                    fontSize: 18,
                    iconSize: 20,
                    action: () => {
                        currentCard = null
                        kiss.router.navigateTo('card')
                    }
                },

                // Zone pour afficher les cartes du thème
                {
                    id: 'cards',
                    class: 'themes'
                },
            ]
        })
    }
})