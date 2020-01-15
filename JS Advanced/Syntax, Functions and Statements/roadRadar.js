function solve(input) {

   let [speed, area] = input;

   let obj = {
      'residential': 20,
      'city': 50,
      'interstate': 90,
      'motorway': 130
   }

   if (speed - obj[area] > 0 && speed - obj[area] < 21) {
      console.log('speeding');
   } else if (speed - obj[area] > 20 && speed - obj[area] < 41) {
      console.log('excessive speeding');
   } else if (speed - obj[area] > 40) {
      console.log('reckless driving');
   }
}