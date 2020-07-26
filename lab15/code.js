add = function() {
    result = parseInt(jQuery('#operand_1').val()) + parseInt(jQuery('#operand_2').val());
    text = jQuery('#operand_1').val() +" + "+ jQuery('#operand_2').val() + " = "
    result = text + result;
    jQuery('#result').text(result)
    
    old_div_content = jQuery('#history').html();
    result = "<span id='addstyle'>" + result + "</span>";
    new_div_content = old_div_content + result + '<br>';
    jQuery ('#history').html(new_div_content);
}

minus = function() {
    result = parseInt(jQuery('#operand_1').val()) - parseInt(jQuery('#operand_2').val());
    text = jQuery('#operand_1').val() +" - "+ jQuery('#operand_2').val() + " = "
    

    result = text + result;
    jQuery('#result').html(result)
    
    old_div_content = jQuery('#history').html();
    result = "<span id='minstyle'>" + result + "</span>";
    new_div_content = old_div_content + result + '<br>';
    jQuery ('#history').html(new_div_content); 
}

multiply = function() {
    result = parseInt(jQuery('#operand_1').val()) * parseInt(jQuery('#operand_2').val());
    text = jQuery('#operand_1').val() +" * "+ jQuery('#operand_2').val() + " = "
    result = text + result;
    jQuery('#result').html(result)
    
    old_div_content = jQuery('#history').html();
    result = "<span id='mulstyle'>" + result + "</span>";
    new_div_content = old_div_content + result + '<br>';
    jQuery ('#history').html(new_div_content); 
}


divide = function() {
    result = parseInt(jQuery('#operand_1').val()) / parseInt(jQuery('#operand_2').val());
    text = jQuery('#operand_1').val() +" / "+ jQuery('#operand_2').val() + " = "
    result = text + result;
    jQuery('#result').html(result)
    
    old_div_content = jQuery('#history').html();
    result = "<span id='divstyle'>" + result + "</span>";
    new_div_content = old_div_content + result + '<br>';
    jQuery ('#history').html(new_div_content); 
}

    show = function() {
        jQuery('#history').show()
    }

    hide = function(){
        jQuery('#history').hide()
    }

    setup = function(){
        jQuery('#add_button').click(add);
        jQuery('#minus_button').click(minus);
        jQuery('#multiply_button').click(multiply);
        jQuery('#divide_button').click(divide);
        jQuery('#show_button').click(show);
        jQuery('#hide_button').click(hide);
    }


    jQuery(document).ready(setup)