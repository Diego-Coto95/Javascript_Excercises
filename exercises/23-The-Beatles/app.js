function sing() {
    let text = "";
    for (let index = 0; index < 12; index++) {
        if (index == 4) {
            text += "words of wisdom, ";
        } else if (index == 10) {
            text += "there will be an answer, ";
        }
        else {
            text += "let it be, ";
        }
    }
    return text;
}

//Your code above ^^^

console.log(sing());

