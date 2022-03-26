import React from 'react';
import './QuestionArea.css'

const QuestionArea = () => {
    return (
        <div className='m-5 py-5 shadow-lg rounded'>
            <h2 className='text-center pb-3'>Question and answer</h2>
            <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      How usestate works?
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value and another function to update this value.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        How react works?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">React works in declarative code. To show what we mean by declarative code, we want you to imagine the following code expressed as an app. What you picture could look like the screen below, with a navbar, a header, a filter, and a list. That's because each line of code declares what each element of the app is.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      Props vs State
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default QuestionArea;