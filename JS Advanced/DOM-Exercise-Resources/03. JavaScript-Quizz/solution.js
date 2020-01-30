function solve() {

  let quizDiv = document.querySelector('#quizzie');
  let quizSteps = document.querySelectorAll('section');

  let answers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents']
  let rightAnswers = 0;
  let counter = 0;

  quizDiv.addEventListener('click', eventHandler);

  function eventHandler(event) {

    if (event.target.className === 'answer-text') {

      quizSteps[counter++].style.display = 'none';

      let answer = event.target.innerText;

      if (answers.includes(answer)) {
        rightAnswers++;
      }


      if (counter < answers.length) {
        quizSteps[counter].style.display = 'block';
      }

      if (counter === 3) {

        quizDiv.removeEventListener('click', eventHandler);

        document.querySelector('#results').style.display = 'block';
        let result = document.querySelector('.results-inner h1');

        result.innerHTML = rightAnswers === answers.length ? 'You are recognized as top JavaScript fan!' : `You have ${rightAnswers} right answers`;

      }
    }
  }
}
