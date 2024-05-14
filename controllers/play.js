function chooseCards() {
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