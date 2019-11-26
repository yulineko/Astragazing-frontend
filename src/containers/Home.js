import React from 'react'

class Home extends React.Component{
    render(){
        return(
            <div className = "main-div">
                <div className = "quote-div">
                    <div id = "quote">
                        "To confine our attention to terrestrial matters would be to limit the human spirit."
                    </div>
                    <div id = "author">
                        <a id = "link" href = "http://www.hawking.org.uk/" target = "blank"> — Stephen Hawking, Astrophysicist</a>
                    </div>
                </div>
            </div>
        )
    }

}

export default Home