import React from 'react'



class Member extends React.Component{
    render(){
        console.log("MEMBER PROPS", this.props)
        return(
            <div id = "crew-row">
                <a id = "crew-name" href = {this.props.member.profile} target="_blank"><span>{this.props.member.name}, {this.props.member.country}</span></a>
            </div>
        )
    }
}

export default Member