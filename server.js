
const yargs=require("yargs");
const geocode=require('./geocode');
const weather=require('./weather');

const argv=yargs.options({
    a:{
    demand:true,
    alias:'address',
    describe:'Fetch address for weather app',
    string:true
    }
})
    .help()
    .alias('help','h')
    .argv;

    geocode.geocodeAddress(argv.address,(errorMessage,results)=>{
        if (errorMessage){
            console.log(errorMessage);
        } else
         {
           console.log(results.address);
             weather.getWeather(results.lantitude,results.longitude,(errorMessage,weatherResult)=>{
                 if(errorMessage){
                     console.log(errorMessage);
                 }
                 else{
                     console.log('The current temperature:'+weatherResult.temperature+'It feels like:'+weatherResult.apparentTemperature);
                 }
             });
        }
    }

    );
//27068abeb64018bed515a5519e11869d

