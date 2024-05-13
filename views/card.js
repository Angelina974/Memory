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
                            items: [
                                {
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
                            items: [
                                {
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
                    items: [
                        {
                            type: 'spacer',
                            flex: 1
                        },
                        {
                            type: 'button',
                            text: 'Annuler',
                            icon: 'fas fa-times',
                            class: "card-button",
                        },
                        {
                            type: 'button',
                            text: 'Enregistrer',
                            icon: 'fas fa-save',
                            class: "card-button",
                        },
                    ]
                }
            ]
        })
    }
})