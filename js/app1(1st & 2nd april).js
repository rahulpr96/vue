// .....1st april 2021
// ...for loop...
// var count = 0;
// for(count=0; count<5;count++) {
//     document.write(count);
// }


// ...for in loop...
// displaying object properties in a loop
// var Property;
// document.write("Navigator Object Properties<br /> ");
// for (Property in navigator) {
//    document.write(Property);
// }


//  ...accessors(get and set)... // not understood ???
// function Book(name) { 
//    Object.defineProperty(this, "name", { 
//        get: function() { 
//          return "Book: " + name;       
//        },        
//        set: function(newName) {            
//          name = newName;        
//        },               
//        configurable: false  // ???   
//     }); 
//  }
//  var myBook = new Book("Single Page Web Applications");
//  console.log(myBook.name);  
//  // we cannot delete the name property because "configurable" is set to false
//  delete myBook.name;    
//  console.log(myBook.name);   
//  // but we can change the value of the name property
//  myBook.name = "Testable JavaScript";
//  console.log(myBook.name); 

//----------------------------------------------------------------------------//

// .....2nd april 2021
// ...adding a metod to a object...
// var person = {
//    fName : 'rahul',
//    lName : 'reddy',
//    name : function() {
//       return this.fName + this.lName;
//    }
// };
// document.write(person.name());

// another way of adding method
// var person = {
//    fName : 'rahul',
//    lName : 'reddy'
// };
// person.name = function() {
//    return this.fName + this.lName;
// };
// document.write(person.name());


// ...converting object to array...
// var person = {
//    name: 'rahul',
//    age: 24,
//    height: `5'9"`
// };
// var array = Object.values(person);
// console.log(array);


// ...getter & setter...
// var person = {
//    name: 'rahul',
//    age: 24,
//    lang: '',
//    get function() {
//       return this.name.toLocaleUpperCase();
//    },
//    set function(value) {
//       return this.lang = value;
//    }
// };
// console.log(person.function);
// person.function = 'en';
// console.log(person.lang);


// ...events...
// form validation
// var x = document.getElementById("name").value;
// form.addEventListener('submit',function(event) {
//    event.preventDefault()
// });
// function validate() {
//    if(x == "") {
//       alert("fill the text");
//    }
// }


// ...mouse overs...
// function mouseOver() {
//    document.write('mouseOver');
//    console.log('over');
// }
// function mouseOut() {
//    document.write('mouseOut');
//    console.log('out');
// }


// ...object...
// creating a constructor function and assigning a method to it
// function book(name, author) {
//    this.name = name,
//    this.author = author,
//    this.addPrice =  addPrice
//    // addPrice = function(value) {
//    //   return this.price = value;
//    // }
// }
// // defining the method
// addPrice = function(value) {
//   return this.price = value;
// }
// var book1 = new book("harry-potter", "jk");
// book1.addPrice(100);
// console.log(book1.name);
// console.log(book1.author);
// console.log(book1.price);


// ...arrays...