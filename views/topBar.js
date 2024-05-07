kiss.app.defineView({
    id: 'topBar',
    renderer: function (id, target) {
        return createBlock({
            id,
            target,
            backgroundColor: '#f0f0f0',
            items: [
                {
                    type: 'image',
                    src: 'resources/img/logo.png',
                    width: 100,
                },
            ]
        })
    }
})