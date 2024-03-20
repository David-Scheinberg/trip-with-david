import React from 'react'
import "../style/Style.css"


const Footer = () => {
    return (
        <div>
            <div className='container-fluid bg-secondary'>
                <div className="footer_txt container">
                    <div className="row justify-content-center">
                        <div className=" col-md-10 text-center mt-3 ">
                            <h2 >Nature Travaling</h2>
                            <h6 > <i className="fa fa-phone" aria-hidden="true"></i>
                                phone: +972-535221010</h6>
                            <h6 ><i className="fa fa-envelope" aria-hidden="true"></i>
                                Email Address: Natruetravll@gmail.com</h6>
                            <h6 ><i className="fa fa-location-arrow" aria-hidden="true"></i>
                                Address: 18 parashat al haderch, Tel aviv, israel
                            </h6>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center mt-3">

                            <div className="row my-5">
                            <div className="icon_div col-md-12 text-center">
                                <i className="icon bi bi-instagram"></i>
                                <i className="icon bi bi-twitter-x"></i>
                                <i className="icon bi bi-whatsapp"></i>
                                <i className="icon bi bi-facebook"></i>

                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;