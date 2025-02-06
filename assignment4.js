// **Assignment 4: Working with map(), filter(), and **reduce()
// Task 1: Use map() to transform data
// Create an array of product objects with properties name, price, and category.
// Use map() to create a new array with product names in uppercase.
// Task 2: Use filter() to extract specific data
// Use filter() to create an array of products that belong to the 'Electronics' category.
// Task 3: Use reduce() to calculate a total
// Use reduce() to calculate the total price of all products in the array.
// Task 4: Combine map(), filter(), and reduce()
// Create a function that calculates the total price of products from a specific category using map(), filter(), and reduce().

const product = [
    {
        name: 'Iron Man Helmet Replica',
        price: 199,
        category: 'Electronics',
    },
    {
        name: 'Captain America Shield',
        price: 149,
        category: 'Collectibles',
    },
    {
        name: 'Spider-Man Suit Hoodie',
        price: 59,
        category: 'Apparel',
    },
    {
        name: 'Mjolnir Hammer',
        price: 129,
        category: 'Electronics',
    },
    {
        name: 'Infinity Gauntlet LED Replica',
        price: 249,
        category: 'Electronics',
    },
    {
        name: 'Black Panther Vibranium Necklace',
        price: 39,
        category: 'Electronics',
    },
    {
        name: 'Doctor Strange Sling Ring',
        price: 29,
        category: 'Jewelry',
    },
    {
        name: 'Loki TVA Variant Jacket',
        price: 79,
        category: 'Apparel',
    },
    {
        name: 'Groot Flower Pot',
        price: 24,
        category: 'Home Decor',
    },
    {
        name: 'Deadpool Katanas Wall Mount Set',
        price: 199,
        category: 'Collectibles',
    }
];

//task 1
const productUpper = product.map((prod)=>prod.name.toUpperCase());
console.log(productUpper);

//task 2
const electronicProducts = product.filter (prod=>prod.category==='Electronics');
console.log(electronicProducts);

//task 3
const totalPrice = product.reduce((acc,cur,i,arr)=>acc+cur.price,0);
console.log("Total Price of all products : ",totalPrice);

//task 4
const getCategoryPrice = (category) =>{
    return product
    .filter((prod)=>prod.category === category)
    .map((prod)=>prod.price)
    .reduce((acc,cur)=>acc+cur,0);
}
console.log("Total Electronics Price : ",getCategoryPrice('Electronics'));
console.log("Total Collectibles Price : ",getCategoryPrice('Collectibles'));
console.log("Total Apparel Price : ",getCategoryPrice('Apparel'));

/**
 * OUTPUT
 $ node "d:\Code\JSTraining\Training_Code\Javascript_Concepts_Assignment\assignment4.js"
[
  'IRON MAN HELMET REPLICA',
  'CAPTAIN AMERICA SHIELD',
  'SPIDER-MAN SUIT HOODIE',
  'MJOLNIR HAMMER',
  'INFINITY GAUNTLET LED REPLICA',
  'BLACK PANTHER VIBRANIUM NECKLACE',
  'DOCTOR STRANGE SLING RING',
  'LOKI TVA VARIANT JACKET',
  'GROOT FLOWER POT',
  'DEADPOOL KATANAS WALL MOUNT SET'
]
[
  {
    name: 'Iron Man Helmet Replica',
    price: 199,
    category: 'Electronics'
  },
  { name: 'Mjolnir Hammer', price: 129, category: 'Electronics' },
  {
    name: 'Infinity Gauntlet LED Replica',
    price: 249,
    category: 'Electronics'
  },
  {
    name: 'Black Panther Vibranium Necklace',
    price: 39,
    category: 'Electronics'
  }
]
Total Price of all products :  1155
Total Electronics Price :  616
Total Collectibles Price :  348
Total Apparel Price :  138

 */