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
            layout: 'horizontal',
            items: [
                // Nom de la catégorie
                {
                    type: 'html',
                    html: category,
                },
                {
                    type: 'spacer',
                    flex: 1
                },

                // Bouton pour modifier la catégorie
                {
                    type: 'button',
                    class: 'editCategoryButton',
                    icon: 'fas fa-edit',
                    action: () => {
                        // Création d'un pannel de dialogue pour modifier le nom de la catégorie
                        createDialog({
                            title: 'Modifier la catégorie',
                            type: 'input',
                            buttonCancelText: 'Annuler',
                            message: 'Entrez le nouveau nom de la catégorie',
                            headerBackgroundColor: '#F7C374',
                            animation: 'slideInUp',
                            action: (newCategory) => {
                                if (!newCategory) {
                                    return createNotification('Veuillez saisir une catégorie')
                                }

                                // Appel de la fonction pour modifier la catégorie
                                const result = updateCategory(category, newCategory)

                                // Si la catégorie existe déjà, afficher une notification
                                if (result == false) {
                                    return createNotification('Cette catégorie existe déjà')
                                }

                                // Recharge la vue
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
                    // Stocke la catégorie actuelle
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
        // Récupère le nom de la catégorie saisie dans le champ
        const category = $('fieldCategory').getValue()

        // Vérifie si le champ est vide
        if (!category) {
            return createNotification('Veuillez saisir une catégorie')
        }

        // Ajoute la catégorie
        const result = addCategory(category)

        // Vérifie si la catégorie existe déjà
        if (result == false) {
            return createNotification('Cette catégorie existe déjà')
        }

        // Vide le champ avec le nom de la catégorie
        $('fieldCategory').setValue('')

        // Recharge la vue
        this.load()
    }
})