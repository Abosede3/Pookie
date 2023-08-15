const faqItems = document.querySelectorAll('.faq-item')

faqItems.forEach((item) => {
  const question = item.querySelector('.question')

  question.addEventListener('click', () => {
    // Toggle 'show-answer' class to reveal/hide the answer
    item.querySelector('.answer').classList.toggle('show-answer')
  })
})



  // Check if the URL contains an anchor (e.g., #features)
  if (window.location.hash) {
    // Get the ID from the URL (e.g., "features")
    const targetID = window.location.hash.substr(1);

    // Find the element with the matching ID (e.g., <section id="features">)
    const targetElement = document.getElementById(targetID);

    // If the element exists, scroll to it smoothly
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  $('.card').click(function () {
    $(this).toggleClass('flipped')
  })
