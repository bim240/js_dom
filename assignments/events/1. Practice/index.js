//Select the section with an id of container without using querySelector.
var container = document.getElementById('container');


//Select the section with an id of container using querySelector.
var container = document.querySelector('#container');


//Select all of the list items with a class of "second".
var allsecond = document.querySelectorAll('.second');


//Select a list item with a class of third, but only the list item inside of the ol tag.
var uniqueselect = document.querySelectorAll('ol .third ');
// console.log(uniqueselect);


//Give the section with an id of container the text "Hello!".
container.insertAdjacentHTML('beforebegin', 'Hello!');


//Add the class main to the div with a class of footer.
var footer = document.querySelector('.footer');
footer.classList.add('main');


//Remove the class main on the div with a class of footer.
footer.classList.remove('main');


//Create a new li element.
var newLi = document.createElement('li');




//Give the li the text "four".
newLi.innerHTML = "four"



//Append the li to the ul element.
var newUl = document.createElement('ul');
document.body.append(newUl);
newUl.append(newLi);


//Loop over all of the list inside the ol tag and give them a background color of "green".
var allol = document.querySelectorAll('ol li');
console.dir(allol);
for(let i of allol) {
    i.style.background = "green";
}


//Remove the div with a class of footer.
footer.remove();