import './index.scss'

import React, { Component } from 'react'

import { screenshots, wowdb } from '../../assets'

const { achievement, search, weapon } = screenshots

const images = [
  {
    image: search,
    title: 'Search'
  },
  {
    image: achievement,
    title: 'Achievement'
  },
  {
    image: weapon,
    title: 'Weapon'
  }
]

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <main>
          <header>
            <img src={wowdb} alt="WoWdb" />
            <h1>WoWdb</h1>
          </header>
          <p>WoWdb is a mobile World of Warcraft database.</p>
          <section>
            <h2>Download</h2>
            <p>Download the app now for your iOS or Android device.</p>
            <a
              href="https://itunes.apple.com/us/app/wowdb/id1366381234"
              className="app-store"
            >
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.designplox.wowhead"
              className="google-play"
            >
              Google Play
            </a>
          </section>
          <section>
            <h2>Open source</h2>
            <p>WoWdb is open source. You can find the source code on GitHub.</p>
            <a href="https://github.com/wowdb" className="github">
              GitHub
            </a>
          </section>
          <section>
            <h2>Say hello</h2>
            <p>You can find me on Twitter or GitHub.</p>
            <a href="https://twitter.com/alizahid0" className="twitter">
              Twitter
            </a>
            <a href="https://github.com/alizahid" className="github">
              GitHub
            </a>
          </section>
        </main>
        <aside>
          <h2>Screenshots</h2>
          {images.map(({ image, title }) => (
            <figure key={title}>
              <img src={image} alt={title} />
            </figure>
          ))}
        </aside>
      </div>
    )
  }
}
