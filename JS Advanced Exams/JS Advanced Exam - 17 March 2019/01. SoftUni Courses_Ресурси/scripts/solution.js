function solve() {

   let educationForm = document.querySelector('#educationForm input');

   const coursesObj = {
      'js-fundamentals': 170,
      'js-advanced': 180,
      'js-applications': 190,
      'js-web': 490
   }

   let button = document.querySelector('.courseFoot button[value="signMeUp"]');

   button.addEventListener('click', eventHandler);

   function eventHandler() {
      let courseBodyDiv = document.querySelectorAll('[type=checkbox]');
     
      if (!educationForm.checked) {
         for (const key of Object.keys(coursesObj)) {
            coursesObj[key] -= coursesObj[key] * 0.06;
         }
      }


      let checkedCourses = [];

      courseBodyDiv.forEach(li => {
         
         if (li.checked) {
            let courseName = li.value;
            
            checkedCourses.push(courseName);
            if (checkedCourses.includes('js-fundamentals') && checkedCourses.includes('js-fundamentals')) {
               coursesObj['js-advanced'] -= coursesObj['js-advanced'] * 0.1;
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

      if (checkedCourses.includes('js-fundamentals') && checkedCourses.includes('js-advanced') && checkedCourses.includes('js-applications')) {
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