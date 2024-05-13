kiss.app.defineView({
    id: 'playRecto',
    renderer: function (id, target) {
        return createBlock({
            id,
            target,
            items: [
                createTopBar(),
                {
                    layout: 'vertical',
                    alignItems: 'center',
                    items: [
                        {
                            type: "html",
                            html: `<div class='cardContainer'>
                                <div class="cardPlay">
                                <h2>Hello</h2>
                                </div>
                                
                                <h3>Essais de te souvenir et retourne la carte.</h3>
                                </div>`
                        },
                        {
                            type: 'button',
                            icon: 'fas fa-chevron-right',
                            action : () => kiss.router.navigateTo('playVerso')
                        }
                    ]
                }
            ]
        })
    }
})