// Initialise les variables globales
let memory = localStorage.getItem('memory') ? JSON.parse(localStorage.getItem('memory')) : []
let currentCategory
let currentTheme
let currentCard
let checkedThemes
let cardsToPlay
let cardToPlay

// Attend le chargement du DOM
window.onload = async function () {
    
    await kiss.loader.loadScripts([
        // Charge les vues et leur contrôleur
        './views/card',
        './views/card.controller',
        './views/category',
        './views/category.controller',
        './views/home',
        './views/home.controller',
        './views/playRecto',
        './views/playVerso',
        './views/theme',
        './views/theme.controller',
        './views/topBar',

        // Charge les contrôleurs du jeu
        './controllers/create',
        './controllers/update',
        './controllers/delete',
        './controllers/play'
    ])

    // Charge les feuilles de styles
    await kiss.loader.loadStyles([
        './views/card',
        './views/category',
        './views/home',
        './views/play',
        './views/theme',
        './views/topBar'
    ])

    // Initialise le router client
    kiss.router.init()

    // Affiche la vue home
    kiss.views.show('home')
}