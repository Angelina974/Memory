/**
 * Template pour créer la top bar
 */
createTopBar = (title) => createBlock({
    class: 'topbar',
    items: [
        // Logo
        {
            type: 'image',
            src: 'resources/img/logo.png',
            class: 'topbar-logo',
            events: {
                click: () => kiss.router.navigateTo('home')
            }
        },
    ]
})