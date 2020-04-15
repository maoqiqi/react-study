import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

const Users = props => {
  console.log('Users==>', '===========================================')
  const [code, setCode] = useState(1)
  console.log('Users==>code', code)
  const [data] = useState({users: null, error: null})

  useEffect(() => {
    (async () => {
      if (!props.searchName) return

      setCode(2)
      const url = `https://api.github.com/search/users?q=${props.searchName}`

      try {
        const res = await fetch(url)
        const result = await res.json()
        console.log(result)
        data.users = result.items
        setCode(4)
      } catch (err) {
        data.error = err.message
        setCode(3)
      }
    })()
  }, [props.searchName, data])

  if (code === 1) {
    return <h2>Enter name to search</h2>
  } else if (code === 2) {
    return <h2>Loading result...</h2>
  } else if (code === 3) {
    return <h2>{data.error}</h2>
  } else {
    return (
      <div className='users clearfix'>
        {
          data.users.map(user => (
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

Users.propTypes = {
  searchName: PropTypes.string.isRequired,
}

export default Users