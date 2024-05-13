function addCategory(name) {
    const hasCategory = memory.find(category => category.name === name)
    if (hasCategory) {
        return false
    }
    const newCategory = {
        name,
        themes: []
    }
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
        recto,
        verso
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