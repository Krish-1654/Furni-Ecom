import React from 'react'
import Layout from '../Layout'
import HeroSec from '../Home/HeroSec'
import ShopSec1 from './ShopSec1'
import ShopSec2 from './ShopSec2'

const Shop = () => {
    return (
        <>
            <Layout>
                <HeroSec Title={"Shop"}/>
                <ShopSec1/>
                <ShopSec2/>
            </Layout>
        </>
    )
}

export default Shop
