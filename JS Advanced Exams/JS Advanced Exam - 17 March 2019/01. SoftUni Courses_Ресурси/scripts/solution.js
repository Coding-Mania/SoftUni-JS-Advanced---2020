function solve() {

   let educationForm = document.querySelectorAll('#educationForm input');

   const coursesObj = {
      'JS-Fundamentals': 170,
      'JS-Advanced': 180,
      'JS-Applications': 190,
      'JS-Web': 490
   }

   let button = document.querySelector('.courseFoot button[value="signMeUp"]');

   button.addEventListener('click', eventHandler);

   function eventHandler() {
      let courseBodyDiv = document.querySelectorAll('.courseBody ul li');

      let educationValue;

      for (const iterator of educationForm) {
         if (iterator.checked) {
            educationValue = iterator.value;
         }
      }

      if (educationValue === 'online') {
         for (const key of Object.keys(coursesObj)) {
            coursesObj[key] -= coursesObj[key] * 0.06;
         }
      }


      let checkedCourses = [];

      courseBodyDiv.forEach(li => {
         let checkBox = li.querySelector('input');
         if (checkBox.checked) {
            let courseName = li.querySelector('label').innerHTML.split(' - ')[0].replace(' ', '-');
            
            checkedCourses.push(courseName);
            if (checkedCourses.includes('JS-Fundamentals') && checkedCourses.includes('JS-Fundamentals')) {
               coursesObj['JS-Advanced'] -= coursesObj['JS-Advanced'] * 0.1;
            }
         }
      });

      let myCoursesDiv = document.querySelector('#myCourses .courseBody ul');
      let priceDiv = document.querySelector('#myCourses .courseFoot p');
      let totalPrice = 0;

      checkedCourses.forEach(courses => {
         totalPrice += coursesObj[courses];
         let li = document.createElement('li');
         li.innerHTML = courses;
         myCoursesDiv.appendChild(li);
      })

      if (checkedCourses.includes('JS-Fundamentals') && checkedCourses.includes('JS-Advanced') && checkedCourses.includes('JS-Applications')) {
         totalPrice -= totalPrice * 0.06;
      }
      if (checkedCourses.length === 4) {
         let li = document.createElement('li');
         li.textContent = 'HTML and CSS';
         myCoursesDiv.appendChild(li);
      }

      priceDiv.innerHTML = `Cost: ${Math.floor(totalPrice).toFixed(2)} BGN`;

     button.removeEventListener('click', eventHandler);
   }
}

solve();