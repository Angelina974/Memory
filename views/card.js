kiss.app.defineView({
    id: 'card',
    renderer: function (id, target) {
        return createBlock({
            id,
            target,
            items: [
                // Top bar
                createTopBar(),

                // Carte
                {
                    display: 'flex',
                    alignItems: 'center',
                    margin: '40px 0',
                    items: [
                        // Recto de la carte
                        {
                            class: "card",
                            layout: 'vertical',
                            items: [
                                // Champ pour saisir le recto
                                {
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
                        // Verso de la carte
                        {
                            class: "card",
                            layout: 'vertical',
                            items: [
                                // Champ pour saisir le verso
                                {
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

                // Boutons de la carte
                {
                    layout: 'horizontal',
                    class: "card-button-container",
                    items: [
                        // Block d'espacement pour pousser les boutons à droite du conteneur
                        {
                            type: 'spacer',
                            flex: 1
                        },
                        // Bouton pour annuler
                        {
                            type: 'button',
                            text: 'Annuler',
                            icon: 'fas fa-times',
                            class: "card-button",
                            action: () => kiss.router.navigateTo('theme')
                        },
                        // Bouton pour enregistrer
                        {
                            type: 'button',
                            text: 'Enregistrer',
                            icon: 'fas fa-save',
                            class: "card-button",
                            action: () => $(id).saveOrUpdate()
                        }
                    ]
                }
            ]
        })
    }
})