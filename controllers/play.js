/**
 * Choisit les cartes à jouer
 * Pour le moment, prend toutes les cartes des thèmes sélectionnés dans l'UI
 * 
 * @returns {Array<Object>} Tableau de cartes
 */
function chooseCards(cardNumber) {
    let cards = [];
    let levelDateObject = JSON.parse(localStorage.getItem('date')) || [];
    let dayArray = JSON.parse(localStorage.getItem('date')) || [];
    let latestEntry = dayArray.filter(item => item.theme === theme).pop();
    
    memory.forEach(category => {
        category.themes.forEach(theme => {
            if (checkedThemes.includes(theme.name)) {
                let levelDate = levelDateObject.find(item => item.theme === theme.name);
                theme.cards.forEach(card => {
                    console.log(card.level, latestEntry.counter);
                    // if (Math.pow(2, (card.level - 1)) === latestEntry.counter) {
                        cards.push(card);
                    
                });
            }
        });
    });
    return cards;
}