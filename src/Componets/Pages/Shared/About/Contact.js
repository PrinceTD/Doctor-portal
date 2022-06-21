import React from 'react'

export default function Contact() {
    return (
        <div className='container'>

            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100 ">
                        {/* <img src="..." class="card-img-top" alt="..."> */}
                        <div class="card-body">
                            <h5 class="card-title">Opening Hours</h5>
                            <p class="card-text">Natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        {/* <img src="..." class="card-img-top" alt="..."> */}
                        <div class="card-body">
                            <h5 class="card-title">Visit our location</h5>
                            <p class="card-text">Brooklyn, NY 10036, United States</p>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        {/* <img src="..." class="card-img-top" alt="..."> */}
                        <div class="card-body">
                            <h5 class="card-title">Contact us now</h5>
                            <p class="card-text">+09090-9999</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
