let currentCategory
let currentTheme
let currentCard
let checkedThemes
let cardsToPlay
let cardToPlay
let memory = localStorage.getItem('memory') ? JSON.parse(localStorage.getItem('memory')) : []

window.onload = async function () {
    
    await kiss.loader.loadScripts([
        // Load the views
        './views/card',
        './views/category',
        './views/home',
        './views/playRecto',
        './views/playVerso',
        './views/theme',
        './views/topBar',

        // Load the controllers
        './controllers/create',
        './controllers/update',
        './controllers/delete',
        './controllers/play',
    ])

    // Load the styles
    await kiss.loader.loadStyles([
        './views/card',
        './views/category',
        './views/home',
        './views/play',
        './views/theme',
        './views/topBar'
    ])

    kiss.router.init()

    kiss.views.show('home')
    // kiss.views.show('card')
}