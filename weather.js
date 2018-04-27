const request=require("request");

var getWeather=(lnt,lng,callback)=>{
    request({
        url:'https://api.darksky.net/forecast/27068abeb64018bed515a5519e11869d/'+lnt+','+lng,
        json:true
    },(error,response,body)=>{
        if(error){
            callback("There have a error message");
        }else if(response.statusCode===400){
           callback("You have a bad request");
        }/*status code 200 equal have data wether*/
        else if(response.statusCode===200){
          callback(undefined,{
              temperature:body.currently.temperature,
              apparentTemperature:body.currently.apparentTemperature
          });
        }

    });
};
module.exports.getWeather=getWeather;


