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
                    margin : '40px 0',
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
                    type: 'html',
                    class: 'categories',
                    id: "divAdd",
                    events: {
                        click: function (event) {
                            const category = event.target.textContent
                            console.log(category)
                            currentCategory = category
                            kiss.router.navigateTo('category')

                        }
                    }

                }
            ],
            methods: {
                load: function(){
                    const categoriesHtml = memory.map(category => $(id).createCategory(category.name)).join('')
                    const categoriesElement = document.querySelector('.categories')
                    categoriesElement.setInnerHtml(categoriesHtml) 
                },
                createCategory: function(category) {
                    const html = `<div class="category">${category}</div>`
                    return html
                }
            }


        })

    }
})