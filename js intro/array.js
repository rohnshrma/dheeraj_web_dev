// arrays are reference data type used to store multiple values of similar or different data types
// [ ] are used to create an array

var names = ["rohan", "sohan", "mohan"];

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

// add a new item at the end of an array
names.push("khush");

console.log(names);

// add a new item at the start of an array
names.unshift("zero");
console.log(names);

// remove last item from an array
names.pop();
console.log(names);

// remove first item from an array
names.shift();
console.log(names);

names.splice(1, 0, "hemant", "dheeraj"); // insert index , delete count , new items
console.log(names);

// names.splice(1, 1, "hemant", "dheeraj"); // insert index , delete count , new items
// console.log(names);
