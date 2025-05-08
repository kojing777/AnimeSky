import React from 'react'
import Banner from './Banner/Banner'
import TrendingAnimes from './AnimeSites/TrendingAnimes'
import NewNew from './NewNew/NewNew'
import PopularGames from './PopularGames/PopularGames'
import Popular from './Popular/Popular'

const Home = () => {
  return (
    <div>
     <Banner />
     <TrendingAnimes />
    <NewNew />
    <Popular />
    <PopularGames />
    </div>
  )
}

export default Home
