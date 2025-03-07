import React from 'react'
import Banner from './Banner/Banner'
import About from './About/About'
import Hero from './Hero/AutoPlay'
import NewNew from './NewNew/NewNew'
import PopularGames from './PopularGames/PopularGames'
import Popular from './Popular/Popular'
import AutoPlay from './Hero/AutoPlay'
const Home = () => {
  return (
    <div>
     <Banner />
     <AutoPlay />
    <NewNew />
    <Popular />
    <PopularGames />
    </div>
  )
}

export default Home
