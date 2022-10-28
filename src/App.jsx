import React from 'react'
import Header from './components/Header'
import Post from './components/Post'
import data from './data'

function App() {
  const posts = data.map((item) => {
    return <Post id={item.id} item={item} />
  })

  return (
    <>
      <Header />
      <div className="content">{posts}</div>
    </>
  )
}

export default App
