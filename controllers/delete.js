/**
 * Supprime un thème
 * 
 * @param {string} categoryName 
 * @param {string} themeName 
 */
function deleteTheme(categoryName, themeName) {
    memory.forEach(category => {
        if (category.name === categoryName) {
            category.themes = category.themes.filter(theme => theme.name !== themeName)
        }
    })
    localStorage.setItem('memory', JSON.stringify(memory))
}