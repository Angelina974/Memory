kiss.app.defineViewController("home", {
    /**
     * Fonction appelée lors de l'initialisation de la vue
     */
    load: function () {
        // Charge les catégories dans la vue
        const categoriesItems = memory.map(category => this.createCategory(category.name))
        $('categories').setItems(categoriesItems)
    },

    /**
     * Template pour créer une seule catégorie
     * 
     * @param {string} category 
     * @returns {object} block
     */
    createCategory: function (category) {
        return createBlock({
            class: 'category',
            layout: 'vertical',
            items: [
                // Nom de la catégorie
                {
                    type: 'html',
                    html: category,
                },

                // Bouton pour modifier la catégorie
                {
                    type: 'button',
                    icon: 'fas fa-edit',
                    action: () => {
                        createDialog({
                            title: 'Modifier la catégorie',
                            type: 'input',
                            buttonCancelText: 'Annuler',
                            message: 'Entrez le nouveau nom de la catégorie',
                            action: (newCategory) => {
                                if (!newCategory) {
                                    return createNotification('Veuillez saisir une catégorie')
                                }

                                const result = updateCategory(category, newCategory)

                                if (result == false) {
                                    return createNotification('Cette catégorie existe déjà')
                                }
                                this.load()
                            }
                        })
                    }
                }
            ],

            // Gestion du click sur la catégorie
            events: {
                click: function (event) {
                    // Vérifie si le click a été fait sur un bouton. Si oui, sortir
                    const clickedButton = event.target.closest('a-button')
                    if (clickedButton) {
                        return
                    }

                    currentCategory = category
                    kiss.router.navigateTo('category')
                }
            }
        })
    },

    /**
     * Ajoute une nouvelle catégorie
     */
    addNewCategory() {
        const category = $('fieldCategory').getValue()
        if (!category) {
            return createNotification('Veuillez saisir une catégorie')
        }

        const result = addCategory(category)
        if (result == false) {
            return createNotification('Cette catégorie existe déjà')
        }

        // Vide le champ avec le nom de la catégorie
        $('fieldCategory').setValue('')

        // Recharge la vue
        this.load()
    }
})