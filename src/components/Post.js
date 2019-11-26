import React from 'react'

class Post extends React.Component {
    render(){
        // console.log(this.props)
        return(
            <div> 
                {this.props.post.title}
                <br></br>
                {this.props.post.equipment}
                <br></br>
                {this.props.post.image} 
                <br></br>
                {this.props.post.content}
            </div>
        )
    }
}

export default Post
