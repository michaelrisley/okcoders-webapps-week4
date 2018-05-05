// standard imports 
import React, { Component } from 'react';
import './App.css';
import PostForm from './PostForm'
import ShowPosts from './ShowPosts'

// import the Home component, you can leave off the .js if you like
import Home from './Home.js'

// this is the router import, standard code 
import {
  BrowserRouter as Router,
  Route,
  NavLink 
} from 'react-router-dom'

// this is the material-ui import 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';;

// begin the App 
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [
          // {
          // author: 'Michael A. Risley', 
          // title: 'I am a fancy Title', 
          // body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.'
          // }
      ],
    }
  }

  // add post to the posts array in state
  addPost = (post) => {
    this.setState((prevState) => {
      return {
        posts: [...prevState.posts, post]
      }
    })
  }

  render() {
    return (
      // wrapping the app code with Router 
      <Router>
        {/* wrapping the app code with Material-UI */}
        <MuiThemeProvider>
          {/* the actual code */}
            <div>
              {/* setting up the navbar */}
              <div className="nav">
                <NavLink className="nav-item" to="/">Home</NavLink>
                <NavLink className="nav-item" to="/add">Add a Post</NavLink>
                <NavLink className="nav-item" to="/posts">View Posts</NavLink>
              </div> 

              {/* setting up the Router routing */}
              <Route exact path="/" component={Home} />
              <Route exact path="/posts" render={(props) => <ShowPosts {...props} posts={this.state.posts}/>} />
              <Route exact path="/add" render={(props) => <PostForm {...props} addPost={this.addPost}/>} />
            </div>
        </MuiThemeProvider>
      </Router> 
    )
  }
}

export default App;
