// Buidling Thrustdrilling animation, beginning with JQuery

$(function () {
    $('#anime1').on('click', function(e){
        e.preventDefault();
        $('#col7').hide('slow');
        $('#col8').hide('slow');

    });

    $('#anime2').on('click', function(e){
        e.preventDefault();
        $('#col1').hide('slow');
        $('#col2').hide('slow');
        $('#col3').hide('slow');
        $('#col4').toggleClass('col-sm-12 col-md-9');
        $('#col5').hide('slow');
        $('#col6').hide('slow');
        $('#col7').hide('slow');
        $('#col8').hide('slow');

    });

    $('#anime3').on('click', function(e){
        e.preventDefault();
        $('#col1').show('');
        $('#col2').show('');
        $('#col3').show('');
        $('#col4').show('');
        $('#col5').show('');
        $('#col6').show('');
        $('#col7').show('');
        $('#col8').show('');
    });
    
});
