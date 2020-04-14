'use strict'

class LikeButton extends React.Component {

  state = {liked: false}

  render() {
    if (this.state.liked) {
      if (this.props.commentID) {
        return 'You liked comment number ' + this.props.commentID
      } else {
        return 'You liked this.'
      }
    }
    // return React.createElement('button', {onClick: () => this.setState({liked: true})}, 'Like')
    return <button onClick={() => this.setState({liked: true})}> Like </button>
  }
}

// ReactDOM.render(React.createElement(LikeButton), document.querySelector('.btn'))
ReactDOM.render(<LikeButton/>, document.querySelector('.btn'))

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.btns').forEach(domContainer => {
  const commentID = parseInt(domContainer.dataset.commentid, 10)
  ReactDOM.render(React.createElement(LikeButton, {commentID: commentID}), domContainer)
})

class Clock extends React.Component {

  state = {date: new Date()}

  componentDidMount() {
    this.timerID = setInterval(() => this.setState({date: new Date()}), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  render() {
    return <h2>{this.state.date.toLocaleTimeString()}</h2>
  }
}

ReactDOM.render(<Clock/>, document.querySelector('.clock'))

class Toggle extends React.Component {

  state = {isToggleOn: true}

  handleClick = () => {
    this.setState(state => ({isToggleOn: !state.isToggleOn}))
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
    )
  }
}

ReactDOM.render(<Toggle/>, document.querySelector('.toggle'))