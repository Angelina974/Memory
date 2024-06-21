/**
 * Choisit les cartes à jouer
 * Pour le moment, prend toutes les cartes des thèmes sélectionnés dans l'UI
 * 
 * @returns {Array<Object>} Tableau de cartes
 */
function chooseCards(cardNumber) {
    let cards = [];
    let levelDateObject = JSON.parse(localStorage.getItem('date')) || [];
    
    memory.forEach(category => {
        category.themes.forEach(theme => {
            if (checkedThemes.includes(theme.name)) {
                let levelDate = levelDateObject.find(item => item.theme === theme.name);
                theme.cards.forEach(card => {
                    if (levelDate && card.level <= levelDate.counter) {
                        console.log(card);
                        cards.push(card);
                    }
                });
            }
        });
    });
    return cards;
}
