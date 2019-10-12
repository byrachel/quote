/*
 * Main app component
 */

/* Module imports */
import React, { Component } from 'react';

/* Styles imports */
import './Post.css';


/* Post component */
class Post extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (

            <div className="blogPost">
                <p className="post-content">{this.props.postContent}</p>
                <p className="separator">___</p>
                <p className="author">{this.props.author}</p>
            </div>

    );
  }
}

export default Post;
