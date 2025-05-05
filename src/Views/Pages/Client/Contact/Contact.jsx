import React from 'react'
import Layout from '../Layout'
import HeroSec from '../Home/HeroSec'
import ContactSec1 from './ContactSec1'

const Contact = () => {
  return (
    <>
      <Layout>
        <HeroSec Title={"Contact"} Desc={"Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique."} img={"couch.png"}/>
        <ContactSec1/>
      </Layout>
    </>
  )
}

export default Contact