$(document).ready(function() {
    $(".selected-item").click(function() {
        $(this).toggleClass("select_onclick");
        $(this).next().toggleClass("active");
    });
    $('.input-select').on("click", function() {
        var selectedOption = $(this).parents('.option').clone();
        $(this).parents().prev('.selected-item').html(selectedOption);
        $(this).parents().removeClass("active");
        $(this).parents().prev('.selected-item').removeClass("select_onclick");
    });
    $('.header-menu-btn').on('click', function () {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('aside').css('display', 'none');
        }
        else {
            $(this).addClass('active');
            $('aside').css('display', 'inline-block');
        }
    });
    $('#checkAll').on('click', function(){
        if($(this).prop("checked") == true){
            $('input[type=checkbox]').prop('checked', true);
        }
        else if($(this).prop("checked") == false){
            $('input[type=checkbox]').prop('checked', false);
        }
    });
    $('.close-pop-up').on('click', function() {
        $('.pop-up').css('display', 'none');
        $('.pop-up-window-background').css('display', 'none');
    })
});
