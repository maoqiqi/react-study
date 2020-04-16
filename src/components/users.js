import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

const Users = props => {
  console.log('Users==>', '===========================================')
  const [data, setData] = useState({
    firstView: true,
    loading: false,
    users: null,
    error: '',
  })
  console.log(data)

  useEffect(() => {
    (async () => {
      if (!props.searchName) return

      setData({firstView: false, loading: true, users: null, error: ''})

      const url = `https://api.github.com/search/users?q=${props.searchName}`

      try {
        const resp = await fetch(url)
        if (resp.status === 200) {
          const result = await resp.json()
          setData({firstView: false, loading: false, users: result.items, error: ''})
        } else {
          setData({firstView: false, loading: false, users: null, error: resp.statusText})
        }
      } catch (err) {
        setData({firstView: false, loading: false, users: null, error: err.message})
      }
    })()
  }, [props.searchName])

  if (data.firstView) {
    return <h2>Enter name to search</h2>
  } else if (data.loading) {
    return <h2>Loading result...</h2>
  } else if (data.error) {
    return <h2>{data.error}</h2>
  } else {
    return (
      <div className='users clearfix'>
        {
          data.users && data.users.map(user => (
            <div className="user" key={user.html_url}>
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

Users.propTypes = {
  searchName: PropTypes.string.isRequired,
}

export default Users