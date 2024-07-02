kiss.app.defineView({
    id: 'category',
    
    renderer: function (id) {
        return createBlock({
            id,
            target: 'content',
            items: [
                // Titre
                {
                    type: 'html',
                    id: 'categoryTitle',
                    class: 'categoryTitle',
                },

                // Zone pour ajouter un nouveau thème
                {
                    class: "themeAdd",
                    display: 'flex',
                    alignItems: 'center',
                    margin : '20px 10px 10px 25px',
                    items: [
                        {
                            id: "fieldTheme",
                            type: 'text',
                            label: 'Ajouter un thème',
                            labelPosition: 'top',
                            placeholder: 'Exemple : Animaux, Nature, Sciences, etc...',
                            fontSize: 13,
                            fieldWidth: 280,
                            classes: {
                                'field-label': 'field-title'
                            },
                            events: {
                                keyPress: function (e) {
                                    if (e.key === 'Enter') {
                                        const checkbox = document.querySelectorAll('input[type=checkbox]');
                                        const nbrCard = $('nbrCard').getValue();
                                        checkbox.forEach((cb) => {
                                            if (cb.checked) {
                                            themeChecked = cb.id;
                                            }
                                        });
                                        localStorageSetItemFirstTime(themeChecked, nbrCard)
                                        $(id).addNewTheme()
                                    }
                                }
                            }
                        },
                        
                        {
                            type: "number",
                            class: "inputTheme",
                            label: "Nombre de cartes par jours",
                            placeholder: "nombre de cartes..",
                            value: 1,
                            id: "nbrCard",
                        },
                        {
                            type: 'button',
                            icon: 'fas fa-plus',
                            class: 'addThemeButton',
                            iconSize: 16,
                            action: () => {
                                themeChecked = $('fieldTheme').getValue()
                                const nbrCard = $('nbrCard').getValue();
                                localStorageSetItemFirstTime(themeChecked, nbrCard)
                                $(id).addNewTheme()
                            },
                            events: {
                                mouseOver: function () {
                                    this.setAnimation('zoomIn')
                                }
                            }
                        },
                    ]
                },
                

                // Zone pour afficher les thèmes de la catégorie
                {
                    class: 'themes',
                    id: "themeHtml",
                  
                },
                
                
                // Conteneur du bouton pour jouer (permet de le centrer)
                {
                    class: 'playButtonContainer',
                    items: [
                        // Bouton pour jouer
                        {
                            type: 'button',
                            text: 'Jouer',
                            icon: 'fas fa-gamepad',
                            class: "play-button",
                            fontSize: 18,
                            iconSize: 16,
                            animation: {
                                name: 'heartBeat',
                                speed: 'slower',
                                repeat: 'infinite'
                            },
                                action: () => {
                                    const checkbox = document.querySelectorAll('input[type=checkbox]');
                                    checkbox.forEach((cb) => {
                                        if (cb.checked) {
                                        themeChecked = cb.id;
                                        }
                                    });
                                    localStorageSetItem(themeChecked)
                                    $(id).play()

                                },
                            
                                
                        },
                        {
                            borderStyle: "dashed",
                            borderColor: "#dfdfdf",
                            borderRadius: "10px",
                            width: "500px",
                            margin: "20px",
                            padding: "20px",
                            items: [
                                
                                {
                                    type: "html",
                                    html: "<h2 id='dateLevel' class='dateLevel'></h2>",
                                    margin: "0 0 10px 0"
                                },
                                
                            ]
                         },
                
                    ],
                    
                },
                
            ],
        })
    }
})