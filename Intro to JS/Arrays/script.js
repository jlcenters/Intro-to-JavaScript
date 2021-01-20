
//init array
let database = ['turtle','dog','cat','bird'];
console.log(database.length);

//get and set
let animal = database[0];
database[0] = 'lizard';

//get last
let last = database[database.length - 1];

//adds object to end of array
database.push('fish');

//removes last object
database.pop();


//iterating array
let scores = [10,20,10];

let i = 0;
while(i < scores.length) {
    console.log(scores[i]++);
    i++

}

for(i = 0; i < scores.length; i++) {
    console.log(scores[i]++);

}


//FOR EACH
scores.forEach(function(entry, index) {
    console.log(entry + index);
    scores[index]++;
});

let catalog = [
    {
        title: 'JS For Beginners',
        author: 'Zenva',
        copies: 1
    },
    {
        title: 'HTML For Beginners',
        author: 'Zenva',
        copies: 1
    },
    {
        title: 'CSS For Beginners',
        author: 'Zenva',
        copies: 1
    }
];

catalog.forEach(function(entry, index) {
    if(entry.author == 'Zenva') {
        entry.copies++;
    }
});


//MULTIDIMENSIONAL ARRAYS
//used to create tables of information
//divides into rows and columns

let a = [[1,2,3], [4,5,6], [7,8,9,0]];
console.log(a);

//go into first array, then second
console.log(a[0][1]);

a[1][2] = 600;
console.log(a[1][2]);

//like a grid array[y][x]
let terrains = [
    ['desert','desert','grass','grass'],
    ['desert','grass','water','grass'],
    ['grass','grass','water','water'],
    ['grass','grass','grass','grass']
];
