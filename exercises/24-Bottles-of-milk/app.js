// Your code here:
function song() {


    for (var index = 99; index >= 0; index--) {
        if (index > 1) {
            text = index + " bottles of milk on the wall, " + index + " bottles of milk. Take one down and pass it around, " + index + " bottles of milk on the wall.";
            console.log(text);
        }
        else if (index == 1) {
            text = index + " bottle of milk on the wall, " + index + " bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.";
            console.log(text);
        }
        else if (index == 0) {
            text = " No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall."
            console.log(text);
        }
    }

}

song();