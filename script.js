const emailInput = document.querySelector('.email-input');
const buttonIcon = document.querySelector('.arrow-img');
const emailButton = document.querySelector('.arrow-btn');
const wrongText = document.querySelector('.wrong-text');
const errorIcon = document.querySelector('.error-icon');


const listener = function(event){
    if(event.target === emailButton || event.target === buttonIcon || event.key === "Enter"){
        emailChecker()
    }
    function emailChecker(event){
        const inputArray = Array.from(emailInput.value);
        if(!inputArray.includes('@') || !inputArray.includes('.') || emailInput.value === ''){
            wrongText.classList.remove('not-visible');
            errorIcon.classList.remove('not-visible');
            emailInput.classList.add('wrong-input');
        } else {
            wrongText.classList.add('not-visible');
            errorIcon.classList.add('not-visible');
            emailInput.classList.remove('wrong-input');
        }
    }
}


document.addEventListener('click', listener);
document.addEventListener('keydown', listener);
