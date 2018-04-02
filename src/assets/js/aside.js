$(document).ready(function () {
  $('.arrow-content').on('click', function () {
    if ($(this).find('i').hasClass('fa-angle-down')) {
      $(this).find('i').removeClass('fa-angle-down')
      $(this).find('i').addClass('fa-angle-up')
      $(this).parent().parent().find('span').css('display', 'none')
    } else {
      $(this).find('i').removeClass('fa-angle-up')
      $(this).find('i').addClass('fa-angle-down')
      $(this).parent().parent().find('span').css('display', 'block')
    }
  })
})
