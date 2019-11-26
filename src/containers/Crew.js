import React from 'react'
import axios from 'axios'
import Member from '../components/Member'

const URL = "http://localhost:3001/crews"

class Crew extends React.Component{
    state = {
        crew: [],
        number: 0
    }

    componentDidMount(){
        this.getCrew()
        this.getNum()
    }

    getCrew = () => {
        axios.get(URL)
            .then(res => {
                console.log("CREW DATA", res.data)
                this.setState({
                    crew: res.data,
                })
            })
    }

    getNum = () => {
        axios.get("http://api.open-notify.org/astros.json")
            .then(res => {
                console.log("CREW DATA", res.data)
                this.setState({
                    number: res.data.number
                })
            })
    }


    render(){
        let members = this.state.crew.map(member => <Member key = {member.name} member = {member}/>)
        return(
            <div>
                <div>
                    <div id = "ppl">Number of people in space</div>
                    <div className = "number-in-space">{this.state.number}</div>
                </div>
                <div className = "people">
                    {members}
                </div>
            </div>
        )
    }
}

export default Crew