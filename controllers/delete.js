/**
 * Supprime un thème
 * 
 * @param {string} categoryName 
 * @param {string} themeName 
 */
function deleteTheme(categoryName, themeName) {
    // Supprime le thème de la catégorie
    memory.forEach(category => {
        // Vérifie si la catégorie correspond à celle passée en paramètre
        if (category.name === categoryName) {
            // Filtre les thèmes pour supprimer le thème que l'on veut par rapport à son nom
            category.themes = category.themes.filter(theme => theme.name !== themeName)
        }
    })
    localStorage.setItem('memory', JSON.stringify(memory))
}

/**
 * Supprime une carte
 * 
 * @param {string} categoryName 
 * @param {string} themeName 
 * @param {number} id 
 */
function deleteCard(categoryName, themeName, id){
    // Supprime la carte du thème
    memory.forEach(category => {
        // Vérifie si la catégorie correspond à celle passée en paramètre
        if (category.name === categoryName) {
            // Filtre les thèmes pour supprimer le thème que l'on veut par rapport à son nom
            category.themes.forEach(theme => {
                if (theme.name === themeName) {
                    theme.cards = theme.cards.filter(card => card.id !== id)
                }
            })
        }
    })
    localStorage.setItem('memory', JSON.stringify(memory))
}