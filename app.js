// Part 1 - task 1
const hour = 20;
if (hour < 12) {
  console.log('Good morning.');
} else if (hour < 18) {
  console.log('Good afternoon.');
} else {
  console.log('Good evening.');
}
// task 2
const speed = 59;
if (speed > 120) {
  console.log('Too fast');
} else if (speed >= 60 && speed <= 120) {
  console.log('Perfect');
} else {
  console.log('Too slow');
}

// Part 2 - task 3
const temperature = 38;
const fever = temperature > 37.5 ? 'Yes' : 'No';
console.log(`Fever: ${fever}`);
// task 4
const balance = 0;
console.log(`${balance > 0 ? 'Account has funds' : 'Account is empty'}`);

// Part 3 - task 5
const a = 0;
const b = 'false';
const c = [];
const d = null;
const e = -1;
console.log(`${a ? 'Truthy' : 'Falsy'}`); //falsy - zero
console.log(`${b ? 'Truthy' : 'Falsy'}`); //truthy - non-empty string
console.log(`${c ? 'Truthy' : 'Falsy'}`); //truthy - empty array
console.log(`${d ? 'Truthy' : 'Falsy'}`); //falsy - null
console.log(`${e ? 'Truthy' : 'Falsy'}`); //truthy - non-zero number
// task 6
const username = '';
const displayName = username || 'Guest';
console.log(`User: ${displayName}`);
// task 7
const score = 0;
const liveScore = score ?? 'Not started.';
console.log(`Live score: ${liveScore}`);

// Part 4 - task 8
const profile = {
  name: 'Dibyadarshan',
  social: { github: 'DeidraL' },
};
const twitterHandle = profile?.social?.twitter ?? 'No twitter';
console.log(`Twitter handle: ${twitterHandle}`);
// task 9
const emptyProfile = null;
console.log(`Name: ${emptyProfile?.name ?? 'Unknown'}`);

// Part 5 - task 10
const recipe = {
  name: 'Chicken Handi',
  isVegetarian: false,
  difficulty: 'Medium',
  rating: 4.2,
};
console.log(
  `Recipe type: ${recipe.isVegetarian ? 'Vegetarian' : 'Non-vegetarian'}`,
);
switch (recipe.difficulty) {
  case 'Easy':
    console.log('Suitable for beginers.');
    break;
  case 'Medium':
    console.log('You will enjoy it.');
    break;
  case 'Hard':
    console.log('It is very difficult to cook.');
    break;
  default:
    console.log('You are not suitable for it');
    break;
}
if (recipe.rating >= 4) {
  console.log('Highly rated.');
} else if (recipe.rating >= 3) {
  console.log('Average.');
} else {
  console.log('Skip this one.');
}
