// ===============================
// Vikas Portfolio — Interactions
// ===============================

const root = document.documentElement;
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const typing = document.getElementById('typing');
const yearEl = document.getElementById('year');

// Mobile nav
navToggle?.addEventListener('click', () => {
  const open = navMenu.style.display === 'flex';
  navMenu.style.display = open ? 'none' : 'flex';
  navToggle.setAttribute('aria-expanded', String(!open));
});

// Smooth scroll
document.querySelectorAll('.nav-link').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const id = a.getAttribute('href');
    if (!id) return;
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (window.innerWidth < 680) navMenu.style.display = 'none';
  });
});

// Dark mode only (theme toggle removed)

// Typing roles
const roles = ['Aspiring Engineer', 'Web Developer', 'Data Analyst', 'Machine Learning', 'UI/UX & AI'];
let r = 0;
function typeLoop(){
  typing.textContent = roles[r];
  r = (r + 1) % roles.length;
}
setInterval(typeLoop, 2200);

// Year
yearEl.textContent = new Date().getFullYear();

// Animate skill bars on view
const barFills = document.querySelectorAll('.bar-fill');
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting){
      const level = e.target.getAttribute('data-level');
      e.target.style.setProperty('--level', level + '%');
      e.target.style.position = 'relative';
      // animate fill using ::after width
      e.target.style.setProperty('--w', level + '%');
      e.target.classList.add('animate');
      e.target.style.setProperty('--anim', level + '%');
      e.target.style.setProperty('--level', level + '%');
      e.target.style.setProperty('overflow','hidden');
      e.target.style.setProperty('--grad','linear-gradient(90deg, var(--accent), var(--accent-2))');
      e.target.style.setProperty('background','rgba(88,166,255,.15)');
      e.target.style.setProperty('transition','all 1.2s ease');
      e.target.style.setProperty('boxShadow','inset 0 0 20px rgba(88,166,255,.25)');
      e.target.style.setProperty('position','relative');
      // create inner fill
      const inner = document.createElement('div');
      inner.style.height = '100%';
      inner.style.width = '0';
      inner.style.background = 'linear-gradient(90deg, var(--accent), var(--accent-2))';
      inner.style.borderRadius = '999px';
      inner.style.transition = 'width 1.2s ease';
      e.target.appendChild(inner);
      requestAnimationFrame(()=> inner.style.width = level + '%');
      obs.unobserve(e.target);
    }
  });
},{threshold:0.4});
barFills.forEach(el => obs.observe(el));

// Count-up stats
document.querySelectorAll('.num').forEach(el => {
  const target = parseFloat(el.dataset.target);
  let start = 0;
  const isFloat = String(target).includes('.');
  const dur = 1200;
  const t0 = performance.now();
  function tick(t){
    const p = Math.min(1, (t - t0)/dur);
    const val = start + (target - start)*p;
    el.textContent = isFloat ? val.toFixed(2) : Math.floor(val);
    if (p < 1) requestAnimationFrame(tick);
  }
  const statObs = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting){ requestAnimationFrame(tick); statObs.unobserve(el);} });
  },{threshold:0.5});
  statObs.observe(el);
});

// Project filters
const filterBtns = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    projects.forEach(p => {
      const cats = p.dataset.cat.split(' ');
      const show = f === 'all' || cats.includes(f);
      p.style.display = show ? 'grid' : 'none';
      p.style.opacity = show ? '1' : '0';
      p.style.transform = show ? 'translateY(0)' : 'translateY(10px)';
    });
  });
});

// Particles background
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let w, h, parts;
function resize(){
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  parts = Array.from({length: Math.min(120, Math.floor(w*h/15000))}, () => ({
    x: Math.random()*w,
    y: Math.random()*h,
    vx: (Math.random()-0.5)*0.6,
    vy: (Math.random()-0.5)*0.6,
    r: Math.random()*1.8 + 0.6
  }));
}
function draw(){
  ctx.clearRect(0,0,w,h);
  for (let i=0;i<parts.length;i++){
    const p = parts[i];
    p.x += p.vx; p.y += p.vy;
    if (p.x<0||p.x>w) p.vx*=-1;
    if (p.y<0||p.y>h) p.vy*=-1;
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle = 'rgba(88,166,255,0.7)';
    ctx.fill();
    // links
    for (let j=i+1;j<parts.length;j++){
      const q = parts[j];
      const dx=p.x-q.x, dy=p.y-q.y, d=Math.hypot(dx,dy);
      if (d<120){
        ctx.strokeStyle = 'rgba(34,211,238,'+(1-d/120)*0.25+')';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(p.x,p.y);
        ctx.lineTo(q.x,q.y);
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(draw);
}
resize(); draw();
window.addEventListener('resize', resize);

// Cursor trail
const trail = document.getElementById('cursor-trail');
window.addEventListener('mousemove', e => {
  trail.style.top = e.clientY + 'px';
  trail.style.left = e.clientX + 'px';
});

// Contact Form with EmailJS
const form = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');

// Initialize EmailJS
emailjs.init('Kng2efR38vEPW0r7b');

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  statusEl.textContent = 'Sending...';

  emailjs.send('service_tj4zjqg', 'template_1xvsetv', {
    name: form.name.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value,
  })
  .then(() => {
    statusEl.textContent = '✔ Message sent successfully!';
    form.reset();
  })
  .catch((err) => {
    console.error(err);
    statusEl.textContent = '✖ Failed to send message. Try again.';
  });
});
