/**
 * Choisit les cartes à jouer
 * Pour le moment, prend toutes les cartes des thèmes sélectionnés dans l'UI
 * 
 * @returns {Array<Object>} Tableau de cartes
 */

function chooseCards() {
    
    let cards = [];
    let cardsLevelOne = [];
    let levelDateObject = JSON.parse(localStorage.getItem('date')) || [];
    let levelDate;

    memory.forEach(category => {
        category.themes.forEach(theme => {
            if (checkedThemes.includes(theme.name)) {
                levelDate = levelDateObject.find(item => item.theme === theme.name);
                if (!levelDate) {
                    return;
                }

                theme.cards.forEach(card => {
                    if (Math.pow(2, (card.level - 1)) === levelDate.counter) {
                        console.log(card);
                        cards.push(card);
                    }
                    if (card.level === 1) {
                        cardsLevelOne.push(card);
                    }
                });
            }
        });
    });

    if (cardsLevelOne.length === 0) {
        return [];
    }

    chooseNumberOneCard(cardsLevelOne, cards, levelDate);
    
    return cards;
}

function chooseNumberOneCard(cardArray, cards, numbersOfCards) {
    for (let i = 0; i < numbersOfCards.nbrCard; i++) {
        if (cardArray.length === 0) break;

        let number = Math.floor(Math.random() * cardArray.length);
        cards.push(cardArray[number]);
        cardArray.splice(number, 1);
    }
}
