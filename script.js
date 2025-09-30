  
    // Dark mode toggle functionality
    document.addEventListener('DOMContentLoaded', function() {
      const darkModeToggle = document.querySelector('.navbar__darkmode-toggle');
      const body = document.body;

      // Function to update the toggle icon based on theme
      function updateToggleIcon(isDark) {
        const svgElement = darkModeToggle.querySelector('svg');
        if (isDark) {
          // Sun icon for dark mode
          svgElement.innerHTML = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
        } else {
          // Moon icon for light mode
          svgElement.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
        }
      }

      // Check for saved theme preference or default to light mode
      const currentTheme = localStorage.getItem('theme') || 'light';
      if (currentTheme === 'dark') {
        body.classList.add('dark');
        darkModeToggle.setAttribute('aria-pressed', 'true');
        updateToggleIcon(true);
      } else {
        updateToggleIcon(false);
      }

      // Toggle dark mode
      darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark');
        const isDark = body.classList.contains('dark');
        darkModeToggle.setAttribute('aria-pressed', isDark.toString());

        // Update the icon
        updateToggleIcon(isDark);

        // Save theme preference
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
      });
    });

    // Menunggu seluruh konten halaman HTML dimuat sebelum menjalankan skrip
document.addEventListener('DOMContentLoaded', function () {

  // Ambil semua elemen pertanyaan FAQ
  const faqQuestions = document.querySelectorAll('.faq-question');

  // Loop (ulangi) untuk setiap elemen pertanyaan yang ditemukan
  faqQuestions.forEach(button => {
    // Tambahkan "pendengar" untuk event 'click' pada setiap tombol
    button.addEventListener('click', () => {
      // Cari elemen jawaban (.faq-answer) yang berada tepat setelah tombol ini
      const answer = button.nextElementSibling;
      
      // Cari ikon panah di dalam tombol
      const icon = button.querySelector('svg');

      // Toggle (nyalakan/matikan) class 'hidden' pada elemen jawaban
      // Jika class 'hidden' ada, maka akan dihapus (jawaban muncul)
      // Jika tidak ada, maka akan ditambahkan (jawaban tersembunyi)
      answer.classList.toggle('hidden');

      // Toggle class untuk memutar ikon panah sebagai feedback visual
      icon.classList.toggle('rotate-180');
    });
  });

});

// Menunggu seluruh konten halaman HTML dimuat
document.addEventListener('DOMContentLoaded', function () {

  // Ambil elemen tombol hamburger dan menu navigasi
  const navbarToggle = document.querySelector('.navbar__toggle');
  const navbarMenu = document.querySelector('.navbar__menu');

  // Cek apakah kedua elemen ditemukan
  if (navbarToggle && navbarMenu) {
    // Tambahkan event listener 'click' pada tombol hamburger
    navbarToggle.addEventListener('click', function () {
      // Toggle (tampilkan/sembunyikan) class 'hidden' pada menu navigasi
      navbarMenu.classList.toggle('hidden');
    });
  }
});
