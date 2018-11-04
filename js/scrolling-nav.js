$('.option').children('a').click(function (e) {
    e.preventDefault();
    var postId = $($(this).attr('href'));
    var postLocation = postId.offset().top - 60;

    console.log(postLocation);

    $('html, body').animate({scrollTop:postLocation},'slow');
});
