kiss.app.defineView({
    id: 'setting',
    renderer: function (id) {
        return createBlock({
            id,
            items: [
                createTopBar('Paramètres'),
                
                {
                    class: 'settings',
                    display: 'flex',
                    alignItems: 'center',
                    items: [
                        {
                            class: 'setting',
                            type: 'html',
                            html: currentCategory,
                        },
                        {
                            class: 'setting',
                            type: 'html',
                            html: 'Date',
                            
                        },
                        {
                            class: 'setting',
                            type: 'html',
                            html: 'Niveau',
                        },
                        {
                            type: 'button',
                            text: 'Jouer',
                            icon: 'fas fa-play',
                            events: {
                                onclick: () => {
                                    kiss.router.navigateTo('playRecto')
                                }
                            }
                        }
                    ]
                }
            ]
        })
    }
})