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
            width: 150,
            events: {
                click: () => kiss.router.navigateTo('home')
            }
        },
        // Titre de la rubrique courante
        {
            class: 'topbar-title',
            type: 'html',
            html: title,
            flex: 1
        }
    ]
})