import React from 'react'
import Iframe from 'react-iframe'

const LightPollution = () => {
    return(
        <div className = "main-div"> 
            <div className = "c-iss-location">
                <h4>Dark site finder and light pollution map</h4>
            </div>       
            <Iframe
                url = "https://darksitefinder.com/maps/world.html#4/39.00/-98.00"
                width = "80%"
                height = "700px"
                className = "iframe"
            /><br></br>
        </div>
    )
}

export default LightPollution