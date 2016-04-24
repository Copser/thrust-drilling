// Buidling Thrustdrilling animation, beginning with JQuery
$(function(){

    $('#anime1').click(function(){
        $('.column').each(function(){
            $( this ).hide('slow');
        });
        $('.columns').each(function(){
            $( this ).show('slow');
        });
    });

    $('#anime2').click(function(){
        $('.columns').hide('slow');
        $('.column').hide('slow');
    });
    $('#anime2').click(function(){
        $('.col4').show('slow');
    });

    $('#anime3').click(function(){
        $('.column').each(function(){
            $( this ).show('slow');
        });
        $('.columns').each(function(){
            $( this ).show('slow');
        });
        $('#col8').hide('slow');
    });

    $('#anime4').click(function(){
        $('.column').each(function(){
            $( this ).show('slow');
        });
        $('.columns').each(function(){
            $( this ).show('slow');
        });
    });

    $('#anime5').click(function(){
        $('.columns').hide('slow');
        $('.column').hide('slow');
    });
    $('#anime2').click(function(){
        $('.col5').show('slow');
    });

});
