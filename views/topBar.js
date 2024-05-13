createTopBar = (test) => createBlock({
    
    class: 'topbar',
    items: [
        {
            type: 'image',
            src: 'resources/img/logo.png',
            width: 150,
            events : {
                click : () => kiss.router.navigateTo('home')
            }
        },
        {
            class: 'topbar-title',
            type: 'html',
            html: test,
            flex: 1,
        }
    ]
})