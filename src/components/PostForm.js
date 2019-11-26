import React from 'react'

const POSTS = "http://localhost:3001/posts"

class PostForm extends React.Component{
    state = {
        title: "",
        equipment: "",
        image: "",
        content: "",
        "user_id": 1
    }
    
    handleChange = (e) => {
        console.log("HANDLE CHANGE", e.target.value)
        this.setState({
            [e.target.name]: e.target.value
          })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addPost(this.state)

        fetch(POSTS, {
            method: "POST",
            headers: {
                Accept: 'application/json', 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: this.state.title,
                equipment: this.state.equipment,
                image: this.state.image,
                content: this.state.content,
                "user_id": 1
            })
        })
        this.setState({
            title: "",
            equipment: "",
            image: "",
            content: "",
            "user_id": 1
        })
    }

    render(){
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                Title: <input type = "text" placeholder = "title" name = "title" value = {this.state.title} onChange = {this.handleChange}/><br></br>
                    Equipment used: <input type = "text" placeholder = "equipment used" name = "equipment" value = {this.state.equipment} onChange = {this.handleChange}/><br></br>
                    Image: <input type = "text" placeholder = "image" name = "image" value = {this.state.image} onChange = {this.handleChange}/><br></br>
                    Content: <textarea type = "text" placeholder = "post" name = "content" value = {this.state.content} onChange = {this.handleChange}/><br></br>
                    <input type="submit"/>
                </form>
            </div>
        )
    }

}

export default PostForm