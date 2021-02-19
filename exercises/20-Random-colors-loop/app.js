function getColor(colorNumber = 0) {
    //make sure parameter is a number and not a string by converting the value to int:
    colorNumber = parseInt(colorNumber);
    switch (colorNumber) {
        case 1: return "red";
            break;
        case 2: return "yellow";
            break;
        case 3: return "blue";
            break;
        case 4: return "green";
            break;
        default: return "black";
            break;
    }
}

function getAllStudentColors() {

    //your loop here
    for (let index = 0; index < 10; index++) {
        var numRamdon= (Math.floor(Math.random() * 10) % 4) + 1;
        var exampleColor = getColor(numRamdon);
        console.log(exampleColor);
    }
}

getAllStudentColors();