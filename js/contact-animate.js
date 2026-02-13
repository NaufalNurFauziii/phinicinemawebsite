document.addEventListener('DOMContentLoaded', function() {
  // Cek apakah ada elemen dengan id contact (halaman contact)
  var contactSection = document.getElementById('contact');
  if (contactSection) {
    // Tambahkan class untuk trigger animasi
    var contactContent = document.querySelector('.contact-content');
    var contactForm = document.querySelector('.contact-form');
    if (contactContent) {
      contactContent.classList.add('contact-animate');
    }
    if (contactForm) {
      contactForm.classList.add('contact-animate');
    }
  }
});
