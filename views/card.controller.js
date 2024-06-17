kiss.app.defineViewController("card", {
    /**
     * Fonction appelée lors de l'initialisation de la vue
     */
    load: function () {
        // Si une carte est sélectionnée, on affiche son recto et son verso dans les champs texte
        if (currentCard) {
            $('fieldRecto').setValue(currentCard.recto)
            $('fieldVerso').setValue(currentCard.verso)
        }
    },

    /**
     * Enregistre ou met à jour une carte en fonction du contexte
     * - Si currentCard est null => Création d'une nouvelle carte
     * - Sinon => Modification de la carte actuelle
     */
    saveOrUpdate() {
        
        if (currentCard == null) {
            // Création d'une nouvelle carte
            const recto = $('fieldRecto').getValue()
            const verso = $('fieldVerso').getValue()
            const levelCard = $('level').getValue()

            if (!recto || !verso) {
                return createNotification('Veuillez remplir les deux champs')
            }

            addCard(currentCategory, currentTheme, recto, verso, levelCard)

            $('fieldRecto').setValue('')
            $('fieldVerso').setValue('')

            kiss.router.navigateTo('theme')

        } else {
            // Modification d'une carte
            const recto = $('fieldRecto').getValue()
            const verso = $('fieldVerso').getValue()
            const levelCard = $('level').getValue()

            if (!recto || !verso) {
                return createNotification('Veuillez remplir les deux champs')
            }

            updateCard(currentCategory, currentTheme, currentCard.id, recto, verso, levelCard)

            $('fieldRecto').setValue('')
            $('fieldVerso').setValue('')
            kiss.router.navigateTo('theme')
        }
    }
})