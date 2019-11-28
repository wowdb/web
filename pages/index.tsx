import '../assets/global.css'

import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

const Home: NextPage = () => (
  <>
    <Head>
      <title>WoWdb</title>
    </Head>

    <main>
      <header className="flex items-center p-8 bg-secondary">
        <img className="h-16 w-16" src="/img/wowdb.svg" alt="WoWdb" />
        <h1 className="font-semibold text-accent text-2xl ml-4">WoWdb</h1>
        <nav className="flex ml-auto">
          <a className="ml-4" href="#" title="App Store">
            <img
              className="h-8 w-8"
              src="/img/store/app-store.svg"
              alt="App Store"
            />
          </a>
          <a className="ml-4" href="#" title="Google Play">
            <img
              className="h-8 w-8"
              src="/img/store/google-play.svg"
              alt="Google Play"
            />
          </a>
        </nav>
      </header>
      <main className="p-8">
        <p>WoWdb is a World of Warcraft database in your pocket.</p>
        <h2 className="mt-12">Screenshots</h2>
        <section className="md:flex md:flex-wrap md:justify-center">
          <figure className="mt-8 md:m-8">
            <img
              className="rounded-lg w-full md:w-img"
              src="/img/screenshot/1.jpg"
              alt="Search live or classic"
            />
          </figure>
          <figure className="mt-8 md:m-8">
            <img
              className="rounded-lg w-full md:w-img"
              src="/img/screenshot/2.jpg"
              alt="View results from Wowhead"
            />
          </figure>
          <figure className="mt-8 md:m-8">
            <img
              className="rounded-lg w-full md:w-img"
              src="/img/screenshot/3.jpg"
              alt="View comments from Wowhead"
            />
          </figure>
          <figure className="mt-8 md:m-8">
            <img
              className="rounded-lg w-full md:w-img"
              src="/img/screenshot/4.jpg"
              alt="View full details on Wowhead"
            />
          </figure>
          <figure className="mt-8 md:m-8">
            <img
              className="rounded-lg w-full md:w-img"
              src="/img/screenshot/5.jpg"
              alt="Tap links in comments"
            />
          </figure>
        </section>
        <section className="flex flex-col items-center mt-20 md:mt-12">
          <h2 className="mb-4">Download</h2>
          <p>Download the app now for iOS or Android device.</p>
          <a
            className="flex items-center mt-4 text-accent"
            href="https://itunes.apple.com/us/app/wowdb/id1366381234">
            <img
              className="h-12 mr-4"
              src="/img/store/app-store.svg"
              alt="App Store"
            />
            App Store
          </a>
          <a
            className="flex items-center mt-4 text-accent"
            href="https://play.google.com/store/apps/details?id=com.designplox.wowhead">
            <img
              className="h-12 mr-4"
              src="/img/store/google-play.svg"
              alt="Google Play"
            />
            Google Play
          </a>
        </section>
        <section className="flex flex-col items-center mt-12">
          <h2 className="mb-4">Open source</h2>
          <p>
            WoWdb is built with open source tech and is completely open source.
            You can find the source code on GitHub.
          </p>
          <a
            className="flex items-center mt-4 text-accent"
            href="https://github.com/wowdb">
            <img
              className="h-12 mr-4"
              src="/img/social/github.svg"
              alt="GitHub"
            />
            GitHub
          </a>
        </section>
        <section className="flex flex-col items-center mt-12">
          <h2 className="mb-4">Say hello</h2>
          <p>You can find me on Twitter or GitHub.</p>
          <a
            className="flex items-center mt-4 text-accent"
            href="https://github.com/alizahid">
            <img
              className="h-12 mr-4"
              src="/img/social/github.svg"
              alt="GitHub"
            />
            GitHub
          </a>
          <a
            className="flex items-center mt-4 text-accent"
            href="https://twitter.com/alizahid0">
            <img
              className="h-12 mr-4"
              src="/img/social/twitter.svg"
              alt="Twitter"
            />
            Twitter
          </a>
        </section>
      </main>
      <footer className="flex p-8 justify-center text-gray-500">
        <div>&copy; {new Date().getFullYear()}</div>
        <div className="ml-8">
          Built by <a href="https://alizahid.dev">Ali Zahid</a>
        </div>
      </footer>
    </main>
  </>
)

export default Home
