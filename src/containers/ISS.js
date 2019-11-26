import React from 'react'
import axios from 'axios'
import Crew from './Crew'
import GoogleMapReact from 'google-map-react'



const URL = "http://api.open-notify.org/iss-now.json"
const img = <img src = "./iss.svg" alt = "iss" height = "30px"/>
const MAP_KEY = process.env.REACT_APP_MAP_KEY

const SpaceStation = ({ img }) => <div>{img}</div>;


class ISS extends React.Component{
    state = {
        center: {
            lat: 0,
            lng: 0
          },
    }

    static defaultProps = {
        zoom: 1,
    }

    //put fetch in timout, fetch every n seconds
    componentDidMount() {
        this.getLocation();
        this.interval = setInterval(this.getLocation, 5000);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }


    getLocation = () => {
        axios.get(URL)
            .then(res => {
                console.log("ISS Data", res.data.iss_position)
                this.setState({
                    center: {
                        lat: parseFloat(res.data.iss_position.latitude),
                        lng: parseFloat(res.data.iss_position.longitude)
                    }
                })
            })
    }


    //plot coordinates on map
    render(){
        return(
            <div className = "ISS-div">
                <div className = "c-iss-location">
                    <h4>CURRENT ISS LOCATION <br></br>
                    LAT: {this.state.center.lat}<br></br>
                    LONG: {this.state.center.lng}</h4><br></br>
                </div>
                <div className = "map" style={{ height: '100vh', width: '80%' }}>
                    <GoogleMapReact className = "map"
                        bootstrapURLKeys={{key: MAP_KEY }}
                        center={this.state.center}
                        zoom={this.props.zoom}
                    >
                    <SpaceStation

                        lat = {this.state.center.lat}
                        lng = {this.state.center.lng}
                        img = {img}
                    />
                    </GoogleMapReact>
                </div>
                <div>
                    <Crew />
                </div>
            </div>
        )
    }
}

export default ISS



