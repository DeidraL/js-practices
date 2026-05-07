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
// console.log('=== Multiplication table of 7 ===');
// const n = 7;
// for (let i = 1; i <= 10; i++) {
//   let result = n * i;
//   console.log(`${n} x ${i} = ${result}`);
// }
// // task 2
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log(`Sum of all numbers from 1 to 100 is: ${sum}`);
// // Part 2 - task 3
// let i = 1;
// while (i < 1000) {
//   console.log(`no: ${i}`);
//   i *= 2;
// }
// console.log(`First value exceeding 1000 is: ${i}`); // logging the first value of i that exceeds 1000 even if the loop fails.
// // task 4
// let count = 10;
// while (count >= 1) {
//   console.log(count);
//   count--;
// }
// console.log('Blast off!');
// // Part 3 - task 5
// const skills = ['HTML', 'CSS', 'Git', 'JS', 'BootStrap'];
// for (const [index, skill] of skills.entries()) {
//   console.log(`${index + 1}. ${skill}`);
// }
// // task 6
// let countVowels = 0;
// for (const vowel of 'Dibyadarshan') {
//   switch (vowel.toLowerCase()) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//       countVowels += 1;
//       break;

//     default:
//       break;
//   }
// }
// console.log(`No. of vowels in 'Dibyadarshan' is: ${countVowels}`);
// // Part 4 - task 7
// const myStats = {
//   modulesCompleted: 4,
//   projectsBuilt: 2,
//   commitsMade: 15, // property name suggests a count
//   currentLearningPoint: 'JS',
//   activeLearning: true,
// };
// for (const stats in myStats) {
//   console.log(`${stats}: ${myStats[stats]}`);
// }
// // Part 5 - task 8
// const numbers = [3, 7, 2, 9, 4, 11, 6, 8];
// for (const num of numbers) {
//   if (num < 5) continue;
//   if (num > 10) {
//     console.log(`Number that broke the loop and exceed 10 is: ${num}`); // logging the number that broke the loop and exceeded 10.
//     break;
//   }
//   console.log(`${num} is greater than 5 and less than 10.`);
// }
// // Part 6 - task 9
// const recipes = [
//   { name: 'Chicken Handi', isVegetarian: false, rating: 4.2, price: 350 },
//   { name: 'Matar Paneer', isVegetarian: true, rating: 3.9, price: 180 },
//   { name: 'Dal Tadka', isVegetarian: true, rating: 3.2, price: 120 },
// ];
// console.log('=== List of all recipes ===');
// for (const recipe of recipes) {
//   console.log(`${recipe.name} - ₹${recipe.price}`);
// }
// console.log('=== Highest rated recipe ===');
// let highRate = recipes[0];
// for (const recipe of recipes) {
//   if (recipe.rating > highRate.rating) {
//     highRate = recipe;
//   }
// }
// console.log(`Top rated recipe: ${highRate.name}`);
// console.log('=== Average price of all recipes ===');
// let totalPrice = 0;
// for (const recipe of recipes) {
//   totalPrice += recipe.price;
// }
// const avgPrice = totalPrice / recipes.length;
// console.log(`Average price is: ₹${avgPrice.toFixed(1)}`);
// console.log('=== Vegetarian recipes ===');
// let vegCount = 0; //fixed with another variable instead of using index from array
// for (const recipe of recipes) {
//   if (!recipe.isVegetarian) continue;
//   vegCount++;
//   console.log(`${vegCount}. ${recipe.name}`);
// }
// // Part 7 - task 10
// console.log('=== Every Meals type Combination ===');
// const meals = ['Breakfast', 'Lunch', 'Dinner'];
// const types = ['Veg', 'Non-Veg', 'Vegan'];
// for (const meal of meals) {
//   for (const type of types) {
//     console.log(`${meal} - ${type}`);
//   }
// }

// Arrays Excercise
// Part 1 - task 1
// const mySkills = ['HTML', 'CSS', 'Git', 'JS', 'Bootstrap', 'DevTools'];
// console.log(`First skill: ${mySkills.at(0)}`); //first skill
// console.log(`Last skill: ${mySkills.at(-1)}`); //last skill
// const midIndex = Math.floor(mySkills.length / 2); //middle skill
// console.log(`Middle skill: ${mySkills.at(midIndex)}`); // used Math.floor feature for calc mid value
// console.log(`No of total skills: ${mySkills.length}`); // Total count of skills in array
// // task 2
// mySkills.push('Tailwind'); //added new skiil at end
// console.log('== Skills ==');
// console.log(mySkills); //skills with Tailwind at end
// const removed = mySkills.shift(); // removed first skill
// console.log(`removed skill: ${removed}`); // HTML removed from first
// console.log('== Skills ==');
// console.log(mySkills); // updated array

// // Part 2 - task 3
// mySkills.splice(2, 0, 'TypeScript');
// console.log('== Skills ==');
// console.log(mySkills); // updated array
// // task 4
// const coreSkills = mySkills.slice(0, 3);
// console.log('== Core Skills ==');
// console.log(coreSkills); // newly created array
// console.log('== Skills ==');
// console.log(mySkills); // un-modified array

// // Part 3 - task 5
// if (mySkills.includes('JS')) {
//   console.log('JS is in my skills.'); //checking if JS is in skills
// }
// console.log(`JS is in index: ${mySkills.indexOf('JS')}`); // first index of JS

// // Part 4 - task 6
// const newSkills = ['React', 'Node'];
// const fullStack = [...mySkills, ...newSkills];
// console.log('== Full Stack Skills ==');
// console.log(fullStack);
// // task 7
// const [skill1, skill2, skill3] = fullStack; //assigning first three from fullstack and ignoring rest of skills.
// console.log(`first skill: ${skill1}`); //CSS
// console.log(`second skill: ${skill2}`); //Git
// console.log(`third skill: ${skill3}`); //TypeScript
// // task 8
// const [first, ...rest] = fullStack;
// console.log(`first skill: ${first}`);
// console.log('-- rest skills --');
// console.log(rest);

// // Part 5 - task 9
// const recipes = [
//   { name: 'Chicken Handi', isVeg: false, rating: 4.8, price: 350 },
//   { name: 'Matar Paneer', isVeg: true, rating: 4.2, price: 180 },
//   { name: 'Dal Tadka', isVeg: true, rating: 3.9, price: 120 },
//   { name: 'Biryani', isVeg: false, rating: 4.6, price: 400 },
//   { name: 'Gulab Jamun', isVeg: true, rating: 4.7, price: 80 },
// ];
// const recipeNames = recipes.map((recipe) => recipe.name);
// console.log('== Recipes ==');
// console.log(recipeNames); //recipe names
// // task 10
// const recipeVeg = recipes.filter((recipe) => recipe.isVeg);
// console.log('== Vegetarian Recipes ==');
// const recipeVegNames = recipeVeg.map((recipeVegName) => recipeVegName.name);
// console.log(recipeVegNames); // Veg recipes
// // task 11
// console.log('== Total price of recipes ==');
// const totalPrice = recipes.reduce((sum, recipe) => sum + recipe.price, 0); // restructured with one line
// console.log(totalPrice); // Total price of all recipes
// // task 12
// const topRecipes = recipes.find((recipe) => recipe.rating > 4.5);
// console.log('== Top Recipe ==');
// console.log(topRecipes.name);
// // task 13
// console.log(
//   `Does any recipe cost more than ₹300: ${recipes.some((r) => r.price >= 300)}`, //true
// );
// console.log(
//   `Does all recipes rated above 3.5: ${recipes.every((r) => r.rating > 3.5)}`, //true
// );

// // Part 6 - task 14
// const sortedByPrice = [...recipes].sort((a, b) => a.price - b.price); //price in ascending order and using spread operator for copying recipes
// const sortedRecipes = sortedByPrice.map((recipe) => recipe.name); //names of recipes sorted by price
// console.log('== Recipes in Price ascending order ==');
// console.log(sortedRecipes);
// // task 15
// const vegRecipeResult = recipes
//   .filter((recipe) => recipe.isVeg) //filtered by veg
//   .sort((a, b) => b.rating - a.rating) // rating in descending order
//   .map((recipe) => recipe.name) //only recipe names
//   .join(', '); // recipe names joined by
// console.log('== Vegetarian Recipe sorted by rating in descending order ==');
// console.log(vegRecipeResult);

// Object Excercise
// Part 1 - task 1
const myProfile = {
  name: 'Dibyadarshan',
  age: 23,
  city: 'Bhubaneswar',
  role: 'Developer',
  isEmployed: false,
  skill: ['HTML', 'CSS', 'JS', 'Git'],
  education: {
    degree: 'BTech',
    university: 'BPUT',
  },
  social: {
    github: 'DeidraL',
    linkedin: 'Dibyadarshan Sahoo',
  },
  introduce() {
    return `Hi, I'm ${this.name}, a ${this.role} based in ${this.city}.`;
  },
  skillCount() {
    return `I know ${this.skill.length} skills.`;
  },
};
console.log(myProfile.city); // accessing city
console.log(myProfile.education.degree); //accessing degree from nested object education
console.log(myProfile.social.github); //accessing github from nested object social
console.log(myProfile.skill[0]); //accessing first skill from nested array skill

// Part 2 - task 2
myProfile.yearsOfExperience = 1; // adding new property
myProfile.isEmployed = true; // updating existing property value
delete myProfile.age; //removed age property
console.log('city' in myProfile); // checking if city is in myProfile
console.log(myProfile); // Final object myProfile

// Part 3 - task 3
console.log(myProfile.introduce()); //calling introduce function
console.log(myProfile.skillCount()); // calling skillCount function

// Part 4 - task 4
const { name, role, city } = myProfile; //destructuring myProfile
console.log(name);
console.log(role);
console.log(city);
//  task 5
const {
  social: { github },
} = myProfile; // destructuring github from nested object social
console.log(github);
// task 6
function formatProfile({ name, role, city }) {
  return `${name} | ${role} | ${city}`;
} // function that takes a profile object
console.log(formatProfile(myProfile));

// Part 5 - task 7
const updatedProfile = { ...myProfile }; // copying the object myProfile
updatedProfile.role = 'Senior Developer'; // updated the copy object of myProfile
console.log(updatedProfile.role); // role in updatedProfile has been updated
console.log(myProfile.role); // secured object myProfile
// task 8
// const {
//   name,
//   role,
//   city,
//   social: { github },
// } = myProfile; // but previously declared on task 4 and 5
const baseInfo = { name, role }; // used previously declared name and role(task 4)
const contactInfo = { city, github }; // used previously declared city(task 4) and github(task 5)
const summary = { ...baseInfo, ...contactInfo };
console.log(summary);

// Part 6 - task 9
console.log(Object.keys(myProfile)); //logged all properties of myProfile
console.log(Object.values(myProfile)); //logged all values of myProfile
for (const [key, value] of Object.entries(myProfile)) {
  if (
    typeof value !== 'object' &&
    typeof value !== 'array' &&
    typeof value !== 'function'
  ) {
    console.log(`${key} --> ${value}`);
  }
}

// Part 7 - task 10
function createProject(
  projectName,
  tech = [],
  status = 'in-progress',
  url = null,
) {
  return {
    projectName,
    tech,
    status,
    url,
    id: Date.now(),
    describe() {
      return `${this.projectName} - Built with ${this.tech.join(', ')} - Status: ${this.status}`;
    },
    launch(url) {
      this.url = url;
      return `${this.projectName} is now live at ${this.url}`;
    },
  };
}
const projectFirst = createProject(
  'Lord of the Recipes',
  ['HTML', 'CSS'],
  'completed',
  'lord-of-the-recipes',
);
const projectSecond = createProject('Portfolio', ['HTML', 'CSS']);
console.log(projectFirst.describe());
console.log(projectSecond.describe());
console.log(projectSecond.launch());

// Part 8 - task 11
function createProfile(name, role, isEmployed = false, age) {
  return {
    name,
    role,
    isEmployed,
    age,
  };
}
const profile1 = createProfile('Dibyadarshan', 'Junior-developer', true, 23);
const profile2 = createProfile('Rakesh', 'Tester', true, 22);
const profile3 = createProfile('Lipun', 'Designer', false, 23);
console.log(profile1);
console.log(profile2);
console.log(profile3);
const profiles = [profile1, profile2, profile3];
console.log(profiles);

// const profileNames = profiles.map((profile) => profile.name);
// .map((profile) => profile.role);
// console.log(profileNames);
const employedProfiles = profiles.filter((profile) => profile.isEmployed);
const employedProfileNames = employedProfiles.map((p) => p.name);
console.log(`Employed Profiles: ${employedProfileNames}`);
const searchProfile = profiles.find((e) => e.name === 'Rakesh');
console.log(searchProfile);
