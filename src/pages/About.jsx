import React from 'react'
import Navbar from '../component/Navbar'
import Header from '../component/Header'
import Footer from '../component/Footer'
const About = () => {
  return (
    <div>
      <Header />
      
    <div className="strip_about container-fluid">
        <div className="container d-flex h-100 align-items-center justify-content-center text-center">

            <h1 className="h1 display-1 ">who we are...</h1>

        </div>
    </div>

    <div className="about container-fluid">
        <div className="container my-5">
            <h3>For over 30 years we've been taking travellers around the globe.</h3>
            <h5 className="my-5">That's over 30 years of adventures, of visiting new places and old friends, of countless unforgettable
                moments. More than 30 years of changing the way people see the world, on small group tours with
                like-minded Intrepid people.
            </h5>
            <h5>
                As a responsible business, we've always been committed to being there for our travellers and the
                communities we visit. We're on a mission to create positive change through the joy of travel. So, you
                can trust that when you travel with us, we won't just be there for your first adventure, we'll be there
                every step of your journey.
            </h5>

            <div className="row text-center py-5 m-auto justify-content-around  align-items-center my-4">
                <div className="col-lg-4 col-md-6">
                    <div className="box rounded-5">
                        <img src="images/israel.jpeg" alt="" className="w-100 rounded-5 " height="250px"/>
                    </div>
                    <h2 >israel Tour</h2>
                    <p>"Exploring Israel's diverse landscapes, from the ancient beauty of Jerusalem to the vibrant shores of Tel Aviv, offers a rich cultural experience steeped in history, spirituality, and stunning natural wonders."</p>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="box rounded-5">
                        <img src="images/india.jpeg" alt="" className="w-100 rounded-5 " height="250px"/>
                    </div>
                    <h2 >India Tour</h2>
                    <p>"India's kaleidoscope of spirituality, from the iconic Taj Mahal to bustling Delhi, entwines ancient traditions, diverse landscapes, flavorful cuisine, and a tapestry of colorful festivals for an enriching travel experience."</p>

                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="box rounded-5">
                        <img src="images/brazil.jpg" alt="" className="w-100 rounded-5" height="250px"/>
                    </div>
                    <h2 >Brazil Tour</h2>
                    <p>"Embarking on a journey in Brazil unveils lush rainforests, lively cities like Rio de Janeiro, and breathtaking beaches, immersing travelers in vibrant culture, music, and the Amazon's awe-inspiring biodiversity."</p>
                </div>
            </div>



        </div>
    </div>


    <div className="info container-fluid">
        <div className="container">
            <div className="row text-center justify-content-around ">
                <div className="col-lg-3 col-md-12 mb-3 mt-3  bg-body-secondary  mx-1 border border rounded-5">
                    <h3>vision</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae commodi fugiat alias, magni
                        pariatur dicta sed expedita animi, labore iusto voluptatem, minus illo veniam. Officia
                        voluptates veritatis praesentium aliquam omnis.</p>
                    <i className="fa fa-handshake-o fa-5x" aria-hidden="true"></i>
                </div>
                <div className="col-lg-3 col-md-12 mb-3 mt-3 bg-body-secondary  mx-5 border rounded-5">
                    <h3>mission</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae commodi fugiat alias, magni
                        pariatur dicta sed expedita animi, labore iusto voluptatem, minus illo veniam. Officia
                        voluptates veritatis praesentium aliquam omnis.</p>
                    <i className="fa fa-balance-scale fa-4x" aria-hidden="true"></i>
                </div>
                <div className="col-lg-3 col-md-12 mb-3 mt-3 bg-body-secondary mx-1 border rounded-5">
                    <h3>values</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae commodi fugiat alias, magni
                        pariatur dicta sed expedita animi, labore iusto voluptatem, minus illo veniam. Officia
                        voluptates veritatis praesentium aliquam omnis.</p>
                    <i className="fa fa-graduation-cap fa-5x" aria-hidden="true"></i>
                </div>

            </div>

        </div>
    </div>


    <main className="container-fluid">
        <div className="container">
            <div className="row my-5 align-items-center">
                <div className="col-md-6 ">
                    <img className="w-100" src="images/experiance30years.jpg" alt="" />
                </div>
                <div className="col-md-6 ">
                    <h2>30 YEARS OF SERVEING ARE CLIENTS</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nam cum corrupti at deleniti,
                        voluptatibus deserunt. Natus repellat nulla consectetur voluptatibus laboriosam perferendis
                        quae
                        magnam officia pariatur asperiores. Natus, corrupti?</p>

                </div>

            </div>
            <div className="row">
                <img src="images/MicrosoftTeams-image_0.png" alt=""/>
            </div>
        </div>

    </main>
      <Footer />
    </div>
  )
}

export default About