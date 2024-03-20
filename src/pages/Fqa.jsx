import React from 'react'
import Navbar from '../component/Navbar'
import Header from '../component/Header'
import Footer from '../component/Footer'
const Fqa = () => {
  return (
    <div>
   <Header/>
   <main>
    <img src="./images/bg3.jpg" alt="hiking" title="beutifull view" className="shadow w-100 border-secondary  "/>
    <div className="row  mt-4 align-items-center justify-content-evenly">
      <div className="col-md-6 ">
       
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="a1 accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                How to choose a country to travel to?
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body ">There are a number of factors to consider when choosing a country to travel
                to.
                These factors include:

                Travel purpose: What do you want to see and do on your trip? Are you interested in a cultural trip, a
                nature
                trip, or an urban trip?
                Trip duration: How much time do you have to travel?
                Budget: How much are you willing to spend on your trip?
                Seasonality: When do you want to travel?
                Visa requirements: Do you need a visa to enter the country?</div>
            </div>
          </div>




          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="a1 accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                How to choose a travel itinerary?
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Once you have chosen a country to travel to, you can start planning your
                itinerary. Here are a few things to keep in mind when planning your itinerary:

                What do you want to see and do on your trip? List all the destinations and activities you want to
                include in
                your itinerary.
                How much time do you have to travel? Tailor your itinerary to the length of your trip.
                Distance between destinations: Consider the distance between the destinations in your itinerary.
                Cost: Check the costs of transportation, accommodation, food, and activities in your itinerary.</div>
            </div>
          </div>





          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="a1 accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                How to prepare for a trip?
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">When preparing for a trip, be sure to bring all the things you need,
                including:

                Valid passport
                Visa (if required)
                Cash
                Credit cards
                Flight ticket
                Admission tickets to attractions and activities
                Medications
                Clothes
                Shoes
                Personal items
                In addition, you can use guidebooks and websites to learn more about the country you are traveling to.
              </div>
            </div>
          </div>



          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="a1 accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapsefour">
                How to book flights and hotels for a trip?
              </button>
            </h2>
            <div id="flush-collapsefour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">You can book flights and hotels for your trip on the websites of airlines and
                hotels, or through a travel agent. When booking, be sure to check the booking terms, including
                cancellations
                and refunds.
              </div>
            </div>
          </div>


          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="a1 accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapsefive" aria-expanded="false" aria-controls="flush-collapsefive">
                How to get a visa for a country you are traveling to?
              </button>
            </h2>
            <div id="flush-collapsefive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">You can get a visa for a country you are traveling to at the embassy or
                consulate of that country in your home country. When applying for a visa, be sure to bring all the
                required documents, including a valid passport, photos, an application form, and a document that
                confirms the purpose of your trip.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-5">
        <img className="w-100" src="images/fqa1.jpeg" alt=""/>
      </div>
    </div>
  </main>

   <Footer/>
  </div>
  )
}

export default Fqa