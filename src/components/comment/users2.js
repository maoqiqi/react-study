import React, {Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

export default class UsersComponent extends Component {

  constructor(props) {
    super(props)
    console.log('UsersComponent==>constructor', '===========================================')
    this.state = {
      firstView: true,
      loading: false,
      users: null,
      error: null,
    }
  }

  async UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('UsersComponent==>UNSAFE_componentWillReceiveProps', nextProps.searchName)
    const url = `https://api.github.com/search/users?q=${nextProps.searchName}`

    this.setState({firstView: false, loading: true})

    // 使用axios库
    // axios.get(url)
    //   .then((response) => {
    //     console.log(response)
    //     this.setState({loading: false, users: response.data.items})
    //   })
    //   .catch((error) => {
    //     // debugger
    //     console.log('error', error.response.data.message, error.message)
    //     this.setState({loading: false, error: error.message})
    //   })

    try {
      const result = await axios.get(url)
      this.setState({loading: false, users: result.data.items})
    } catch (err) {
      this.setState({err: err.message})
    }
  }

  render() {
    if (this.state.firstView) {
      return <h2>Enter name to search</h2>
    } else if (this.state.loading) {
      return <h2>Loading result...</h2>
    } else if (this.state.error) {
      return <h2>{this.state.error}</h2>
    } else {
      return (
        <div className='users clearfix'>
          {
            this.state.users.map((user) => (
              <div className="card" key={user.html_url}>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                  <img src={user.avatar_url} alt='user'/>
                </a>
                <p>{user.login}</p>
              </div>
            ))
          }
        </div>
      )
    }
  }
}

UsersComponent.propTypes = {
  searchName: PropTypes.string.isRequired,
}