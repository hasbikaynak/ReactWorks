import React from 'react'

const App = () => {
  return (
    <div>
      <div>
        <section id="intro">   
          <div className="intro-overlay" />	
          <div className="intro-content">
            <div className="row">
              <div className="col-twelve">
                <h5>Hello, World.</h5>
                <h1>I'm Mehmet Hasbi Kaynak.</h1>
                <p className="intro-position">
                  <span>Front-end Developer</span>
                  <span>Back-end Developer</span>
                  <span>Full-stack Developer</span> 
                </p>
                <a className="button stroke smoothscroll" href="#about" title>More About Me</a>
              </div>  
            </div>   		 		
          </div> {/* /intro-content */} 
          <ul className="intro-social">        
            <li><a href="https://www.facebook.com/mehmet.h.kaynak/"><i className="fa fa-facebook" /></a></li>
            <li><a href="https://www.linkedin.com/in/mehmethasbikaynak/"><i className="fa fa-linkedin" /></a></li>
            <li><a href="https://github.com/hasbikaynak"><i className="fa fa-github" /></a></li>
          </ul> {/* /intro-social */}      	
        </section> {/* /intro */}
        {/* about section
   ================================================== */}
        <section id="about">  
          <div className="row section-intro">
            <div className="col-twelve">
              <h5>About</h5>
              <h1>Let me introduce myself.</h1>
              <div className="intro-info">
                <img src="https://media-exp1.licdn.com/dms/image/D4D03AQFd7A_Nb40ZWg/profile-displayphoto-shrink_800_800/0/1663082122923?e=1668643200&v=beta&t=xCVmqgzzJV6SK0VsDn_T3YYO85GKhbNhx0O-aciQ96I" alt="Profile Picture" />
                <p className="lead">Lorem ipsum Exercitation culpa qui dolor consequat exercitation fugiat laborum ex ea eiusmod ad do aliqua occaecat nisi ad irure sunt id pariatur Duis laboris amet exercitation veniam labore consectetur ea id quis eiusmod.</p>
              </div>   			
            </div>   		
          </div> {/* /section-intro */}
          <div className="row about-content">
            <div className="col-six tab-full">
              <h3>Profile</h3>
              <p>Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse in magna sint minim officia consectetur nisi commodo ea magna pariatur nisi cillum.</p>
              <ul className="info-list">
                <li>
                  <strong>Fullname:</strong>
                  <span>Mehmet Hasbi Kaynak</span>
                </li>
                <li>
                  <strong>Birth Date:</strong>
                  <span>January 8, 1997</span>
                </li>
                <li>
                  <strong>Job:</strong>
                  <span>Freelancer, Frontend Developer, Backend Developer, Fullstack Developer</span>
                </li>
                <li>
                  <strong>Email:</strong>
                  <span>kaynakhasbi1@gmail.com</span>
                </li>
              </ul> {/* /info-list */}
            </div>
          </div>  
          </section>
       
        
        <section id="services">
          <div className="overlay" />
          <div className="row section-intro">
            <div className="col-twelve">
              <h5>Services</h5>
              <h1>What Can I Do For You?</h1>
              <p className="lead">Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem ipsum Consectetur ut in in eu do.</p>
            </div>   		
          </div> {/* /section-intro */}
          <div className="row services-content">
            <div id="owl-slider" className="owl-carousel services-list">
              <div className="service">	
                <span className="icon"><i className="icon-earth" /></span>            
                <div className="service-content">	
                  <h3>Webdesign</h3>
                  <p className="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                  </p>
                </div> 	         	 
              </div> {/* /service */}
              <div className="service">	
                <span className="icon"><i className="icon-window" /></span>                          
                <div className="service-content">	
                  <h3>Web Development</h3>  
                  <p className="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                  </p>
                </div>	                          
              </div> {/* /service */}
              <div className="service">
                <span className="icon"><i className="icon-paint-brush" /></span>		            
                <div className="service-content">
                  <h3>Branding</h3>
                  <p className="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                  </p> 
                </div> 	            	               
              </div> {/* /service */}
              <div className="service">
                <span className="icon"><i className="icon-toggles" /></span>	              
                <div className="service-content">
                  <h3>UI/UX Design</h3>
                  <p className="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                  </p> 
                </div>                
              </div> {/* /service */}
              <div className="service">
                <span className="icon"><i className="icon-image" /></span>	            
                <div className="service-content">
                  <h3>Graphics Design</h3>
                  <p className="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                  </p> 
                </div>	               
              </div> {/* /service */}
              <div className="service">
                <span className="icon"><i className="icon-chat" /></span>	   	           
                <div className="service-content">
                  <h3>Consultancy</h3>
                  <p className="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                  </p> 
                </div>	               
              </div> {/* /service */}
            </div> {/* /services-list */}
          </div> {/* /services-content */}
        </section> {/* /services */}	
        {/* stats Section
   ================================================== */}
        <section id="stats" className="count-up">
          <div className="row">
            <div className="col-twelve">
              <div className="block-1-6 block-s-1-3 block-tab-1-2 block-mob-full stats-list">
                <div className="bgrid stat">
                  <div className="icon-part">
                    <i className="icon-pencil-ruler" />
                  </div>
                  <h3 className="stat-count">
                    1500
                  </h3>
                  <h5 className="stat-title">
                    Projects Completed
                  </h5>
                </div> {/* /stat */}					
                <div className="bgrid stat">
                  <div className="icon-part">
                    <i className="icon-users" />
                  </div>
                  <h3 className="stat-count">
                    900
                  </h3>
                  <h5 className="stat-title">
                    Happy Clients
                  </h5>
                </div> {/* /stat */}
                <div className="bgrid stat">
                  <div className="icon-part">
                    <i className="icon-badge" />
                  </div>
                  <h3 className="stat-count">
                    200
                  </h3>
                  <h5 className="stat-title">
                    Awards Received
                  </h5>
                </div> {/* /stat */}									
                <div className="bgrid stat">
                  <div className="icon-part">
                    <i className="icon-light-bulb" />
                  </div>
                  <h3 className="stat-count">
                    120
                  </h3>
                  <h5 className="stat-title">
                    Crazy Ideas
                  </h5>
                </div> {/* /stat */}
                <div className="bgrid stat">
                  <div className="icon-part">
                    <i className="icon-cup" />
                  </div>
                  <h3 className="stat-count">
                    1500
                  </h3>
                  <h5 className="stat-title">
                    Coffee Cups
                  </h5>
                </div> {/* /stat */}
                <div className="bgrid stat">
                  <div className="icon-part">
                    <i className="icon-clock" />
                  </div>
                  <h3 className="stat-count">
                    7200
                  </h3>
                  <h5 className="stat-title">
                    Hours
                  </h5>
                </div> {/* /stat */}
              </div> {/* /stats-list */}
            </div> {/* /twelve */}
          </div> {/* /row */}
        </section> {/* /stats */}
       <section id='mail'>
      <div className="row">
        <div className="col-six tab-full ">
          <h3>Form Styles</h3>
          <form>
            <div>
              <label htmlFor="sampleInput">Your email</label>
              <input className="full-width" type="email" placeholder="test@mailbox.com" id="sampleInput" />
            </div>
            <div>
              <label htmlFor="sampleRecipientInput">Reason for contacting</label>
              <div className="ss-custom-select">
                <select className="full-width" id="sampleRecipientInput">
                  <option value="Option 1">Questions</option>
                  <option value="Option 2">Report</option>
                  <option value="Option 3">Others</option>
                </select>
              </div>			         	
            </div>
            <label htmlFor="exampleMessage">Message</label>
            <textarea className="full-width" placeholder="Your message" id="exampleMessage" defaultValue={""} />
            <label className="add-bottom">
              <input type="checkbox" />			            
              <span className="label-text">Send a copy to yourself</span>
            </label>
            <input className="button-primary" type="submit" defaultValue="Submit" />
          </form>
        </div></div>
      </section>
          <div className="row contact-info">
            <div className="col-four tab-full">
              <div className="icon">
                <i className="icon-pin" />
              </div>
              <h5>Where to find me</h5>
              <p>
                Ryżowa 41H, 11<br />
                Warsaw<br />
                Poland
              </p>
            </div>
            <div className="col-four tab-full collapse">
              <div className="icon">
                <i className="icon-mail" />
              </div>
              <h5>Email Me At</h5>
              <p>kaynakhasbi1@gmail.com<br />		     
              </p>
            </div>
            <div className="col-four tab-full">
              <div className="icon">
                <i className="icon-phone" />
              </div>
              <h5>Call Me At</h5>
              <p>Phone: (+48) 795 719 182 <br />
              </p>
            </div>
          </div> {/* /contact-info */}
        {/* footer
   ================================================== */}
        <footer>
          <div className="row">
            <div className="col-six tab-full">
              <div className="copyright text-center">
                <span>© Copyright {new Date().getFullYear()}.</span>
              </div>		                  
            </div>
            <div id="go-top">
              <a className="smoothscroll" title="Back to Top" href="#top"><i className="fa fa-long-arrow-up" /></a>
            </div>
          </div> {/* /row */}     	
        </footer>  
        <div id="preloader"> 
          <div id="loader" />
        </div>
      </div>
    </div>
  )
}

export default App