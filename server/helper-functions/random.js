/*----------------------------------
- Helper functions for randomness: -
-----------------------------------*/

// Function to randomly choose an element from an array (but also removes it):
export function popChoice(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array.splice(randomIndex, 1)[0];
}

// Function to randomly choose an element from an array:
export function choice(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    var randomElement = array[randomIndex];
    return randomElement;
}

// shuffle(): Fisher-Yates shuffle from https://www.frankmitchell.org/2015/01/fisher-yates/
export function shuffle(array) {
    var i = 0, j = 0, temp = null;
    //Start with i one less than the array size, and decrement i everytime
    for (i = array.length - 1; i > 0; i -= 1) {
        //Math.random() returns a random number between 0 (inclusive) and 1 (exclusive)
        //Math.floor() function returns the largest integer less than or equal to a given number.
        //This will return an integer that is a possible index of the array
        j = Math.floor(Math.random() * (i + 1));
        //Swap the last element of the array (index i) with the element at index j (randomly generated:
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    //return the shuffled array
    return array;
}