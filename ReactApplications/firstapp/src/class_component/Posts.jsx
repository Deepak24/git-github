import React, {Component} from "react";

class Posts extends Component {
    constructor(props){
        super(props);
        this.state = {postData: []};
    }
    APIURL = "https://jsonplaceholder.typicode.com/posts";

    componentDidMount(){
        fetch(this.APIURL)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({postData: data});
        })
        .catch(err => console.log(err));
    }

    render() {
        return(
            <>
                <h2>Fetch posts from JSON place holder.</h2>
                {
                    this.state.postData.map( post => 
                    <div key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>

                    </div>)
                }
            </>
        )
    }
}

export default Posts;