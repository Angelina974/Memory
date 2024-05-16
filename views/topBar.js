/**
 * Template pour créer la top bar
 */
kiss.app.defineView({
    id: 'topbar',
    renderer: function (id) {
        return createBlock({
            id,
            class: 'topbar',
            items: [
                // Menu
                {
                    type: 'button',
                    id: 'homeButton',
                    icon: 'fas fa-home',
                    class: 'topbar-home-button',
                    iconSize: 25,
                    action: () => kiss.router.navigateTo('home'),
                    events: {
                        mouseOver: function () {
                            this.setAnimation({
                                name: 'bounceIn',
                                speed: 'faster'
                            })
                        }
                    }
                },
                {
                    type: 'spacer',
                    flex: 1
                },
                // Logo
                {
                    type: 'image',
                    src: 'resources/img/logo.png',
                    class: 'topbar-logo',
                    events: {
                        mouseOver: function () {
                            this.setAnimation({
                                name: 'lightSpeedOutRight',
                                speed: 'slower',
                            })
                        }
                    }
                },
                {
                    type: 'spacer',
                    flex: 1
                }
            ],

            // Cacher le bouton home si on est sur une page de jeu
            subscriptions: {
                EVT_ROUTE_UPDATED: (msg) => {
                    if (msg.ui == 'playRecto' || msg.ui == 'playVerso') {
                        $('homeButton').hide()
                    } else {
                        $('homeButton').show()
                    }
                }
            }
        })
    }
})