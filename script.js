$("#input").focus(function() {
    if($(this).val() == "") {
        $(this).val('    ');
    }
});