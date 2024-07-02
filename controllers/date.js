function localStorageSetItem(theme) {
    // Récupérer la date actuelle
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    let currentDay = [year, month, day].join('-');

    let dayArray = JSON.parse(localStorage.getItem('date')) || [];

    let latestEntry = dayArray.filter(item => item.theme === theme).pop();

    let difference = latestEntry ? calculateDays(latestEntry.currentDay, currentDay) : null;
    if (difference === null) {
        let objectDate = { theme, currentDay, counter: 0, nbrCard: 2}; 
        dayArray.push(objectDate);
        localStorage.setItem('date', JSON.stringify(dayArray));
    } else if (difference > 1) {
        //tout les jours niveau 1
        latestEntry.counter += 1;

        arrayPlayedOnce.filter(item => item !== theme);
        console.log(arrayPlayedOnce);

        localStorage.setItem('date', JSON.stringify(dayArray));
        console.log(`Mise à jour: ${JSON.stringify(latestEntry)}`);
    } else {
        console.log("Déjà enregistré pour la même date");
    }
    
}
    



function localStorageSetItemFirstTime(theme, nbrCard) {
    // Récupérer la date actuelle
    console.log(nbrCard)
    var d = new Date();
    d.setDate(d.getDate() - 1);
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();


    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    let currentDay = [year, month, day].join('-');

    let dayArray = JSON.parse(localStorage.getItem('date')) || [];

    let latestEntry = dayArray.filter(item => item.theme === theme).pop();

    let difference = latestEntry ? calculateDays(latestEntry.currentDay, currentDay) : null;

    if (difference === null) {
        let objectDate = { theme, currentDay, counter: 0, nbrCard}; 
        dayArray.push(objectDate);
        localStorage.setItem('date', JSON.stringify(dayArray));
        console.log(`Nouvelle entrée: ${JSON.stringify(objectDate)}`);
    } else if (difference > 1) {
        latestEntry.counter += 1;
        arrayPlayedOnce.filter(item => item !== theme);
        console.log(arrayPlayedOnce);
        localStorage.setItem('date', JSON.stringify(dayArray));
        console.log(`Mise à jour: ${JSON.stringify(latestEntry)}`);
    } else {
        console.log("Déjà enregistré pour la même date");
    }
}

//Calcul de jours
function calculateDays(date1, date2) {
    let dateParts1 = date1.split('-');
    let dateParts2 = date2.split('-');

    let year1 = parseInt(dateParts1[0]);
    let month1 = parseInt(dateParts1[1]) - 1; 
    let day1 = parseInt(dateParts1[2]);

    let year2 = parseInt(dateParts2[0]);
    let month2 = parseInt(dateParts2[1]) - 1;
    let day2 = parseInt(dateParts2[2]);

    let startDate = new Date(year1, month1, day1);
    let endDate = new Date(year2, month2, day2);

    let differenceEnMs = endDate - startDate;

    let differenceEnJours = differenceEnMs / (1000 * 60 * 60 * 24);

    return differenceEnJours;
}

