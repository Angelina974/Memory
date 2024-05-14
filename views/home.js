kiss.app.defineView({
    id: 'home',
    renderer: function (id, target) {
        return createBlock({
            id,
            target,
            items: [
                // Top bar
                createTopBar('Home'),

                // Bloc pour ajouter une catégorie
                {
                    class: "category",
                    display: 'flex',
                    alignItems: 'center',
                    margin : '40px 10px',
                    items: [
                        // Champ pour donner le nom de la catégorie
                        {
                            id: "fieldCategory",
                            type: 'text',
                            label: 'Ajouter une catégorie',
                            labelPosition: 'top',
                            placeholder: 'Exemple : Animaux, Nature, Sciences, etc...',
                            fieldWidth: 300
                        },
                        // Bouton pour ajouter la catégorie
                        {
                            type: 'button',
                            icon: 'fas fa-plus',
                            height: 40,
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