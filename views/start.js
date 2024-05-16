/**
 * Template pour créer la top bar
 */
kiss.app.defineView({
    id: 'start',
    renderer: function (id) {
        return createBlock({
            id,
            items: [
                {
                    type: 'view',
                    id: 'topbar',
                },
                {
                    id: 'content',
                    items: [
                        {
                            type: 'view',
                            id: 'home',
                        }
                    ]
                }
            ]
        })
    }
})