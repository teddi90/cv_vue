<script setup>

</script>

<template>
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
</template>