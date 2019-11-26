import React from 'react'
import { geolocated } from 'react-geolocated'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'
import Day from '../components/Day'


const CORS= "https://cors-anywhere.herokuapp.com"
const EXCLUDE = "?exclude=minutely,hourly,alerts,flags"
const ZIP_KEY = process.env.REACT_APP_ZIP_KEY
const DS_KEY = process.env.REACT_APP_DS_KEY


class WeatherContainer extends React.Component{
    state = {
        city: null,
        state: null,
        zipCode: null,
        lat: null,
        long: null,
        weather: {
            daily: [],
            currIcon: null,
            currTemp: null,
            currHumidity: null,
            currPrecPropbability: null
        }
    }

    handleChange = (e) => {
        console.log("HANDLE CHANGE", e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addZip = () => {
        this.setState({
            zipCode: this.state.zipCode
        })
    }

    // https://github.com/cwdegidio/zen-weather/blob/master/src/containers/WeatherReport/WeatherReport.js
    handleSubmit = (e) => {
        e.preventDefault()
        // this.addZip(this.state)
        console.log("HANDLE SUBMIT ZIP", this.state.zipCode)
        axios.get(`${CORS}/https://www.zipcodeapi.com/rest/${ZIP_KEY}/info.json/${this.state.zipCode}/degrees`)
            .then(res => {
                console.log("LOCATION DATA", res)
                let locationState = {...this.state}
                locationState.city = res.data.city
                locationState.state = res.data.state 
                locationState.lat = res.data.lat 
                locationState.long = res.data.lng 
                this.setState({
                    ...locationState
                })
            })
            .then(() => {
                axios.get(`${CORS}/https://api.darksky.net/forecast/${DS_KEY}/${this.state.lat},${this.state.long}${EXCLUDE}`)
                    .then(res => {
                        console.log("DAILY DATA", res.data.daily.data)
                        console.log("CURRENT DATA", res.data.currently)
                        let weatherState = {...this.state}
                        weatherState.weather.daily = res.data.daily.data
                        weatherState.weather.currIcon = res.data.currently.icon
                        weatherState.weather.currTemp = parseInt(res.data.currently.temperature) + "ºF"
                        weatherState.weather.currHumidity = "Humidity: " + Math.floor(res.data.currently.humidity * 100) + "%"
                        weatherState.weather.currPrecPropbability = "Precipitation probability: " + Math.floor(res.data.currently.precipProbability * 100) + "%"
                        this.setState({

                            ...weatherState
                        })
                    })
            })
    }


    getIcon = (icon) => {
        if(icon === "clear-day"){
            icon = <img src = "/clear-day.svg" alt = "clear-day" height = "80px"/>
            return icon
        }else if(icon === "clear-night"){
            icon = <img src = "/clear-night.svg" alt = "clear-night" height = "80px"/>
            return icon
        }else if(icon === "partly-cloudy-day"){
            icon = <img src = "/partly-cloudy-day.svg" alt = "partly-cloudy-day" height = "80px"/>
            return icon
        }else if(icon === "partly-cloudy-nigh"){
            icon = <img src = "/partly-cloudy-night.svg" alt = "partly-cloudy-night" height = "80px"/>
            return icon
        }else if(icon === "cloudy"){
            icon = <img src = "/cloudy.svg" alt = "cloudy" height = "80px"/>
            return icon
        }else if(icon === "rain"){
            icon = <img src = "/rain.svg" alt = "rain" height = "80px"/>
            return icon
        }else if(icon === "sleet"){
            icon = <img src = "/sleet.svg" alt = "sleet" height = "80px"/>
            return icon
        }else if(icon === "snow"){
            icon = <img src = "/snow.svg" alt = "snow" height = "80px"/>
            return icon
        }else if(icon === "wind"){
            icon = <img src = "/wind.svg" alt = "wind" height = "80px"/>
            return icon
        }else if(icon === "fog"){
            icon = <img src = "/fog.svg" alt = "fog" height = "80px"/>
            return icon
        }
    }
    
  
    render() {

        let icon = this.getIcon(this.state.weather.currIcon)
        console.log("ICON", icon)
 
        let zipForm = 
            <div className = "zip-form">
                <form className = "on-form" onSubmit = {this.handleSubmit}>
                    <label className="control-label"></label><i className="bar"></i>
                    <input type = "text" placeholder = "search by zip" name = "zipCode"  onChange = {this.handleChange}/><br></br>
                    <input type = "submit" value = "submit"/>
                </form>
            </div>

        let day = this.state.weather.daily.map(day => <Day key = {day.sunriseTime} day = {day}/>)
        

        return(
            <div className = "main-div">

                    {zipForm}

                <div className = "current-weather">
                    {/* <img src = "/wind.png" id = "icon" alt = "wind" /><br></br> */}
                    <div className = "c-location">{this.state.city} {this.state.state}<br></br></div>
                    {icon}<br></br>
                    <div className = "c-temperature">{this.state.weather.currTemp}</div><br></br>
                    
                    {this.state.weather.currHumidity}<br></br>
                    {this.state.weather.currPrecPropbability}<br></br>
                </div>
                <br></br>
                <div className = "daily">
                    {day}
                </div>
            </div>
        )
    }
}



export default WeatherContainer
