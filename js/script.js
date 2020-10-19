

window.onload = () =>{
    document.querySelector('#excuse').innerHTML = generateExcuse();
}

let generateExcuse = () => {
    
    let pronoun = ["A", 'The'];
    let subject = ["nun", "racoon", 'dog', 'driver', 'comedian', "pincone", "cop"];
    let action = ["took my", 'threw my', 'stole my', "bit my", "destroyed my", ];
    let possetion = ['homework', 'feet', 'car', "shoe"];
    let where = ['on the street', 'in my house', 'in my driveway'];

    let proIndex = Math.floor(Math.random() * pronoun.length);
    let subjIndex = Math.floor(Math.random() * subject.length);
    let actIndex = Math.floor(Math.random() * action.length);
    let possIndex = Math.floor(Math.random() * possetion.length);
    let whereIndex = Math.floor(Math.random() * where.length);

    return pronoun[proIndex] + ' ' + subject[subjIndex] + ' ' + action[actIndex] + ' ' + possetion[possIndex] + ' ' + where[whereIndex]
};