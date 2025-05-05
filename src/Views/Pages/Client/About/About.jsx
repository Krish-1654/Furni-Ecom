import React from 'react'
import Layout from '../Layout'
import HeroSec from '../Home/HeroSec'
import AboutSec1 from './AboutSec1'

const About = () => {
    return (
        <>
            <Layout>
                <HeroSec Title={"About Us"} Desc={"Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique."} img={"couch.png"} />
                <AboutSec1 />
            </Layout>
        </>
    )
}

export default About