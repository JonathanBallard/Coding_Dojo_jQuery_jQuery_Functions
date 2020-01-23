





$('.pageBlock #addClassBtn').click(function() {
    $('#addClassParagraph').addClass('red');
});


$('.pageBlock #hideBtn').click(function() {
    $('#hideParagraph').toggle();
});

$('.pageBlock #slideBtn').click(function() {
    $('#slideParagraph').slideToggle();
});

$('.pageBlock #fadeBtn').click(function() {
    $('#fadeParagraph').fadeOut(1500,function() {
        $('#fadeParagraph').fadeIn(1500);
    });
    
});

$('.pageBlock #beforeBtn').click(function() {
    $('#beforeParagraph').before('I am before! ==>  ');
});

$('.pageBlock #afterBtn').click(function() {
    $('#afterParagraph').after('  <== I am after!');
});

$('.pageBlock #appendBtn').click(function() {
    $('#appendParagraph').append('<p class="red"> Some Red Text Appended</p>');
});

$('.pageBlock #htmlBtn').click(function() {
    $('#htmlParagraph').html('<p class="red"> Some Red Text that replaces the original text</p>');
});

$('.pageBlock #attrBtn').click(function() {
    alert($('#attrParagraph').attr('id'));
});

$('.pageBlock #valBtn').click(function() {
    alert($('#valTextBox').val());
});

$('.pageBlock #textBtn').click(function() {
    $('#textParagraph').text('This is the new paragraph that I have created! I have the same styling as the previous paragraph, lucky me!');
});






