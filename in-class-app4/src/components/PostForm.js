import React from 'react'
import './App.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      author: '',
      title: '',
      body: ''
    };
    this.state = this.defaultState
  }

  componentWillReceiveProps() {
    console.log("received props")
  }

  handleAuthorChange = (event) => {
    this.setState({author: event.target.value});
  }

  handleTitleChange = (event) => {
    this.setState({title: event.target.value});
  }

  handleBodyChange = (event) => {
    this.setState({body: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // take our post in state and pass it up to the parent component
    this.props.addPost(this.state)
    this.setState(this.defaultState)
    this.props.history.push("/posts")
  }

  render() {
    const formStyle = {
      margin: '100px'
      // this is the ugly non-css way to inline style 
    }

    const textFieldStyle = {
      marginLeft: '10px'
    }

    return (

      <Paper style={formStyle} zDepth={2}>

      <form onSubmit={this.handleSubmit}>

        <h1>{this.props.test}</h1>

          <TextField 
            floatingLabelText="Author" 
            hintText="Your Name" 
            type="text" 
            value={this.state.author} 
            onChange={this.handleAuthorChange} 
            underlineShow={false}
            fullWidth={true}
            style={textFieldStyle}
          />

           <Divider />

          <TextField 
            floatingLabelText="Title" 
            hintText="Your new blog post" 
            type="text" 
            value={this.state.title} 
            onChange={this.handleTitleChange}
            underlineShow={false}
            fullWidth={true}
            style={textFieldStyle}
          />

           <Divider />

          <TextField 
            floatingLabelText="Body" 
            hintText="Your new blog post body" 
            type="text" 
            value={this.state.body} 
            onChange={this.handleBodyChange} 
            underlineShow={false}
            fullWidth={true}
            style={textFieldStyle}
            multiLine={true}
            rows={5}
          />

           <Divider />
           <br/>

        <RaisedButton 
          label="Submit" 
          primary={true} 
          type="submit" 
          fullWidth={true}
        />  
        {/* below is the old submit button, above is the MUI "RaisedButton" */}
        {/* <input type="submit" value="Submit" /> */}

      </form>
      </Paper>

    );
  }
}

export default PostForm;
