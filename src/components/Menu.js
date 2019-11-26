import React from 'react'
import { NavLink } from 'react-router-dom'

class Menu extends React.Component{
    render(){
        console.log("MENU PROPS", this.props)
        return(
            <div className = "menu">
                <div className = "logo">
                        <img src = "/logo2.svg" alt = "astragazing"/>
                </div>
                <div className = "menu-items">
                    <ul className = "menu-list">
                        <li><NavLink to = "/weather" activeStyle = {{color: "#44C5E5"}} style = {{textDecoration: 'none'}} className = "inactive" activeClassName="active"> WEATHER </NavLink></li>
                        <li><NavLink to = "/iss" activeStyle = {{color: "#44C5E5"}} style = {{textDecoration: 'none'}} className = "inactive" activeClassName="active">ISS TRACKER </NavLink></li>
                        <li><NavLink to = "/solarsystem" activeStyle = {{color: "#44C5E5"}} style = {{textDecoration: 'none'}} className = "inactive" activeClassName="active">SOLAR SYSTEM </NavLink></li>
                        <li><NavLink to="/lightpollution" style = {{textDecoration: 'none'}}className = "inactive" activeClassName="active"> LIGHT POLLUTION MAP </NavLink></li>
                        <li><NavLink to = "/blog" activeStyle = {{color: "#44C5E5"}} style = {{textDecoration: 'none'}} className = "inactive" activeClassName="active"> BLOG </NavLink></li>
                        <li><NavLink to = "/" style = {{textDecoration: 'none'}} className = "inactive" activeClassName="active">HOME</NavLink></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Menu