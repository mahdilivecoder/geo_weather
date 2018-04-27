const requerst=require("request");

var geocodeAddress=(address,callback)=>{
// tabe paine address ro besorat ghabel fahm baray morograr bar migardone
    var encoded=encodeURIComponent(address);
//send request
    requerst({
        url:'https://maps.googleapis.com/maps/api/geocode/json?address=' + encoded,
        json:true
    },(error,response,body) => {
        if(error){
            callback("cannot connect to google server");
        }
        else if(body.status==='ZERO_RESULTS'){
            callback("Your status equal Zero");
        }
        else if(body.status==='OK'){
            callback(undefined,{
            address:body.results[0].formatted_address,
            lantitude:  body.results[0].geometry.location.lat,
            longtitude:  body.results[0].geometry.location.lng
            });

        }


    });

};

module.exports.geocodeAddress=geocodeAddress;
