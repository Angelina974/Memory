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

function deleteCard(){
    
}