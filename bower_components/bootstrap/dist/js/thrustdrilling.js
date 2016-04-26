// Buidling Thrustdrilling animation, beginning with JQuery
$(function(){

    $('#anime1').click(function(){
        $('.column').each(function(){
            $( this ).hide( 500 );
        });
        $('.columns').each(function(){
            $( this ).show( 500 );
        });
        $('#col1 p:first').text('Grouting text will be displayed here!');
        $('#col2 p:first').text('Grouting text will be displayed here!');
        $('#col3 p:first').text('Grouting text will be displayed here!');
        $('#col4 p:first').text('Grouting text will be displayed here!');
        $('#col5 p:first').text('Grouting text will be displayed here!');
        $('#col6 p:first').text('Grouting text will be displayed here!');
    });

    $('#anime2').click(function(){
        $('.columns').hide( 500 );
        $('.column').hide( 500 );
    });
    $('#anime2').click(function(){
        $('.col4').show( 500 );
        $('#col4 p:first').text('Ground Improvements text will be displayed here!');
    });

    $('#anime3').click(function(){
        $('.column').each(function(){
            $( this ).show( 500 );
        });
        $('.columns').each(function(){
            $( this ).show( 500 );
        });
        $('#col1 p:first').text('Earth Retention text will be displayed here!');
        $('#col2 p:first').text('Earth Retention text will be displayed here!');
        $('#col3 p:first').text('Earth Retention text will be displayed here!');
        $('#col4 p:first').text('Earth Retention text will be displayed here!');
        $('#col5 p:first').text('Earth Retention text will be displayed here!');
        $('#col6 p:first').text('Earth Retention text will be displayed here!');
        $('#col7 p:first').text('Earth Retention text will be displayed here!');
        $('#col8').hide( 500 );
    });

    $('#anime4').click(function(){
        $('.column').each(function(){
            $( this ).show( 500 );
        });
        $('.columns').each(function(){
            $( this ).show( 500 );
        });
        $('#col1 p:first').text('Structural Support text will be displayed here!');
        $('#col2 p:first').text('Structural Support text will be displayed here!');
        $('#col3 p:first').text('Structural Support text will be displayed here!');
        $('#col4 p:first').text('Structural Support text will be displayed here!');
        $('#col5 p:first').text('Structural Support text will be displayed here!');
        $('#col6 p:first').text('Structural Support text will be displayed here!');
        $('#col7 p:first').text('Structural Support text will be displayed here!');
        $('#col8 p:first').text('Structural Support text will be displayed here!');
    });

    $('#anime5').click(function(){
        $('.columns').hide( 500 );
        $('.column').hide( 500 );
    });
    $('#anime2').click(function(){
        $('.col5').show( 500 );
        $('#col5 p:first').text('Additional Technologies text will be displayed here!');
    });

});
