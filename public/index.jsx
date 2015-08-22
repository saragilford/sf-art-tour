var Title2 = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    var titleNodes = this.state.data.map(function(node) {
      return <h2>{node.title}</h2>
    })
      return (
        <div className="titleList">
          {titleNodes}
        </div>
      )
  }
});

React.render(
  <Title2 url="http://radiant-garden-1447.herokuapp.com/neighborhoods/43"/>,
  document.getElementById('content')
);

// var CommentBox = React.createClass({
//   render: function() {
//     return (
//       <div className="commentBox">
//         Hello, world! I am a CommentBox.
//       </div>
//     );
//   }
// });
// React.render(
//   <CommentBox />,
//   document.getElementById('content')
// );
