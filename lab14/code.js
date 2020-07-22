add = function() {
    result = parseInt(jQuery('#operand_1').html()) + parseInt(jQuery('#operand_2').html());
    jQuery('#result').html(result);
    }
    setup = function() {
    jQuery('#add_button').click(add)
    }
    jQuery(document).ready(setup)

    minus = function() {
        result = parseInt(jQuery('#operand_1').html()) - parseInt(jQuery('#operand_2').html());
        jQuery('#result').html(result);
        }
        setup = function() {
        jQuery('#minus_button').click(minus)
        }
        jQuery(document).ready(setup)    

        multiply = function() {
            result = parseInt(jQuery('#operand_1').html()) * parseInt(jQuery('#operand_2').html());
            jQuery('#result').html(result);
            }
            setup = function() {
            jQuery('#multiply_button').click(multiply)
            }
            jQuery(document).ready(setup)

            divide = function() {
                result = parseInt(jQuery('#operand_1').html()) / parseInt(jQuery('#operand_2').html());
                jQuery('#result').html(result);
                }
                setup = function() {
                jQuery('#divide_button').click(divide)
                }
                jQuery(document).ready(setup)