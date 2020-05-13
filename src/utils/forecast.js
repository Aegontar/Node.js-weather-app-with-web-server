 const request = require('request')
 const dotenv = require('dotenv').config()




const forecast = (latitude, longitude, callback) => {


const url = 'https://api.darksky.net/forecast/' + process.env.WEATHER_API + '/' + latitude + ','  + longitude + '/'

     request({ url, json:true}, (error, {body}) => {

        if (error) {
                 
                callback('unable to connect to weather service!', undefined)

        } else if(body.error) {
                
                callback('unable to connect to weather servicex2!', undefined)


        } else {

                callback(undefined,  body.daily.data[0].summary )
    
       } 
 
    }) 


    console.log(latitude, longitude)

} 

 


module.exports = forecast



















