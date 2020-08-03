$('tbody').on('click', 'h6', function() {
    $(this).toggleClass('checked-text');
});

$('tbody').on('click', '.trash', function() {
    $(this).parents('tr').fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$('tbody').on('mouseenter', 'td', function() {
    $(this).children('div').css('display', 'inline-flex');
});

$('tbody').on('mouseleave', 'td', function() {
    $(this).children('div').css('display', 'none');
});

$('input').keypress(function(event) {
    if(event.which === 13) {
        let newToDo = $(this).val();
        console.log(newToDo);
        $(this).val('');
        let newElement = `<tr class="t-row"><td><div class="trash"><img src="trash.png" width="20" height="20"></div><h6>${newToDo}</h6></td></tr>`;
        $('tbody').append(newElement);
    };

});

$('#expand').on('click', function() {
    if($('#add-new').css('display') == 'none') {
        $('#add-new').fadeIn(500, function() {
            $('#add-new').css('display', 'block');
        });
    } else {
        $('#add-new').fadeOut(500, function() {
            $('#add-new').css('display', 'none');
        });
    };
});