kiss.app.defineView({
    id: 'card',
    renderer: function (id, target) {
        return createBlock({
            id,
            target,
            items: [
                createTopBar(),
                {
                    display: 'flex',
                    alignItems: 'center',
                    margin: '40px 0',
                    items: [{
                            class: "card",
                            layout: 'vertical',
                            items: [{
                                    id: "fieldRecto",
                                    type: 'textarea',
                                    label: 'Ecrire la question ici',
                                    labelPosition: 'top',
                                    fieldWidth: '100%',
                                    width: '100%',
                                    rows: 10,
                                },
                                {
                                    type: 'spacer',
                                    flex: 1
                                },
                                {
                                    type: 'html',
                                    html: 'Recto',
                                    labelPosition: 'bottom',
                                    margin: '0 0 10px 0'
                                }
                            ]
                        },
                        {
                            class: "card",
                            layout: 'vertical',
                            items: [{
                                    id: "fieldVerso",
                                    type: 'textarea',
                                    label: 'Ecrire la réponse ici',
                                    labelPosition: 'top',
                                    fieldWidth: '100%',
                                    width: '100%',
                                    rows: 10,
                                },
                                {
                                    type: 'spacer',
                                    flex: 1
                                },
                                {
                                    type: 'html',
                                    html: 'Verso',
                                    labelPosition: 'bottom',
                                    margin: '0 0 10px 0'
                                },
                            ]
                        },
                    ]
                },
                {
                    layout: 'horizontal',
                    class: "card-button-container",
                    items: [{
                            type: 'spacer',
                            flex: 1
                        },
                        {
                            type: 'button',
                            text: 'Annuler',
                            icon: 'fas fa-times',
                            class: "card-button",
                            action: () => {
                                kiss.router.navigateTo('theme')
                            }
                        },
                        {
                            type: 'button',
                            text: 'Enregistrer',
                            icon: 'fas fa-save',
                            class: "card-button",
                            action: () => {
                                // Création d'une nouvelle carte
                                if (currentCard == null) {
                                    const recto = $('fieldRecto').getValue()
                                    const verso = $('fieldVerso').getValue()
                                    if (!recto || !verso) {
                                        return createNotification('Veuillez remplir les deux champs')
                                    }
                                    console.log(currentCategory, currentTheme)
                                    addCard(currentCategory, currentTheme, recto, verso)
                                    $('fieldRecto').setValue('')
                                    $('fieldVerso').setValue('')
                                    kiss.router.navigateTo('theme')
                                } else {
                                    // Modification d'une carte
                                    const recto = $('fieldRecto').getValue()
                                    const verso = $('fieldVerso').getValue()
                                    if (!recto || !verso) {
                                        return createNotification('Veuillez remplir les deux champs')
                                    }
                                    updateCard(currentCategory, currentTheme, currentCard.id, recto, verso)
                                    $('fieldRecto').setValue('')
                                    $('fieldVerso').setValue('')
                                    kiss.router.navigateTo('theme')
                                }
                            }
                        },
                    ]
                }
            ],
            methods: {
                load: function () {
                    if (currentCard) {
                        $('fieldRecto').setValue(currentCard.recto)
                        $('fieldVerso').setValue(currentCard.verso)
                    }
                }
            }
        })
    }
})