// Function to creat a new category
function addCategory(name) {
    // Check if the category already exists
    const hasCategory = memory.find(category => category.name === name)
    // If the category already exists, return false
    if (hasCategory) {
        return false
    }
    // Create a new category
    const newCategory = {
        name,
        themes: []
    }
    // Add the new category to the memory local storage
    memory.push(newCategory)
    localStorage.setItem('memory', JSON.stringify(memory))
    return true
}

function addTheme(categoryName, themeName) {
    const hasTheme = memory
        .find(category => category.name === categoryName).themes
        .find(theme => theme.name === themeName)

    if (hasTheme) {
        return false
    }
    const newTheme = {
        name: themeName,
        cards: []
    }
    memory.forEach(category => {
        if (category.name === categoryName) {
            category.themes.push(newTheme)
        }
    })
    localStorage.setItem('memory', JSON.stringify(memory))
    return true
}

function addCard(categoryName, themeName, recto, verso) {
    const newCard = {
        id: Math.random(),
        recto,
        verso,
        level: 1
    }
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