function solve(input) {
   
   let [speed, area] = input;

   let obj = {
      residential: 20,
      city: 50,
      interstate: 90,
      motorway: 130
   }

   if (speed - obj[area] > 0 && speed - obj[area] < 21) {
      return 'speeding';
   } else if (speed - obj[area] > 20 && speed - obj[area] < 41) {
      return 'excessive speeding';
   } else if (speed - obj[area] > 40) {
      return 'reckless driving';
   }
}