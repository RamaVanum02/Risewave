import React, { Component } from 'react'; 
import Header from './header';
import Footer from './footer';
import EmailForm from './EmailForm'

class Home extends Component {
    render() {
        return (
            <>
            <Header/>
            
            <section id="hero" class="d-flex flex-column justify-content-end align-items-center">
                <div id="heroCarousel" data-bs-interval="5000" class="container carousel carousel-fade" data-bs-ride="carousel">

                {/* Slide 1 */}
                <div class="carousel-item active">
                    <div class="carousel-container">
                    <h2 class="animate__animated animate__fadeInDown">Welcome to <span>RiseWave</span></h2>
                    <p class="animate__animated fanimate__adeInUp">We work with visionary organizations and pioneer transformations in the way we live, work and interact. We design products, services and programs that advance businesses and touch human lives.</p>
                    <a href="#contact" class="btn-get-started animate__animated animate__fadeInUp scrollto">Contact Us</a>
                    </div>
                </div>

                {/* Slide 2 */}
                {/* <div class="carousel-item">
                    <div class="carousel-container">
                    <h2 class="animate__animated animate__fadeInDown">Lorem Ipsum Dolor</h2>
                    <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                    <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                    </div>
                </div> */}

                {/* Slide 3 */}
                {/* <div class="carousel-item">
                    <div class="carousel-container">
                    <h2 class="animate__animated animate__fadeInDown">Sequi ea ut et est quaerat</h2>
                    <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                    <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                    </div>
                </div> */}

                {/* <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
                </a>

                <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
                </a> */}

                </div>

                <svg class="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
                <defs>
                    <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
                </defs>
                <g class="wave1">
                    <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)"></use>
                </g>
                <g class="wave2">
                    <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)"></use>
                </g>
                <g class="wave3">
                    <use xlinkHref="#wave-path" x="50" y="9" fill="#fff"></use>
                </g>
                </svg> 

            </section>

            <main id="main">
            {/* ======= About Section =======  */}
            <section id="about" class="about">
            <div class="container">

                <div class="section-title" data-aos="zoom-out">
                <h2>About</h2>
                <p>Who we are</p>
                </div>

                <div class="row content" data-aos="fade-up">
                <div class="col-lg-6">
                    <p>
                    Risewave Technologies (Risewave) is a niche technology solutions and services provider established in the year 2024. Risewave is an experienced and energetic team with domain expertise in the space of Agriculture, Manufacturing, IT, Retail, Dairy, Financial Services, Public Sector and Education.
                    </p>
                    <ul>
                    <li><i class="ri-check-double-line"></i> PRIDE - Love for what we do and pride in what we deliver.</li>
                    <li><i class="ri-check-double-line"></i> TRUST - We believe in our collective; and we manifest trust in our relationships.</li>
                    <li><i class="ri-check-double-line"></i> WILL - Embody a "never say die" attitude & demonstrate exemplary will to deliver.</li>
                    </ul>
                </div>
                <div class="col-lg-6 pt-4 pt-lg-0">
                    <p>
                    Risewave offers specialized solutions in IoT, Analytics, RPA and having expertise in cloud solutions of SAP (Callidus, Hybris), Service Now and Salesforce.
                    </p>
                    <a href="www.google.com" class="btn-learn-more">Learn More</a>
                </div>
                </div>

            </div>
            </section>
            {/* End About Section */}

            {/* <!-- ======= Services Section ======= --> */}
            <section id="services" class="services">
            <div class="container">

                <div class="section-title" data-aos="zoom-out">
                <h2>Services</h2>
                <p>What we do offer</p>
                </div>

                <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="icon-box" data-aos="zoom-in-left">
                     <div class="icon"><i class="bi bi-briefcase" ></i></div> {/* style="color: #ff689b;" */}
                    <h4 class="title"><a href="">News media & Entertainment</a></h4>
                    <p class="description"> News portals and apps, Media & Entertainment portals and apps, OTT, Mobile TV, Music, Streaming.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-5 mt-md-0">
                    <div class="icon-box" data-aos="zoom-in-left" data-aos-delay="100">
                    <div class="icon"><i class="bi bi-book"></i></div>{/* style="color: #e9bf06;" */}
                    <h4 class="title"><a href="">Banking & Financial Services</a></h4>
                    <p class="description"> Fintechs, Banks, Insurance, Payments, Wallets, Lending, Trading, Investment, Blockchain, Currencies, Wealth management.</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 mt-5 mt-lg-0 ">
                    <div class="icon-box" data-aos="zoom-in-left" data-aos-delay="200">
                    <div class="icon"><i class="bi bi-card-checklist" ></i></div>{/* style="color: #3fcdc7;" */}
                    <h4 class="title"><a href="">Enterprise & IT</a></h4>
                    <p class="description"> ERP, Utilities, HRMS, Planning tools, Data & Analytics, LMS, Enterprise systems, Productivity suites.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-5">
                    <div class="icon-box" data-aos="zoom-in-left" data-aos-delay="300">
                    <div class="icon"><i class="bi bi-binoculars" ></i></div> {/* style="color:#41cf2e;" */}
                    <h4 class="title"><a href="">Healthcare & Lifesciences</a></h4>
                    <p class="description"> Medical devices, Hospital management systems, Pharma, Wearable tech, Personal healthcare, Fitness, Wellness.</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 mt-5">
                    <div class="icon-box" data-aos="zoom-in-left" data-aos-delay="400">
                    <div class="icon"><i class="bi bi-globe" ></i></div>  {/* style="color: #d6ff22;" */}
                    <h4 class="title"><a href="">Networks & Smart devices</a></h4>
                    <p class="description">Telecom, Home automation, Data networks, M2M, IoT, Utilities, Law enforcement, Defense & Border security.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-5">
                    <div class="icon-box" data-aos="zoom-in-left" data-aos-delay="500">
                    <div class="icon"><i class="bi bi-clock" ></i></div>   {/* style="color: #4680ff;" */}
                    <h4 class="title"><a href="">Education & Edtech</a></h4>
                    <p class="description"> Institutions, Portals, Apps, Learning management, Gamified learning, MOOCs, Universities, Learning centers.</p>
                    </div>
                </div>
                </div>

            </div>
            </section>
            {/* <!-- End Services Section --> */}

            {/*  ======= Features Section =======  */}
            {/* <section id="features" class="features">
            <div class="container">

                <ul class="nav nav-tabs row d-flex">
                <li class="nav-item col-3" data-aos="zoom-in">
                    <a class="nav-link active show" data-bs-toggle="tab" href="#tab-1">
                    <i class="ri-gps-line"></i>
                    <h4 class="d-none d-lg-block">Modi sit est dela pireda nest</h4>
                    </a>
                </li>
                <li class="nav-item col-3" data-aos="zoom-in" data-aos-delay="100">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-2">
                    <i class="ri-body-scan-line"></i>
                    <h4 class="d-none d-lg-block">Unde praesenti mara setra le</h4>
                    </a>
                </li>
                <li class="nav-item col-3" data-aos="zoom-in" data-aos-delay="200">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-3">
                    <i class="ri-sun-line"></i>
                    <h4 class="d-none d-lg-block">Pariatur explica nitro dela</h4>
                    </a>
                </li>
                <li class="nav-item col-3" data-aos="zoom-in" data-aos-delay="300">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-4">
                    <i class="ri-store-line"></i>
                    <h4 class="d-none d-lg-block">Nostrum qui dile node</h4>
                    </a>
                </li>
                </ul>

                <div class="tab-content" data-aos="fade-up">
                <div class="tab-pane active show" id="tab-1">
                    <div class="row">
                    <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                        <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                        <p class="fst-italic">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        </p>
                        <ul>
                        <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                        <li><i class="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                        <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                        </ul>
                        <p>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </div>
                    <div class="col-lg-6 order-1 order-lg-2 text-center">
                        <img src="assets/img/features-1.png" alt="" class="img-fluid"></img>
                    </div>
                    </div>
                </div>
                <div class="tab-pane" id="tab-2">
                    <div class="row">
                    <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                        <h3>Neque exercitationem debitis soluta quos debitis quo mollitia officia est</h3>
                        <p>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum
                        </p>
                        <p class="fst-italic">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        </p>
                        <ul>
                        <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                        <li><i class="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                        <li><i class="ri-check-double-line"></i> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</li>
                        <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                        </ul>
                    </div>
                    <div class="col-lg-6 order-1 order-lg-2 text-center">
                        <img src="assets/img/features-2.png" alt="" class="img-fluid"/>
                    </div>
                    </div>
                </div>
                <div class="tab-pane" id="tab-3">
                    <div class="row">
                    <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                        <h3>Voluptatibus commodi ut accusamus ea repudiandae ut autem dolor ut assumenda</h3>
                        <p>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum
                        </p>
                        <ul>
                        <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                        <li><i class="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                        <li><i class="ri-check-double-line"></i> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</li>
                        </ul>
                        <p class="fst-italic">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        </p>
                    </div>
                    <div class="col-lg-6 order-1 order-lg-2 text-center">
                        <img src="assets/img/features-3.png" alt="" class="img-fluid"/>
                    </div>
                    </div>
                </div>
                <div class="tab-pane" id="tab-4">
                    <div class="row">
                    <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                        <h3>Omnis fugiat ea explicabo sunt dolorum asperiores sequi inventore rerum</h3>
                        <p>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum
                        </p>
                        <p class="fst-italic">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        </p>
                        <ul>
                        <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                        <li><i class="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                        <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                        </ul>
                    </div>
                    <div class="col-lg-6 order-1 order-lg-2 text-center">
                        <img src="assets/img/features-4.png" alt="" class="img-fluid"/>
                    </div>
                    </div>
                </div>
                </div>

            </div>
            </section> */}
            {/* End Features Section */}

            {/* <!-- ======= F.A.Q Section ======= --> */}

            {/* <!-- ======= Cta Section ======= --> */}
    {/* <section id="team" class="faq">
      <div class="container">
        <div class="section-title" data-aos="zoom-out">
            <h2>Team</h2>
            <p>Our Team</p>
        </div>

        <div class="row" data-aos="zoom-out">
          <div class="col-lg-9 text-center text-lg-start">
             <h3>We are a company founded, led and run by designers. We create incredible outcomes through our applied understanding of Design Thinking and our Team spirit</h3> 
            <p> We have top-notch professionals in the fields of business analysis in the areas of Supply Chain Management, Discrete and Process Manufacturing, Finance, Advance Planning, Customer Relationship Management, implementation and support of packaged software like Oracle E-Business Suite, JD Edwards., We have a team of technical experts and architects in Database Administration, Programming and Server Administration.</p>
          </div>
          <div class="col-lg-3 cta-btn-container text-center">
            <a class="cta-btn align-middle" href="#">Call To Action</a>
          </div>
        </div>

      </div>
    </section> */}
    {/* <!-- End Cta Section --> */}


            <section id="team" class="faq">
            <div class="container">

                <div class="section-title" data-aos="zoom-out">
                <h2>Team</h2>
                <p>Our Team</p>
                </div>

                <div class="row">
                    <div class="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0">
                        <h3>We create incredible outcomes through our applied understanding of Design Thinking and our Team spirit</h3>
                        <br/>
                        <p class="fst-italic">We have top-notch professionals in the fields of business analysis in the areas of Supply Chain Management, Discrete and Process Manufacturing, Finance, Advance Planning, Customer Relationship Management, implementation and support of packaged software like Oracle E-Business Suite, JD Edwards., We have a team of technical experts and architects in Database Administration, Programming and Server Administration.</p>
                        
                    </div>
                </div>
            </div>
            </section>
            {/* <!-- End F.A.Q Section --> */}


        
            </main>
            <EmailForm></EmailForm> 
            <Footer/>
            </>
            )
        }
    }
    
    export default Home;