kiss.app.defineViewController("theme", {
    /**
     * Fonction appelée automatiquement lors du chargement de la vue
     */
    load: function () {

        // Met à jour le titre
        $('themeTitle').setInnerHtml(`
        Catégorie : <span class="themeTitleColor"> ${currentCategory} </span>
        <span class="fas fa-chevron-right"></span>
        Thème : <span class="themeTitleColor"> ${currentTheme} </span>`)

        // Récupère la catégorie et le thème actuel
        const category = memory.find(category => category.name === currentCategory)
        const theme = category.themes.find(theme => theme.name === currentTheme)

        // Crée les cartes du thème
        const cardItems = theme.cards.map(card => {
            return this.createCard(card)
        })

        // Injecte les cartes dans la vue
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
                    html: `<div class="card-title">${card.recto}</div>
                        <br>
                        (Niveau: ${card.level})`,
                },
                {
                    type: 'spacer',
                    flex: 1
                },
                // Boutons pour modifier et supprimer la carte
                {
                    layout: 'horizontal',
                    defaultConfig: {
                        class: 'card-buttons',
                        iconSize: 16,
                        events: {
                            mouseOver: function () {
                                this.setAnimation('jello')
                            }
                        }
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
                                deleteCard(currentCategory, currentTheme, card.id)
                                this.load()
                                createNotification(`La carte ${card.recto} a été supprimée`) 
                            }
                        },

                    ]
                },

            ]
        })
    }
})