import React from 'react'
import Moment from 'react-moment'

class Day extends React.Component{

    getIcon = (icon) => {
        if(icon === "clear-day"){
            icon = <img src = "/clear-day.svg" alt = "clear-day" height = "40px" width = "40px"/>
            return icon
        }else if(icon === "clear-night"){
            icon = <img src = "/clear-night.svg" alt = "clear-night" height = "40px" width = "40px"/>
            return icon
        }else if(icon === "partly-cloudy-day"){
            icon = <img src = "/partly-cloudy-day.svg" alt = "partly-cloudy-day" height = "40px" width = "40px"/>
            return icon
        }else if(icon === "partly-cloudy-nigh"){
            icon = <img src = "/partly-cloudy-night.svg" alt = "partly-cloudy-night" height = "40px" width = "40px"/>
            return icon
        }else if(icon === "cloudy"){
            icon = <img src = "/cloudy.svg" alt = "cloudy" height = "40px" width = "40px"/>
            return icon
        }else if(icon === "rain"){
            icon = <img src = "/rain.svg" alt = "rain" height = "40px" width = "40px"/>
            return icon
        }else if(icon === "sleet"){
            icon = <img src = "/sleet.svg" alt = "sleet" height = "40px" width = "40px"/>
            return icon
        }else if(icon === "snow"){
            icon = <img src = "/snow.svg" alt = "snow" height = "40px" width = "40px"/>
            return icon
        }else if(icon === "wind"){
            icon = <img src = "/wind.svg" alt = "wind" height = "40px" width = "40px"/>
            return icon
        }else if(icon === "fog"){
            icon = <img src = "/fog.svg" alt = "fog" height = "40px" width = "40px"/>
            return icon
        }
    }


    getMoon = (moon) => {
        if(moon >= 0 && moon <= 7){
            moon = <img src = "./0.svg" alt = "moon" height = "30px"/>
            return moon
        }else if(moon >= 8 && moon <= 22){
            moon = <img src = "./20.svg" alt = "moon" height = "30px"/>
            return moon
        }else if(moon >= 23 && moon <= 37){
            moon = <img src = "./30.svg" alt = "moon" height = "30px"/>
            return moon
        }else if(moon >= 38 && moon <= 51){
            moon = <img src = "./40.svg" alt = "moon" height = "30px"/>
            return moon
        }else if(moon >= 52 && moon <= 58){
            moon = <img src = "./50.svg" alt = "moon" height = "30px"/>
            return moon
        }else if(moon >= 59 && moon <= 68){
            moon = <img src = "./60.svg" alt = "moon" height = "30px"/>
            return moon
        }else if(moon >= 69 && moon <= 83){
            moon = <img src = "./70.svg" alt = "moon" height = "30px"/>
            return moon
        }else if(moon >= 84 && moon <= 100){
            moon = <img src = "./80.svg" alt = "moon" height = "30px"/>
            return moon
        }
    }

    render(){

        let highThemp = parseInt(this.props.day.temperatureHigh) + "ºF"
        let lowTemp = parseInt(this.props.day.temperatureLow) + "ºF"
        let humidity = Math.floor(this.props.day.humidity * 100) + "%"
        let precipitation = Math.floor(this.props.day.precipProbability * 100) + "%"
        let moonphase = Math.floor(this.props.day.moonPhase * 100)
        // console.log(this.props)

        let icon = this.getIcon(this.props.day.icon)
        let moon = this.getMoon(moonphase) 

        return(
            <div className = "day">
                <Moment className = "d-date" format = "MMM DD YYYY" unix>{this.props.day.time}</Moment><br></br>
                {icon}<br></br>
                <span className = "d-h-temp">{highThemp}</span> <span className = "d-l-temp">{lowTemp}</span><br></br>
                Humidity: {humidity}<br></br>
                Precipitation: {precipitation}<br></br>
                <img src = "./sunrise.svg" alt = "sunrise" height = "15px"/> <Moment format = "HH:MM" unix>{this.props.day.sunriseTime}</Moment><br></br>
                <img src = "./sunset.svg" alt = "sunset" height = "20px"/> <Moment format = "HH:MM" unix>{this.props.day.sunsetTime}</Moment><br></br>
                {moon}<br></br>
                <br></br>
                <br></br>
            </div>
        )
    }
}

export default Day