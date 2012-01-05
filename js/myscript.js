// var a = $("form")
// alert(a);



$(function() {
    $( ".datepicker" ).datepicker();
    $("form").submit(function(event){
	event.preventDefault();

        var fromdate = $('input[id="fromdate"]',this).val();
        var todate = $('input[id="todate"]',this).val();
        var numpages = $('input[id="numpages"]',this).val();

        var fromdate1 = fromdate.replace("/","").replace("/","") ;
        var todate1 = todate.replace("/","").replace("/","");
        fromdate = fromdate1.substring(4,8)+fromdate1.substring(0,4)  
                   +"-000000-GMT";
        todate = todate1.substring(4,8)+todate1.substring(0,4)+"-000000-GMT";

        var url = "http://susy.physics.lsa.umich.edu:8090/idmap/listhxournalidmapusingtime/" + fromdate  + "/" + todate ;

        console.debug(url);

        var params = { format : 'json' } 
        $.getJSON ( url, params, callback) ; 
        
    } ); 
});

function callback( json ) {
    console.debug( json.length ); 
//    console.debug (json ); 
//    console.debug( json.items ); 

}


