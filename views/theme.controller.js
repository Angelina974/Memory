kiss.app.defineViewController("theme", {
    /**
     * Fonction appelée automatiquement lors du chargement de la vue
     */
    load: function () {

        // Met à jour le titre
        $('themeTitle').setInnerHtml("Catégorie : " + currentCategory + ' - Thème : ' + currentTheme)

        // Récupère la catégorie et le thème
        const category = memory.find(category => category.name === currentCategory)
        const theme = category.themes.find(theme => theme.name === currentTheme)

        // Crée les cartes du thème
        const cardItems = theme.cards.map(card => {
            return this.createCard(card)
        })
        $('cards').setItems(cardItems)
    },

    /**
     * Template pour créer une seule carte
     * 
     * @param {object} card 
     * @returns {object} block
     */
    createCard: function (card) {
        return createBlock({
            class: 'card-recto',
            layout: 'vertical',
            items: [
                // Recto de la carte
                {
                    type: 'html',
                    html:
                        `${card.recto}
                        <br><br>
                        (Niveau: ${card.level})`,
                },
                // Boutons pour modifier et supprimer la carte
                {
                    layout: 'horizontal',
                    defaultConfig: {
                        margin: 20,
                    },
                    items: [
                        // Bouton pour modifier la carte
                        {
                            type: 'button',
                            icon: 'fas fa-edit',
                            action: () => {
                                currentCard = card
                                kiss.router.navigateTo('card')
                            }
                        },
                        // Bouton pour supprimer la carte
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
})