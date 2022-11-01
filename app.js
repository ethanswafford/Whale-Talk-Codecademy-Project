// Create a variable named input that is equal to any phrase you’d like.
// This variable will contain the text you want to translate into “whale talk”

let input = 'Coding is cool';

// Whales only speak with the vowels, “a”, “e”, “i”, “o”, and “u”. Using these lowercase letters, create an array named vowels.
// This array will not be updated so be sure to choose the appropriate declaration keyword.
// Note: The use of this array will be more apparent within the following steps.

let whaleTalk = ['a', 'e', 'i', 'o', 'u'];

// Create a variable named resultArray and set it equal to an empty array: [].
// This will serve as a place to store the vowels from the input string.

let resultArray = [];

// Create a loop to iterate through each letter of the input variable text.
// In a later step, we will compare each letter with our vowels array.


// Create a nested for loop inside of the for loop you just wrote.
// Make the inner loop iterate through the vowels array each time the outer loop runs.
// This will enable you to check each letter of input against all the vowels elements during each iteration.

// To check your work, log the iterator number positions inside the inner for loop and run your code.
// You should see 0 through 4 repeatedly because vowels is 5 elements long.

// Inside the second for loop, write a code block that compares the input letter to every letter in the vowels array.
// Note: To check that everything is working properly, log letter matches to the console.



for (i = 0; i < input.length; i++) {
    //console.log('i is ' + i);
    for (c = 0; c < whaleTalk.length; c++) {
        //console.log(`c index is ${c}`);
        if (input[i] === whaleTalk[c]) {
            console.log(input[i])
        }
    }
}