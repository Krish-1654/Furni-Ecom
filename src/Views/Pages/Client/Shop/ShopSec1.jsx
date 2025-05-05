import React from 'react'
import ShopSec1Card from '../../../Layouts/Components/Client/ShopSec1Card/ShopSec1Card'


const ShopSec1 = () => {
    return (
        <>
            <div className="container-fluid bg-light">
                <div className="container py-4">
                    <div className="row py-3 justify-content-center">
                        <p className='h2 text-uppercase text-center py-4 border-top border-bottom'>Featured Categories</p>
                        <ShopSec1Card img={"https://ik.imagekit.io/2xkwa8s1i/img/npl_modified_images/Bed_Taurus/WEWB7872SSTAURUS/WEWB7872SSTAURUS_LS_1.jpg?tr=w-1080"} desc={"Bed"} />
                        <ShopSec1Card img={"https://ik.imagekit.io/2xkwa8s1i/img/npl_modified_images/Nico_Wing_Chair/WWCHRNICFRCG/WWCHRNICFRCG_LS_1.jpg?tr=w-1080"} desc={"Chair"} />
                        <ShopSec1Card img={"https://ik.imagekit.io/2xkwa8s1i/img/sofa-sets/napper/regular/lifestyle/FOBL.jpg?tr=w-1080"} desc={"Sofa"} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopSec1