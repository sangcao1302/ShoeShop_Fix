import React from 'react'

export default function Footer() {
  return (
    <footer className='container-fluid bg-black text-white text-deoration-none mt-5'>
      <div className="footer">
        <div className="container">
          <div className="row ">
            <div className="col-md-3 col-sm-6 mt-5">
              <div className="infoma" style={{lineHeight:"35px"}}>
                <h3>About</h3>
                <p className="ipsum">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedconsectetur </p>
                <ul className="social_icon d-flex align-items-center p-0 fs-6" style={{listStyle:"none"}}>
                  <li>Follow:</li>
                  <li className='bg-white text-dark rounded-circle p-2 badge mx-2 '><i className="fab fa-facebook-f "></i></li>
                  <li className='bg-white text-dark rounded-circle p-2 badge  mx-2'><i className="fab fa-twitter  "/></li>
                  <li className='bg-white text-dark rounded-circle p-2 badge  mx-2'><i className="fab fa-linkedin-in "></i></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-5">
              <div className="infoma">
                <h3>Address</h3>
                <ul className="conta p-0" style={{listStyle:"none", lineHeight:"35px"}}>
                  <li>Healing Center, oo W Street name, <br />
                    Loram ipusum 
                  </li>
                  <li>(+71) 8522369417 <br />(+71) 8522369417</li>
                  <li>  demo@gmail.com</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-5">
              <div className="infoma">
                <h3>Links</h3>
                <ul className="fullink text-start p-0" style={{"listStyle":"none",lineHeight:"35px"}}>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                  <li>Shop</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-5">
              <div className="infoma">
                <h3>Newsletter</h3>
                <form className="form_subscri" style={{lineHeight:"35px"}}>
                  <div className="row">
                    <div className="col-md-12">
                      <input className="newsl w-100 border-0 p-1 rounded-3" placeholder="Your Name" type="text" name="Your Name" />
                    </div>
                    <div className="col-md-12 mt-2">
                      <input className="newsl w-100 border-0 p-1 rounded-3" placeholder="Email" type="text" name="Email" />
                    </div>
                    <div className="col-md-12">
                      <button className="subsci_btn w-100 bg-white p-1 border-0 fs-5 text-dark rounded-3 mt-2">Subscribe</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright mt-2">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p>© 2023 All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </footer>
  )
}
