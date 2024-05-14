/**
 * Met à jour une catégorie
 * 
 * @param {string} oldName 
 * @param {string} newName 
 */
function updateCategory(oldName, newName){
    memory.forEach(category => {
        if (category.name === oldName) {
            category.name = newName
        }
    })
    localStorage.setItem('memory', JSON.stringify(memory))
}

/**
 * Met à jour une carte
 * 
 * @param {string} categoryName 
 * @param {string} themeName 
 * @param {string} id 
 * @param {string} recto 
 * @param {string} verso 
 */
function updateCard(categoryName, themeName, id, recto, verso){
    memory.forEach(category => {
        if (category.name === categoryName) {
            category.themes.forEach(theme => {
                if (theme.name === themeName) {
                    theme.cards.forEach(card => {
                        if(card.id === id){
                            card.verso = verso
                            card.recto = recto
                        }
                    })
                }
            })
        }
    })
    localStorage.setItem('memory', JSON.stringify(memory))
}

/**
 * Met à jour le niveau d'une carte
 * 
 * @param {string} categoryName 
 * @param {string} themeName 
 * @param {string} id 
 * @param {number} level 
 */
function updateCardLevel(categoryName, themeName, id, level){
    memory.forEach(category => {
        if (category.name === categoryName) {
            category.themes.forEach(theme => {
                if (theme.name === themeName) {
                    theme.cards.forEach(card => {
                        if(card.id === id){
                            card.level = level
                        }
                    })
                }
            })
        }
    })
    localStorage.setItem('memory', JSON.stringify(memory))
}