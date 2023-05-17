/*
Clean up on Aisle 3;

Suppose you are a Data Engineer working for some BIG company. Now, suppose there is data
that is being scraped from some API and you get a JSON result back. Now the schema (the data layout)
you are required to store it in is not compatable with the JSON data received from the API.

Reminder: JSON data is ALWAYS a string and JavaScript Object is an object. You can convert between the two data-types by parsing and stringifying them.

API
	JSON to JS Object: JSON.parse(string) - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
	JS Object to JSON: JSON.stringify(object) - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
	Spliting Strings: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
	String to Number: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

Good Reads: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

API JSON Shape:
[
	{
		"name": "John Doe",
		"age": "42",
		"occupation": "Software Engineer III"
	},
	{
		"name": "Jane Doe",
		"age": "21",
		"occupation": "Software Engineer - Intern"
	},
	... more data
]

Internal JSON Shape Required
[
	{
		"fName": string,
		"lname": string,
		"age": number,
		"occupation": string
	}
]

Direction: Write a program that takes the malformed JSON data and formats it for internal use.
*/

// -- The following is just to make it easier for the intellisense
/**
 * @typedef {Object} Malformed
 * @property {String} name
 * @property {String} age
 * @property {String} occupation
 */

/**
 * @typedef {Object} Correct
 * @property {String} fName
 * @property {String} lName
 * @property {Number} age
 * @property {String} occupation
 */
// -- end

const json = "[{\"name\":\"John Doe\",\"age\":\"42\",\"occupation\":\"Software Engineer III\"},{\"name\":\"Jane Doe\",\"age\":\"21\",\"occupation\":\"Software Engineer - Intern\"},{\"name\":\"Bob Dylan\",\"age\":\"32\",\"occupation\":\"Director\"},{\"name\":\"Alice Cameron\",\"age\":\"52\",\"occupation\":\"Dean of Medicine\"}]";

/**
 * Converts from the Malformed data shape to the Correct format.
 * @param {Malformed} data 
 * @returns {Correct}

 */
let obj = JSON.parse(json);
let array = [];
for(let i = 0; i < obj.length; i++) {
	let newObj = convert(obj[i]);
	array.push(newObj);
}
function convert(data) {
		let name = data.name.split(" ")
		return {
				fName : name[0],
				lName : name[1],
				age : Number(data.age),
				occupation : data.occupation
			}
	
}
console.log(array);