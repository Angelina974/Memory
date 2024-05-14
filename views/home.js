kiss.app.defineView({
    id: 'home',
    renderer: function (id, target) {
        return createBlock({
            id,
            target,
            items: [
                createTopBar('Home'),
                {
                    class: "category",
                    display: 'flex',
                    alignItems: 'center',
                    margin : '40px 10px',
                    items: [
                        {
                            id: "fieldCategory",
                            type: 'text',
                            label: 'Ajouter une catégorie',
                            labelPosition: 'top',
                            placeholder: 'Exemple : Animaux, Nature, Sciences, etc...',
                            fieldWidth: 300,
                            
                        },
                        {
                            type: 'button',
                            icon: 'fas fa-plus',
                            height: 40,
                            action: () => {
                                const category = $('fieldCategory').getValue()
                                if (!category) {
                                    return createNotification('Veuillez saisir une catégorie')
                                } 
                                const result = addCategory(category)
                                if (result == false){
                                    return createNotification('Cette catégorie existe déjà')
                                }
                                $(id).load()
                                $('fieldCategory').setValue('')
                            }
                        }
                    ]
                },
                {
                    id: 'categories',
                    class: 'categories',
                }
            ],
            methods: {
                load: function(){
                    const categoriesItems = memory.map(category => $(id).createCategory(category.name))
                    $('categories').setItems(categoriesItems)
                },
                createCategory: function(category) {
                    return createBlock({
                        class: 'category',
                        layout: 'vertical',
                        items: [
                            {
                                type: 'html',
                                html: category,
                            },
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
                                            $(id).load()
                                        }
                                    })
                                }
                            }
                        ],
                        events: {
                            click: function (event) {
                                const clickedButton = event.target.closest('a-button')
                                if (clickedButton) {
                                    return
                                }
                                currentCategory = category
                                kiss.router.navigateTo('category')
    
                            }
                        }
                    })
                }
            }


        })

    }
})