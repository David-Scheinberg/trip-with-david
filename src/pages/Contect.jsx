import React from 'react'
import Navbar from '../component/Navbar'
import Header from '../component/Header'
import Footer from '../component/Footer'
const Contect = () => {

    
        const sendMessage = () => {
          alert('Message sent!');
        };
    return (
        <div>

            <Header />

            <main className="container-fluid ">
                <div className="container">
                    <div className="row text-center">
                        <h1 >GET IN TOUCH</h1>
                        <h6 >phone: +972-535221010</h6>
                        <h6 >Email Address: Natruetravll@gmail.com</h6>
                        <h6 >Address: 18 parashat al haderch, Tel aviv, israel</h6>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 my-5">
                            <div className="form-floating mb-3 ">
                                <input type="name" className="form-control border-4" id="floatingInput" placeholder="avi choen" />
                                <label for="floatingInput">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="phone" className="form-control border-4" id="floatingPassword" placeholder="phone" />
                                <label for="floatingPassword">Phone</label>
                            </div>
                            <div className="form-floating">
                                <input type="email" className="form-control border-4" id="floatingPassword"
                                    placeholder="sadd@exapmle.com" />
                                <label for="floatingPassword">Email Address</label>
                                {/* <!-- <textarea className="form-control" id="exampleFormControlTextarea1" rows="12"></textarea> --> */}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="my-3">
                                <label for="exampleFormControlTextarea1" className="form-label "></label>
                                <textarea className="form-control border-4" id="exampleFormControlTextarea1" rows="8" placeholder="message here"></textarea>
                              

                            </div>
                            
                        </div>
                        <div className=' justify-content-center d-flex my-2 '>
                                    <button className='btn_contect' onClick={sendMessage}>Send Message</button>
                                </div>
                    </div>

                </div>

            </main>

            <Footer />
        </div>
    )
}

export default Contect