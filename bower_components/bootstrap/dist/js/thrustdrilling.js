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

});
