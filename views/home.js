kiss.app.defineView({
    id: 'home',
    renderer: function (id, target) {
        function createCategory(category) {
            const html = `<div class="category">${category}</div>`
            return html
        }
        const categoriesHtml = categories.map(createCategory).join('')
        return createBlock({
            id,
            target,
            items: [
                {
                    type: 'view',
                    id: 'topBar',

                },
                {
                    class: "category",
                    display: 'flex',
                    alignItems: 'center',
                    items: [
                        {
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
                        }
                    ]
                },
                {
                    type: 'html',
                    html: categoriesHtml,
                    class: 'categories',
                    events: {
                        click: function (event) {
                            const category = event.target.textContent
                            console.log(category)
                            currentCategory = category
                            kiss.router.navigateTo('category')

                        }
                    }

                }
            ]

        })

    }
})