function showPreloaderAndRedirect() {
  const preloader = document.getElementById('preloader');
  preloader.style.display = 'block';
  setTimeout(() => {
      window.location.href = '/halaman_1_utama/halaman_utama.html';
  }, 3000);
}

function toindex() {
  const preloader = document.getElementById('preloader');
  preloader.style.display = 'block';
  setTimeout(() => {
      window.location.href = '/index/index.html';
  }, 3000);
}


function showindex() {
  setTimeout(() => {
      window.location.href = '/index/index.html';
  },1000);
}

function html_page() {
  setTimeout(() => {
      window.location.href = '/HTML/html.html';
  },1000);
}

function css_page() {
  setTimeout(() => {
      window.location.href = '/CESES/css.html';
  }, 1000);
}

function java_page() {
  setTimeout(() => {
      window.location.href = '/JAVASCRIPT/java.html';
  }, 1000);
}

function front_page() {
  setTimeout(() => {
      window.location.href = '/halaman_1_utama/halaman_utama.html';
  }, 1000);
}
