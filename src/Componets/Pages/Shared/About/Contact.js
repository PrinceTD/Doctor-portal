import React from 'react'
import image1 from '../../../../icons/clock.svg'
import image2 from '../../../../icons/marker.svg'
import image3 from '../../../../icons/phone.svg'
import './contact.css'

export default function Contact() {
    return (
        <div className='container'>

            <div class="row row-cols-1 row-cols-md-3 g-4 mt-5">
                <div class="col">
                    <div class="card h-100 colorBg">

                        <div class="card-body d-flex align-items-center">
                            <div>
                                <img src={image1} class="card-img-top" alt="..." height='86px' width='86px' />
                            </div>
                            <div className='ps-3'>
                                <h5 class="card-title">Opening Hours</h5>
                                <p class="card-text">Natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>

                    </div>

                </div>
                <div class="col">
                    <div class="card h-100 colorBgToo">

                        <div class="card-body d-flex align-items-center">
                            <div>
                                <img src={image2} class="card-img-top" alt="..." height='86px' width='62px' />
                            </div>
                            <div className='ps-3'>
                                <h5 class="card-title">Visit our location</h5>
                                <p class="card-text">Brooklyn, NY 10036, United States.</p>
                            </div>
                        </div>

                    </div>

                </div>
                <div class="col">
                    <div class="card h-100 colorBg">

                        <div class="card-body d-flex align-items-center ">
                            <div>
                                <img src={image3} class="card-img-top" alt="..." height='50px' width='77px' />
                            </div>
                            <div className='ps-3'>
                                <h5 class="card-title">Contact us now</h5>
                                <p class="card-text">+0987654321</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
