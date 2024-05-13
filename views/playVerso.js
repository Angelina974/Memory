kiss.app.defineView({
    id: 'playVerso',
    renderer: function (id, target) {
        return createBlock({
            id,
            target,
            items: [
                createTopBar(),
                {
                    layout: 'vertical',
                    alignItems: 'center',
                    items: [{
                            type: "html",
                            html: `<div class='cardContainer'>
                                <div class="cardPlay">
                                <h2>Hello</h2>
                                </div>
                                
                                <h3>Est-ce que tu t'en souviens ? </h3>
                                </div>`
                        },
                        {
                            layout: 'horizontal',
                            defaultConfig: {
                                margin: '10px 10px',
                                type: 'button',
                            },
                            items: [{
                                    text: 'Oui',
                                    icon: 'fas fa-check'
                                },
                                {
                                    text: 'Non',
                                    icon: 'fas fa-times'
                                }
                            ]
                        }
                    ]
                }
            ]
        })
    }
})