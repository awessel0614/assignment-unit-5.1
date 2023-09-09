console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/

const me = {
  // TODO - add properties here
  firstName: 'Ashley',
  lastName: 'Wessel',
  hasSiblings: true,
  shoeCount: 35,
  favThreeFoods: ['pizza,' + ' ' + 'pasta,' + ' ' + 'sandwiches']
};
console.log('A little about me:', me);




/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/

let fullName = me.firstName + ' ' + me.lastName;
console.log(fullName);




/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/

console.log(me.favThreeFoods[0]);
console.log(me.favThreeFoods[me.favThreeFoods.length-1]);




/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/

console.log(me.shoeCount);
me.shoeCount += 1;
console.log(me.shoeCount);




/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/

me.favoriteColor = 'blue';
console.log(me.favoriteColor);




//appending to the DOM

function displayMe(meInput) {
  let meList = document.querySelector('#me');
  meList.innerHTML = '';
  //for(let fact of meInput) {
    //console.log(fact);
    meList.innerHTML += `
    <h2>Full Name: ${fullName}</h2>
    <p>Do I have siblings? ${me.hasSiblings}</p>
    <p>How many pairs of shoes do I own? ${me.shoeCount}</p>
    <p>What are my three favorite foods? ${me.favThreeFoods}</p>
    `;
  //}
}
displayMe(me);


