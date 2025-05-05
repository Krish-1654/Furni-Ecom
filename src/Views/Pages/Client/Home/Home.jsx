import React from 'react'
import Layout from '../Layout'
import HeroSec from './HeroSec'
import HomeSec1 from './HomeSec1'
import AboutSec1 from '../About/AboutSec1'
import HomeSec2 from './HomeSec2'

const Home = () => {
  return (
    <>
      <Layout>
        <HeroSec Title={"Modern Interior Design Studio"} Desc={"Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique."} img={"couch.png"}/>
        <HomeSec1/>
        <AboutSec1/>
        <HomeSec2/>
      </Layout>

    </>
  )
}

export default Home
