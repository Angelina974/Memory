/**
 * Choisit les cartes à jouer
 * Pour le moment, prend toutes les cartes des thèmes sélectionnés dans l'UI
 * 
 * @returns {Array<Object>} Tableau de cartes
 */
function chooseCards() {
    // Tableau de cartes à jouer
    let cards = []
    memory.forEach(category => {
        category.themes.forEach(theme => {
            if (checkedThemes.includes(theme.name)) {
                theme.cards.forEach(card => {
                    cards.push(card)
                    
                })
            }
        })
    })
    return cards
}