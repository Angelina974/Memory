kiss.app.defineView({
    id: 'home',
    renderer: function (id) {
        return createBlock({
            id,
            target: 'content',
            items: [
                // Bloc pour ajouter une catégorie
                {
                    class: "category",
                    display: 'flex',
                    alignItems: 'center',
                    margin : '50px 10px 10px 25px',
                    items: [
                        // Champ pour donner le nom de la catégorie
                        {
                            id: "fieldCategory",
                            type: 'text',
                            label: 'Ajouter une catégorie',
                            labelPosition: 'top',
                            placeholder: 'Exemple : Animaux, Nature, etc...',
                            fontSize: 13,
                            fieldWidth: 280
                        },
                        // Bouton pour ajouter la catégorie
                        {
                            type: 'button',
                            icon: 'fas fa-plus',
                            class:  'addCategoryButton',
                            action: () => $(id).addNewCategory()
                        }
                    ]
                },

                // Conteneur pour afficher les catégories
                {
                    id: 'categories',
                    class: 'categories'
                }
            ]
        })
    }
})