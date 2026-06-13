// ===== HAMBURGER MENU =====
const ham = document.getElementById('hamburger');
const mob = document.getElementById('mobile-menu');

ham.addEventListener('click', () => {
  const open = mob.style.display === 'flex';
  mob.style.display = open ? 'none' : 'flex';
});

function closeMobile() {
  mob.style.display = 'none';
}

// ===== BACK-TO-TOP BUTTON =====
const backTop = document.getElementById('back-top');

window.addEventListener('scroll', () => {
  backTop.classList.toggle('show', window.scrollY > 400);
});

// ===== FADE-IN SCROLL OBSERVER =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ===== CONTACT FORM =====
function handleSubmit(e) {
  e.preventDefault();
  const fname = document.getElementById('fname').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg   = document.getElementById('msg').value.trim();
  const out   = document.getElementById('form-msg');

  if (!fname || !email || !msg) {
    out.textContent = '⚠ Please fill in all required fields.';
    out.className = 'error';
    return;
  }

  const mailto = `mailto:marketing@twbis.info?subject=Enquiry from ${encodeURIComponent(fname)}&body=${encodeURIComponent('Name: ' + fname + '\nEmail: ' + email + '\n\n' + msg)}`;
  window.location.href = mailto;
  out.textContent = '✓ Your email client will open now. Thank you for reaching out!';
  out.className = 'success';
}

// ===== NEWSLETTER SUBSCRIBE =====
function handleSubscribe() {
  const e   = document.getElementById('sub-email').value.trim();
  const out = document.getElementById('sub-msg');

  if (!e || !e.includes('@')) {
    out.textContent = '⚠ Please enter a valid email address.';
    out.style.color = '#ff6b6b';
    return;
  }

  window.location.href = `mailto:marketing@twbis.info?subject=Newsletter Subscription&body=${encodeURIComponent('Please add ' + e + ' to your newsletter list.')}`;
  out.textContent = '✓ Thank you for subscribing!';
  out.style.color = 'var(--teal)';
  document.getElementById('sub-email').value = '';
}
