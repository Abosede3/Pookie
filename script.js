const faqItems = document.querySelectorAll('.faq-item')

faqItems.forEach((item) => {
  const question = item.querySelector('.question')

  question.addEventListener('click', () => {
    // Toggle 'show-answer' class to reveal/hide the answer
    item.querySelector('.answer').classList.toggle('show-answer')
  })
})
