import React from 'react';
import './App.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class ShowPosts extends React.Component {
  constructor(props) {
    super(props)
    console.log("constructing show posts")
  }

  componentWillReceiveProps() {
    console.log("show posts props")
  }

  render() {

    const postsHtml = this.props.posts.map(elem => {
      return (
        <Card class="container">
          <CardHeader
            title={elem.title}
            subtitle={elem.author}
            avatar="https://avatars3.githubusercontent.com/u/1927765?s=400&v=4"
          />
          <CardText>
            {elem.body}
          </CardText>
        </Card>
      )
    })
    return (
      <div>
      {postsHtml}
      </div>
    )
  }
}

export default ShowPosts;