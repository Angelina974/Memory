/**
 * Choisit les cartes à jouer
 * Pour le moment, prend toutes les cartes des thèmes sélectionnés dans l'UI
 * 
 * @returns {Array<Object>} Tableau de cartes
 */

let numberClicked = 0;

function chooseCards(cardNumber) {

    if (numberClicked < 1) {
    let cards = [];
    let cardsLevelOne = [];
    let levelDateObject = JSON.parse(localStorage.getItem('date')) || [];
    let levelDate;

    memory.forEach(category => {
        category.themes.forEach(theme => {
            if (checkedThemes.includes(theme.name)) {
                levelDate = levelDateObject.find(item => item.theme === theme.name);
                theme.cards.forEach(card => {
                    console.log(card, levelDate.nbrCard);
                    if (Math.pow(2, (card.level - 1)) === levelDate.counter) {
                        cards.push(card);
                    }
                    if (card.level === 1) {
                        cardsLevelOne.push(card);
                    }
                });
            }
        });
    });

    // Call chooseNumberOneCard after collecting all level 1 cards
    chooseNumberOneCard(cardsLevelOne, cards, levelDate);
    
    console.log(cards);
    numberClicked += 1;

    return cards;
    }
    else {
        new Notification("Vous avez déjà joué aujourd'hui !");
    }
    
}

function chooseNumberOneCard(cardArray, cards, numbersOfCards) {
    console.log(cardArray);
    for (let i = 0; i < numbersOfCards.nbrCard; i++) {
        let lengthCard = cardArray.length;
        console.log("length ", lengthCard);
        let number = Math.floor(Math.random() * lengthCard);
        console.log("nombre aléatoire ", number);
        cards.push(cardArray[number]);
        cardArray.splice(number, 1);
    }
}
