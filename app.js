// --------------Question 1-----------
// function addNumber(num) {
//     return function(x) {
//       return x + num;
//     }
//   }
//   const addFive = addNumber(5);
// console.log(addFive(10)); 



// --------------Question 2-----------


// function recSearch(arr, l, r, x)
// {
// 	if (r < l)
// 		return -1;
// 	if (arr[l] == x)
// 		return l;
// 	if (arr[r] == x)
// 		return r;
// 	return recSearch(arr, l+1, r-1, x);
// }
	
// 	// Driver Code
// 	let arr = [12, 34, 54, 2, 3];
// 	let i;
// 	let n = arr.length;
// 	let x = prompt("Enter number for searcing");
// 	let index = recSearch(arr, 0, n - 1, x);

// 	if (index != -1){
// 	document.write(`True, ${x} is present at index ${index}`);
// 	}
// 	else{
// 		document.write("False" + x + " not present ");
// 	}
	
        


    // -------------Question No 3-------------

    // function addParagraph(text) {
    //     const newParagraph = document.createElement("p"); // Create a new paragraph element
    //     newParagraph.textContent = text; // Set the text content of the new paragraph element
    //     document.body.appendChild(newParagraph); // Append the new paragraph element to the end of the document body
    //   }
    //   addParagraph("Hello, world!"); // Add a new paragraph element to the document with the text "Hello, world!"
      
    // -------------Question No 4-------------

// function addListItem(text) {
//     const list = document.querySelector("ul"); // Get the unordered list element
//     const newListItem = document.createElement("li"); // Create a new list item element
//     newListItem.textContent = text; // Set the text content of the new list item element
//     list.appendChild(newListItem); // Append the new list item element to the end of the unordered list
//     }
//     addListItem("Item 1"); // Add a new list item to the unordered list with the text "Item 1"
//     console.log(addListItem);
     
// -------------Question No 5-------------

        
// function changeBackgroundColor(element, color) {
//     element.style.backgroundColor = color;
//   }
//   let myElement = document.getElementById("myElement"); // Get the HTML element with the ID "myElement"
//   changeBackgroundColor(myElement, "red"); // Change the background color of the element to red

// -------------Question No 6-------------
// function saveObjectToLocalStorage(key, object) {
//     let objectString = JSON.stringify(object); // Convert the object to a JSON string
//     localStorage.setItem(key, objectString); // Save the JSON string to localStorage with the specified key
//   }
//   let myObject = {name: "Faizan", age: 22}; // Create an object to store
//   saveObjectToLocalStorage("myObject", myObject); // Save the object to localStorage with the key "myObject"
//     

// -------------Question No 7-------------
// function getObjectFromLocalStorage(key) {
//     const objectString = localStorage.getItem(key); // Get the JSON string from localStorage with the specified key
//     const object = JSON.parse(objectString); // Parse the JSON string to an object
//     return object; // Return the object
//   }
//   const myObject = getObjectFromLocalStorage("myObject"); // Retrieve the object from localStorage with the key "myObject"
//   console.log(myObject); // Log the retrieved object to the console

// -------------Question No 8-------------
function saveObjectPropertiesToLocalStorage(object) {
    // Save each property of the object to localStorage using the property name as the key and the property value as the value
    Object.keys(object).forEach(key => {
      const value = object[key];
      localStorage.setItem(key, JSON.stringify(value));
    });
  
    // Retrieve each property from localStorage and create a new object with the same properties and values
    const newObject = {};
    Object.keys(object).forEach(key => {
      const value = JSON.parse(localStorage.getItem(key));
      newObject[key] = value;
    });
  
    // Return the new object
    return newObject;
  }

  const myObject = {name: "Faizan Niaz", age: 22}; // Create an object to save
const retrievedObject = saveObjectPropertiesToLocalStorage(myObject); // Save the object properties to localStorage and retrieve them as a new object
console.log(retrievedObject); // Log the retrieved object to the console












