import React from 'react'

const News = props => {
  const newsArr = ['News 001', 'News 002', 'News 003']
  return (
    <ul>{
      newsArr.map((news, index) => <li key={index}>{news}</li>)
    }</ul>
  )
}

export default News