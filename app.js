// // Part 1 - task 1
// const hour = 20;
// if (hour < 12) {
//   console.log('Good morning.');
// } else if (hour < 18) {
//   console.log('Good afternoon.');
// } else {
//   console.log('Good evening.');
// }
// // task 2
// const speed = 59;
// if (speed > 120) {
//   console.log('Too fast');
// } else if (speed >= 60 && speed <= 120) {
//   console.log('Perfect');
// } else {
//   console.log('Too slow');
// }

// // Part 2 - task 3
// const temperature = 38;
// const fever = temperature > 37.5 ? 'Yes' : 'No';
// console.log(`Fever: ${fever}`);
// // task 4
// const balance = 0;
// console.log(`${balance > 0 ? 'Account has funds' : 'Account is empty'}`);

// // Part 3 - task 5
// const a = 0;
// const b = 'false';
// const c = [];
// const d = null;
// const e = -1;
// console.log(`${a ? 'Truthy' : 'Falsy'}`); //falsy - zero
// console.log(`${b ? 'Truthy' : 'Falsy'}`); //truthy - non-empty string
// console.log(`${c ? 'Truthy' : 'Falsy'}`); //truthy - empty array
// console.log(`${d ? 'Truthy' : 'Falsy'}`); //falsy - null
// console.log(`${e ? 'Truthy' : 'Falsy'}`); //truthy - non-zero number
// // task 6
// const username = '';
// const displayName = username || 'Guest';
// console.log(`User: ${displayName}`);
// // task 7
// const score = 0;
// const liveScore = score ?? 'Not started.';
// console.log(`Live score: ${liveScore}`);

// // Part 4 - task 8
// const profile = {
//   name: 'Dibyadarshan',
//   social: { github: 'DeidraL' },
// };
// const twitterHandle = profile?.social?.twitter ?? 'No twitter';
// console.log(`Twitter handle: ${twitterHandle}`);
// // task 9
// const emptyProfile = null;
// console.log(`Name: ${emptyProfile?.name ?? 'Unknown'}`);

// // Part 5 - task 10
// const recipe = {
//   name: 'Chicken Handi',
//   isVegetarian: false,
//   difficulty: 'Medium',
//   rating: 4.2,
// };
// console.log(
//   `Recipe type: ${recipe.isVegetarian ? 'Vegetarian' : 'Non-vegetarian'}`,
// );
// switch (recipe.difficulty) {
//   case 'Easy':
//     console.log('Suitable for beginers.');
//     break;
//   case 'Medium':
//     console.log('You will enjoy it.');
//     break;
//   case 'Hard':
//     console.log('It is very difficult to cook.');
//     break;
//   default:
//     console.log('You are not suitable for it');
//     break;
// }
// if (recipe.rating >= 4) {
//   console.log('Highly rated.');
// } else if (recipe.rating >= 3) {
//   console.log('Average.');
// } else {
//   console.log('Skip this one.');
// }

// Functions Excercise
// Part 1 - task 1
// function celsiusToFahrenheit(celsius) {
//   const fahrenheit = (celsius * 9) / 5 + 32;
//   console.log(
//     `${celsius} deg celsius is equal to ${fahrenheit} deg fahrenheit.`,
//   );
// }
// console.log(celsiusToFahrenheit(0)); // 0 deg celsius is equal to 32 deg fahrenheit.
// console.log(celsiusToFahrenheit(100)); // 100 deg celsius is equal to 212 deg fahrenheit.
// console.log(celsiusToFahrenheit(37)); // 37 deg celsius is equal to 98.6 deg fahrenheit.

// Part 2 - task 2
// const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
// console.log(celsiusToFahrenheit(0));
// console.log(celsiusToFahrenheit(100));
// console.log(celsiusToFahrenheit(37));

// // task 3
// const isEven = (n) => n % 2 === 0;
// console.log(isEven(15)); //False
// console.log(isEven(10)); //True
// console.log(isEven(0)); //True
// console.log(isEven(73)); //False

// task 4
// const clamp = (value, min, max) => {
//   if (value < min) return min;
//   if (value > max) return max;
//   return value;
// };
// console.log(clamp(500, 280, 480)); // --> 480

// const clamp = (value, min, max) => {
//   if (value < min)
//     return `Current value ${value} is smaller than min value ${min}`;
//   if (value > max)
//     return `Current value ${value} is greater than max value ${max}`;
//   return `Current value: ${value}`;
// };
// console.log(clamp(500, 280, 480)); // --> Current value 500 is greater than min value 480
// console.log(clamp(420, 280, 480)); // --> Current value: 420

// // Part 3 - task 5
// const createProfile = (name, role = 'Visitor', isLoggedIn = false) => {
//   return `${name} | ${role} | Logged in: ${isLoggedIn}`;
// };
// console.log(createProfile('Dibyadarshan', 'Admin', true));
// console.log(createProfile('Rakesh')); // Rakesh | Visitor | Logged in: false

// // Part 4 - task 6
// function makeTagline(...words) {
//   return words.join(' ');
// }
// const tagline = makeTagline('aimed', 'for', 'enjoyable', 'interaction');
// console.log(tagline);

// Part 5 - task 7
// const appName = 'Lord of the Recipes';
// function details() {
//   console.log(`Name of the app: ${appName}`);
//   const aboutApp = 'It is a food recipe app.';
// }
// details();
// try {
//   console.log(`${aboutApp}`);
// } catch (e) {
//   console.log(`Error: ${e.message}`);
// } // Error: aboutApp is not defined

// // Part 6 - task 8
// function makeMultiplier(factor) {
//   return (number) => number * factor;
// }
// const double = makeMultiplier(2);
// const triple = makeMultiplier(3);
// // testing double
// console.log(double(5)); //10
// console.log(double(3)); //6
// // testing triple
// console.log(triple(5)); //15
// console.log(triple(3)); //9

// // Part 7 - task 9
// const describeRecipe = (name, serves = 2, rating = 0, ...tags) => {
//   if (!name) return 'Invalid recipe';
//   const label = rating >= 4 ? 'Awesome Quality' : 'Average Quality';
//   return `${name} | Serves: ${serves} | ${label} | Tags: ${tags.join(', ')}`;
// };
// console.log(
//   describeRecipe('Chicken Handi', 4, 4.8, 'indian', 'spicy', 'non-veg'),
// );
// console.log(describeRecipe(''));

// Loops and Iteration Excercise
// Part 1 - task 1
console.log('=== Multiplication table of 7 ===');
const n = 7;
for (let i = 1; i <= 10; i++) {
  let result = n * i;
  console.log(`${n} x ${i} = ${result}`);
}
// task 2
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(`Sum of all numbers from 1 to 100 is: ${sum}`);
// Part 2 - task 3
let i = 1;
while (i < 1000) {
  console.log(`no: ${i}`);
  i *= 2;
}
// task 4
let count = 10;
while (count >= 1) {
  console.log(count);
  count--;
}
console.log('Blast off!');
// Part 3 - task 5
const skills = ['HTML', 'CSS', 'Git', 'JS', 'BootStrap'];
for (const [index, skill] of skills.entries()) {
  console.log(`${index + 1}. ${skill}`);
}
// task 6
let countVowels = 0;
for (const vowel of 'Dibyadarshan') {
  switch (vowel.toLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      countVowels += 1;
      break;

    default:
      break;
  }
}
console.log(`No. of vowels in 'Dibyadarshan' is: ${countVowels}`);
// Part 4 - task 7
const myStats = {
  modulesCompleted: 4,
  projectsBuilt: 2,
  commitsMade: true,
  currentLearningPoint: 'JS',
  activeLearning: true,
};
for (const stats in myStats) {
  console.log(`${stats}: ${myStats[stats]}`);
}
// Part 5 - task 8
const numbers = [3, 7, 2, 9, 4, 11, 6, 8];
for (const num of numbers) {
  if (num < 5) continue;
  if (num > 10) break;
  console.log(`${num} is greater than 5 and less than 10.`);
}
// Part 6 - task 9
const recipes = [
  { name: 'Chicken Handi', isVegetarian: false, rating: 4.2, price: 350 },
  { name: 'Matar Paneer', isVegetarian: true, rating: 3.9, price: 180 },
  { name: 'Dal Tadka', isVegetarian: true, rating: 3.2, price: 120 },
];
console.log('=== List of all recipes ===');
for (const recipe of recipes) {
  console.log(`${recipe.name} - ₹${recipe.price}`);
}
console.log('=== Highest rated recipe ===');
let highRate = recipes[0];
for (const recipe of recipes) {
  if (recipe.rating > highRate.rating) {
    highRate = recipe;
  }
}
console.log(`Top rated recipe: ${highRate.name}`);
console.log('=== Average price of all recipes ===');
let totalPrice = 0;
for (const recipe of recipes) {
  totalPrice += recipe.price;
}
const avgPrice = totalPrice / recipes.length;
console.log(`Average price is: ₹${avgPrice.toFixed(1)}`);
console.log('=== Vegetarian recipes ===');
for (const [index, recipe] of recipes.entries()) {
  if (!recipe.isVegetarian) continue;
  console.log(`${index}. ${recipe.name}`);
}
// Part 7 - task 10
console.log('=== Every Meals type Combination ===');
const meals = ['Breakfast', 'Lunch', 'Dinner'];
const types = ['Veg', 'Non-Veg', 'Vegan'];
for (const meal of meals) {
  for (const type of types) {
    console.log(`${meal} - ${type}`);
  }
}
