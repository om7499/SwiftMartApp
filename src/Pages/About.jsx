import React from 'react'
import user1 from '../assets/user1.jpg'
import user2 from '../assets/user2.jpg'
import user3 from '../assets/user3.jpg'

const About = () => {
  return (
    <>
    <div className="container my-5 ">
      <div className="row">
        {/* Section Title */}
        <div className="col-12 text-center mb-4 shadow-lg rounded-2"style={{border:"1px solid #020f5f"}}>
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4 fw-bold"style={{color:"#020f5f"}}>About SwiftMart</h2>
          <p className="text-center fs-5">
            SwiftMart is your ultimate shopping destination, offering a wide
            range of products at unbeatable prices. From the latest electronics
            to the trendiest fashion, we have everything you need to make your
            life easier, more comfortable, and more exciting.
          </p>
        </div>
      </section> 
        </div>
      </div>

      {/* Company Description */}
      <div className="row ">
        <div className="col-sm-12 col-md-5 col-lg-5 shadow-lg mx-auto my-3 p-3  rounded-2">
          <h2 style={{color:"#020f5f"}}>Who We Are</h2>
          <p className='fs-5'>
            SwiftMart is an innovative e-commerce platform committed to offering the best
            shopping experience to our customers. With an extensive collection of high-quality
            products ranging from electronics to household goods, we make online shopping easier
            and faster.
          </p>
          <p className='fs-5'>
            Our vision is to revolutionize the way people shop by offering an extensive range of
            products at competitive prices, with lightning-fast delivery and outstanding customer
            service.
          </p>
        </div>

        <div className="col-sm-12 col-md-5 col-lg-5 shadow-lg mx-auto my-3 p-2 p-3  rounded-2">
          <h2 style={{color:"#020f5f"}}>Our Mission</h2>
          <p className='fs-5'>
            Our mission is simple: to provide a seamless and convenient shopping experience. We
            strive to help our customers find exactly what they need while offering exceptional
            service at every step of the process.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="row mt-5">
        <div className="col-12 text-center">
          <h2 style={{color:"#020f5f"}} className='my-3'>Meet the Team</h2>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card ">
            <img src={user1}  alt="Team Member" className="card-img-top rounded-circle w-75 mx-auto " />
            <div className="card-body">
              <h5 className="card-title">John Doe</h5>
              <p className="card-text">CEO and Founder</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={user2} alt="Team Member" className="card-img-top rounded-circle w-75 mx-auto" />
            <div className="card-body">
              <h5 className="card-title">Jane Smith</h5>
              <p className="card-text">Chief Operating Officer</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-lg-4  mb-4">
          <div className="card">
            <img src={user3} alt="Team Member" className="card-img-top rounded-circle w-75 mx-auto" />
            <div className="card-body">
              <h5 className="card-title">David Green</h5>
              <p className="card-text">Lead Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    </>
  )
}

export default About
