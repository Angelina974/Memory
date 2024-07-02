/**
 * Met à jour une catégorie
 * 
 * @param {string} oldName 
 * @param {string} newName 
 */
function updateCategory(oldName, newName){
    // Vérifie si l'ancien nom correspond au nom actuelle de la catégorie et le remplace par le nouveau nom
    memory.forEach(category => {
        if (category.name === oldName) {
            category.name = newName
        }
    })
    // Met à jour le localStorage
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
function updateCard(categoryName, themeName, id, recto, verso, level){

    // Parcours toutes les catégories et les thèmes pour trouver la bonne carte et la mettre à jour
    memory.forEach(category => {
        if (category.name === categoryName) {
            category.themes.forEach(theme => {
                if (theme.name === themeName) {
                    theme.cards.forEach(card => {

                    // Vérifie si l'id de la carte correspond à l'id de la carte passée en paramètre
                        if(card.id === id){

                            // Met à jour le recto et le verso de la carte
                            card.verso = verso
                            card.recto = recto
                            card.level = level
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
function updateCardLevel(categoryName, themeName, id, level) {
    memory.forEach(category => {
        if (category.name === categoryName) {
            category.themes.forEach(theme => {
                if (theme.name === themeName) {
                    theme.cards.forEach(card => {
                        if(card.id === id){
                            // Met à jour le niveau de la carte
                            card.level = level
                        }
                    })
                }
            })
        }
    })

    localStorage.setItem('memory', JSON.stringify(memory))
}