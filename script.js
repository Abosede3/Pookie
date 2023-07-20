$(document).ready(function () {
  // Add event listeners to the .faq-title elements
  $('.faq-title').click(function () {
    const targetCollapse = $(this).attr('data-target')

    // Toggle the 'show' class to open/close the FAQ item
    $(targetCollapse).collapse('toggle')

    // Close all other open FAQ items
    $('.faq-title')
      .not(this)
      .each(function () {
        const otherCollapse = $(this).attr('data-target')
        $(otherCollapse).collapse('hide')
      })
  })
})
