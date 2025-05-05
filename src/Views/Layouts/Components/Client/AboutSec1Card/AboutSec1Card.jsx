import React from 'react'

const AboutSec1Card = ({img,title}) => {
    return (
        <>
            <div className="col-md-6">
                <div class="card border-0 bg-light">
                    <img src={img} class="img-thumbnail border-0 bg-light" width={"60px"} alt="..." />
                    <div class="card-body">
                        <p class="card-title fw-medium">{title}</p>
                        <p class="card-text small">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSec1Card