<script setup>
import Header from "@/components/Header.vue";
</script>

<template>
  <Header/>
  <main class="main">

    <!--=============== Home =================-->
    <section class="home section" id="home">
      <div class="container home__container">
        <div class="home__data">
          <span>Hello, I'm</span>
          <h1>Oleg Slobodyan</h1>
          <h3>Frontend Developer</h3>
          <div class="home__buttons">
            <a download="" href="@/assets/cv.pdf" class="btn btn__primery">
              Download CV
            </a>
            <a href="#about" class="btn">About me</a>
          </div>
        </div>
        <div class="home__handle">
          <img src="@/assets/images/photo.jpg" alt="photo">
        </div>
        <div class="home__social">
          <a href="https://linkedin.com/in/olegsloboydan" class="social__link" target="_blank">
            <i class='bx bxl-linkedin-square'></i>
          </a>
          <a href="https://github.com/teddi90" class="social__link" target="_blank">
            <i class='bx bxl-github'></i>
          </a>
          <a href="https://www.facebook.com/oleg510bodyan/" class="social__link" target="_blank">
            <i class='bx bxl-facebook-square'></i>
          </a>
        </div>
        <a href="#about" class="home__scroll">
          <i class='bx bx-mouse'></i>
          <span class="scroll__down">Scroll Down</span>
        </a>
      </div>
    </section>

    <!--=============== About =================-->
    <section class="about section" id="about">
      <span class="subtitle">My Intro</span>
      <h2 class="title">About me</h2>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-lg-6">
            <div class="about__img">
              <img src="@/assets/images/photo2.jpg" alt="">
            </div>
          </div>
          <div class="col-sm-12 col-lg-6">
            <div class="row">
              <div class="col-xs-6 col-lg-4">
                <div class="info">
                  <div class="info__img">
                    <i class='bx bx-award'></i>
                  </div>
                  <h3 class="info__title">
                    Expirience
                  </h3>
                  <span class="info__subtitle">
                                        3 mounth
                                    </span>
                </div>
              </div>
              <div class="col-xs-6 col-lg-4">
                <div class="info">
                  <div class="info__img">
                    <i class='bx bx-briefcase'></i>
                  </div>
                  <h3 class="info__title">
                    Completed
                  </h3>
                  <span class="info__subtitle">
                                        4 Projects
                                    </span>
                </div>
              </div>
              <div class="col-xs-6 col-lg-4">
                <div class="info">
                  <div class="info__img">
                    <i class='bx bx-support'></i>
                  </div>
                  <h3 class="info__title">
                    Support
                  </h3>
                  <span class="info__subtitle">
                                        Online 24/7
                                    </span>
                </div>
              </div>
              <div class="col-xs-12">
                <p class="text ta-c">
                  Frontend develper from Ivano-Frankivsk. I create web pages with HTML, CSS and Java
                  Script. I whoud like
                  to develop website for you.
                </p>
                <div class="ta-c">
                  <a href="#contact" class="btn">Contact me</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--=============== Skills =================-->
    <section class="skills section" id="skills">
      <span class="subtitle">My ablities</span>
      <h2 class="title">My Expirience</h2>
      <div class="container">
        <div class="cetntered-wrapper">
          <div class="skills__wrapper">
            <h3 class="skills__title">Frontend developer</h3>
            <div class="row">
              <div class="col-lg-6">
                <div class="skill skills__box">
                  <i class='bx bxs-badge-check'></i>
                  <div class="skills__data">
                    <h3 class="skill__name">HTML</h3>
                    <span class="skill__level">Intermediate</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="skill skills__box">
                  <i class='bx bxs-badge-check'></i>
                  <div class="skills__data">
                    <h3 class="skill__name">CSS/SCSS</h3>
                    <span class="skill__level">Intermediate</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="skill skills__box">
                  <i class='bx bxs-badge-check'></i>
                  <div class="skills__data">
                    <h3 class="skill__name">JavaScript</h3>
                    <span class="skill__level">Intermediate</span>
                  </div>

                </div>
              </div>
              <div class="col-lg-6">
                <div class="skill skills__box">
                  <i class='bx bxs-badge-check'></i>
                  <div class="skills__data">
                    <h3 class="skill__name">Bootsrap</h3>
                    <span class="skill__level">Basic</span>
                  </div>

                </div>
              </div>
              <div class="col-lg-6">
                <div class="skill skills__box">
                  <i class='bx bxs-badge-check'></i>
                  <div class="skills__data">
                    <h3 class="skill__name">Git</h3>
                    <span class="skill__level">Basic</span>
                  </div>

                </div>
              </div>
              <div class="col-lg-6">
                <div class="skill skills__box">
                  <i class='bx bxs-badge-check'></i>
                  <div class="skills__data">
                    <h3 class="skill__name">Vue/Vuex</h3>
                    <span class="skill__level">Basic</span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--=============== Services =================-->
    <!-- <section class="services section">
        <span class="subtitle">My Services</span>
        <h2 class="title">What I Offer</h2>
        <div class="container">
            <div class="cetntered-wrapper">
                <div class="row">
                    <div class="col-xs-6 col-lg-4">
                        <div class="service services__card">
                            <h3 class="service__title">Develop <br> website</h3>
                            <span class="service__btn">
                                See more <i class='bx bx-right-arrow-alt service__arrow'></i>
                            </span>
                            <div class="service__modal">
                                <div class="service__modal-content">
                                    <i class='bx bx-x service__modal-close'></i>
                                    <h3 class="service__modal-title">Develop website</h3>
                                    <p class="service__modal-description">
                                        With pleasure I develop website for you.
                                    </p>
                                    <ul class="service__modal-list">
                                        <li class="service__modal-item">
                                            Use HTML5 and CSS3.
                                        </li>
                                        <li class="service__modal-item">
                                            Use JavaScript, jQuery.
                                        </li>
                                        <li class="service__modal-item">
                                            Use SCSS and PUG.
                                        </li>
                                        <li class="service__modal-item">
                                            Use Vue JS.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-6 col-lg-4">
                        <div class="service services__card">
                            <h3 class="service__title">Product <br> Design</h3>
                            <span class="service__btn">
                                See more <i class='bx bx-right-arrow-alt service__arrow'></i>
                            </span>
                            <div class="service__modal">
                                <div class="service__modal-content">
                                    <i class='bx bx-x service__modal-close'></i>
                                    <h3 class="service__modal-title">Product Design</h3>
                                    <p class="service__modal-description">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
                                        tenetur consequuntur mollitia perspiciatis neque
                                        provident officiis. Dicta!
                                    </p>
                                    <ul class="service__modal-list">
                                        <li class="service__modal-item">
                                            Lorem ipsum dolor sit amet consectetur
                                            adipisicing.
                                        </li>
                                        <li class="service__modal-item">
                                            Lorem ipsum sit amet consectetur
                                            adipisicing.
                                        </li>
                                        <li class="service__modal-item">
                                            Lorem ipsum dolor amet consectetur
                                            adipisicing.
                                        </li>
                                        <li class="service__modal-item">
                                            Lorem ipsum dolor sit consectetur
                                            adipisicing.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-6 col-lg-4">
                        <div class="service services__card">
                            <h3 class="service__title">Lorem <br> ipsum</h3>
                            <span class="service__btn">
                                See more <i class='bx bx-right-arrow-alt service__arrow'></i>
                            </span>
                            <div class="service__modal">
                                <div class="service__modal-content">
                                    <i class='bx bx-x service__modal-close'></i>
                                    <h3 class="service__modal-title">Product Design</h3>
                                    <p class="service__modal-description">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
                                        tenetur consequuntur mollitia perspiciatis neque
                                        provident officiis. Dicta!
                                    </p>
                                    <ul class="service__modal-list">
                                        <li class="service__modal-item">
                                            Lorem ipsum dolor sit amet consectetur
                                            adipisicing.
                                        </li>
                                        <li class="service__modal-item">
                                            Lorem ipsum sit amet consectetur
                                            adipisicing.
                                        </li>
                                        <li class="service__modal-item">
                                            Lorem ipsum dolor amet consectetur
                                            adipisicing.
                                        </li>
                                        <li class="service__modal-item">
                                            Lorem ipsum dolor sit consectetur
                                            adipisicing.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> -->
    <!--=============== Work =================-->
    <section class="work section" id="work">
      <span class="subtitle">My Portfolio</span>
      <h2 class="title">Recent Works</h2>
      <div class="container work-mob__conatiner">
        <ul class="work__filter">
          <li class="work__item active-work" data-filter="all">All</li>
          <li class="work__item" data-filter=".web">Web</li>
          <li class="work__item" data-filter=".design">Design</li>
        </ul>
        <div class="row work__wrapper">
          <div class="col-xs-12 col-md-6 col-lg-4 mix web">
            <div class="work-card work-left">
              <div class="work-card__img-wrapper">
                <img src="@/assets/images/qoob.jpg" alt="work" class="work-card__img">
              </div>
              <h3 class="work-card__title">Qoob design website</h3>
              <a href="https://qoobdesign.com.ua/" target="_blank" class="work-card__btn">Demo <i
                  class='bx bx-right-arrow-alt work-card__icon'></i></a>
            </div>
          </div>
          <div class="col-xs-12 col-md-6 col-lg-4 mix web">
            <div class="work-card work-center">
              <div class="work-card__img-wrapper">
                <img src="@/assets/images/melora.jpg" alt="work" class="work-card__img">
              </div>
              <h3 class="work-card__title">examination 2 JS (posts)</h3>
              <a href="https://teddi90.github.io/2-front-end//students/oleg_slobodyan/module-js-exam/build/"
                 target="_blank" class="work-card__btn">Demo <i
                  class='bx bx-right-arrow-alt work-card__icon'></i></a>
            </div>
          </div>
          <div class="col-xs-12 col-md-6 col-lg-4 mix design">
            <div class="work-card work-right">
              <div class="work-card__img-wrapper">
                <img src="@/assets/images/qoob2.jpg" alt="work" class="work-card__img">
              </div>
              <h3 class="work-card__title">Design for Qoob studio</h3>
              <a href="https://qoobdesign.com.ua/" target="_blank" class="work-card__btn">Demo <i
                  class='bx bx-right-arrow-alt work-card__icon'></i></a>
            </div>
          </div>
          <div class="col-xs-12 col-md-6 col-lg-4 mix web">
            <div class="work-card work-left">
              <div class="work-card__img-wrapper">
                <img src="@/assets/images/bird.jpg" alt="work" class="work-card__img">
              </div>
              <h3 class="work-card__title">Bird web site</h3>
              <a href="https://teddi90.github.io/bird/" target="_blank" class="work-card__btn">Demo <i
                  class='bx bx-right-arrow-alt work-card__icon'></i></a>
            </div>
          </div>
          <div class="col-xs-12 col-md-6 col-lg-4 mix web">
            <div class="work-card work-center">
              <div class="work-card__img-wrapper">
                <img src="@/assets/images/divorce.jpg" alt="work" class="work-card__img">
              </div>
              <h3 class="work-card__title">Website for lawyer</h3>
              <a href="https://teddi90.github.io/divorce.github.io/" target="_blank"
                 class="work-card__btn">Demo <i class='bx bx-right-arrow-alt work-card__icon'></i></a>
            </div>
          </div>
          <div class="col-xs-12 col-md-6 col-lg-4 mix web">
            <div class="work-card work-right">
              <div class="work-card__img-wrapper">
                <img src="@/assets/images/shoes.jpg" alt="work" class="work-card__img">
              </div>
              <h3 class="work-card__title">Fooseshoes template</h3>
              <a href="https://teddi90.github.io/fooseeshoes/" target="_blank" class="work-card__btn">Demo
                <i class='bx bx-right-arrow-alt work-card__icon'></i></a>
            </div>
          </div>
          <div class="col-xs-12 col-md-6 col-lg-4 mix web">
            <div class="work-card work-left">
              <div class="work-card__img-wrapper">
                <img src="@/assets/images/solis.jpg" alt="work" class="work-card__img">
              </div>
              <h3 class="work-card__title">examination 1 pure HTML/CSS</h3>
              <a href="https://teddi90.github.io/2-front-end/students/oleg_slobodyan/exam_module_1/build/"
                 target="_blank" class="work-card__btn">Demo <i
                  class='bx bx-right-arrow-alt work-card__icon'></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- =============== Testimonial =================
    <section class="testimonial section">
        <span class="subtitle">My clients say</span>
        <h2 class="title">Testimonial</h2>
        <div class="container">
            <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                    <div class="testimonial__card swiper-slide">
                        <img src="@/assets/images/test1.png" alt="" class="testimonial__img">
                        <h3 class="testimonial__name">Lorem Ipsum</h3>
                        <p class="testimonial__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Veniam provident, vel soluta temporibus modi molestias.</p>
                    </div>
                    <div class="testimonial__card swiper-slide">
                        <img src="@/assets/images/test2.jpg" alt="" class="testimonial__img">
                        <h3 class=" testimonial__name">Misha Kucherenko</h3>
                        <p class="testimonial__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Veniam provident, vel soluta temporibus modi molestias.</p>
                    </div>
                    <div class="testimonial__card swiper-slide">
                        <img src="@/assets/images/test3.jpg" alt="" class="testimonial__img">
                        <h3 class=" testimonial__name">Jone Quick</h3>
                        <p class="testimonial__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Veniam provident, vel soluta temporibus modi molestias.</p>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </section> -->

    <!--=============== Contact =================-->
    <section class="contact section" id="contact">
      <span class="subtitle">Get in touch</span>
      <h2 class="title">Conatct Me</h2>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-lg-6">
            <div class="contact__content">
              <h3 class="contact__title">Talk to me</h3>
              <div class="contact__info">
                <div class="contact__card">
                  <i class='bx bx-mail-send contact__card-icon'></i>
                  <h3 class="contact__card-title">Email</h3>
                  <span class="contact__card-data">slobodyanoleg5@gmail.com</span>
                  <a href="mailto:slobodyanoleg5@gmail.com" target="_blank" class="contact__card-btn">
                    Write me <i class='bx bx-right-arrow-alt contact__btn-icon'></i>
                  </a>
                </div>
                <div class="contact__card">
                  <i class='bx bxl-messenger contact__card-icon'></i>
                  <h3 class="contact__card-title">Messenger</h3>
                  <span class="contact__card-data">oleg510bodyan</span>
                  <a href="http://m.me/oleg510bodyan" target="_blank" class="contact__card-btn">
                    Write me <i class='bx bx-right-arrow-alt contact__btn-icon'></i>
                  </a>
                </div>
                <div class="contact__card">
                  <i class='bx bxl-telegram contact__card-icon'></i>
                  <h3 class="contact__card-title">Telegram</h3>
                  <span class="contact__card-data">@teddi90</span>
                  <a href="http://t.me/teddi90" target="_blank" class="contact__card-btn">
                    Write me <i class='bx bx-right-arrow-alt contact__btn-icon'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-lg-6">
            <div class="contact__content">
              <h3 class="contact__title">Write me your project</h3>
              <form action="https://formspree.io/f/xqknyzpo" method="POST" class="contact__form">
                <div class="contact__form-div">
                  <label for="name" class="contact__form-tag">Name</label>
                  <input type="text" name="name" placeholder="Your name" class="contact__form-input"
                         required>
                </div>
                <div class="contact__form-div">
                  <label for="email" class="contact__form-tag">Mail</label>
                  <input type="email" name="email" placeholder="Your email"
                         class="contact__form-input" required>
                </div>
                <div class="contact__form-div contact__form-area">
                  <label class="contact__form-tag">Project</label>
                  <textarea class="contact__form-input" placeholder="Write about your project"
                            required></textarea>
                </div>
                <button type="submit" class="btn">Send message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <!--=============== Footer =================-->
  <footer class="footer">
    <div class="container">
      <h2 class="title">&lt;&#8260;Oleg&gt;</h2>
      <ul class="footer__list">
        <li>
          <a href="#about" class="footer__link">About</a>
        </li>
        <li>
          <a href="#work" class="footer__link">Project</a>
        </li>
        <li>
          <a href="#skills" class="footer__link">Skills</a>
        </li>
      </ul>
      <ul class="footer__social">
        <li>
          <a href="https://www.facebook.com/oleg510bodyan" target="_blank" class="footer__social-link">
            <i class='bx bxl-facebook'></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/olegs10bodyan/" target="_blank" class="footer__social-link">
            <i class='bx bxl-instagram'></i>
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/olegsloboydan" class="footer__social-link" target="_blank">
            <i class='bx bxl-linkedin-square'></i>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

