$('.option').children('a').click(function (e) {
    e.preventDefault();
    var postId = $($(this).attr('href'));
    var postLocation = postId.offset().top - 60;

    $('html, body').animate({scrollTop:postLocation},'slow');
});
