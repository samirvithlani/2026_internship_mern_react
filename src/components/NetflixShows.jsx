import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixShows = () => {
  return (
    <div style={{textAlign:"center"}}>
        <h1>NetflixShows</h1>
        <ul>
          <li>
            <Link to="/watch/moneyheist">Money Heist</Link>
          </li>
          <li>
            <Link to="/watch/breakingbad">BREAKING BAD</Link>
          </li>
          <li>
            <Link to="/watch/strangerthings">STRANGER THINGS</Link>
          </li>
          
        </ul>
    </div>
  )
}
