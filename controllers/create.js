/**
 * Ajoute une nouvelle catégorie
 * 
 * @param {string} name 
 * @returns 
 */
function addCategory(name) {
    // Vérifie si la catégorie existe déjà en vérifiant si le nom est déjà présent dans le localStorage
    const hasCategory = memory.find(category => category.name === name)

    if (hasCategory) {
        return false
    }
    // Crée un nouvel objet catégorie avec un nom et un tableau de thèmes vide
    const newCategory = {
        name,
        themes: []
    }

    // Ajoute la nouvelle catégorie au localStorage
    memory.push(newCategory)
    localStorage.setItem('memory', JSON.stringify(memory))
    return true
}

/**
 * Ajoute un nouveau thème
 * 
 * @param {string} categoryName 
 * @param {string} themeName 
 * @returns 
 */
function addTheme(categoryName, themeName) {
    // Vérifie si le thème existe déjà en vérifiant si le nom est déjà présent dans le localStorage
    const hasTheme = memory
        .find(category => category.name === categoryName).themes
        .find(theme => theme.name === themeName)

    if (hasTheme) {
        return false
    }
    // Crée un nouvel objet thème avec un nom et un tableau de cartes vide
    const newTheme = {
        name: themeName,
        cards: []
    }
    // Ajoute le nouveau thème à la catégorie
    memory.forEach(category => {
        if (category.name === categoryName) {
            category.themes.push(newTheme)
        }
    })
    localStorage.setItem('memory', JSON.stringify(memory))
    return true
}

/**
 * Ajoute un nouvelle carte
 * 
 * @param {string} categoryName 
 * @param {string} themeName 
 * @param {string} recto 
 * @param {string} verso 
 */
function addCard(categoryName, themeName, recto, verso, level) {
    // Crée un nouvel objet carte avec un id unique, un recto, un verso et un niveau initial de 1
    const newCard = {
        id: Math.random(),
        recto,
        verso,
        level
    }
    // Ajoute la nouvelle carte au thème
    memory.forEach(category => {
        if (category.name === categoryName) {
            category.themes.forEach(theme => {
                if (theme.name === themeName) {
                    theme.cards.push(newCard)
                }
            })
        }
    })
    localStorage.setItem('memory', JSON.stringify(memory))
}