const questionBtn = document.querySelectorAll('.question');
const faq = document.querySelectorAll('.faq');
const questionSvg = document.querySelectorAll('.question-svg');

// FAQ

for (let i = 0; i < questionBtn.length; i++) {
    questionBtn[i].addEventListener('click', () => {
        faq[i].classList.toggle('faq-js');
    });
};