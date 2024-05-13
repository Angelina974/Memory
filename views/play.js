kiss.app.defineView({
    id: 'play',
    renderer: () => {
    return createBlock({
    items: [
        {
            type: 'view',
            id: 'topBar',
        },
        {
            type: "html",
            html: `<div class='cardContainer'>
            <div class="cardPlay">
            <h2>Hello</h2>
            </div>
            
            <h3>Essais de te souvenir et retourne la carte</h3>
            <button>></button>
            </div>`,
        
        }
    ]

    })
}


})