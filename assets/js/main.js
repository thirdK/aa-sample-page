const prog = document.getElementById('prog');
const mcta = document.getElementById('mcta');
window.addEventListener('scroll', () => {
  const t = document.documentElement;
  prog.style.width = (t.scrollTop / (t.scrollHeight - t.clientHeight) * 100) + '%';
  mcta.style.transform = window.scrollY > 300 ? 'translateY(0)' : 'translateY(100%)';
}, { passive: true });

(()=>{
  const end = Date.now() + (3 * 86400 + 11 * 3600) * 1000;
  const el  = document.getElementById('side-timer');
  if (!el) return;
  setInterval(() => {
    const d = end - Date.now();
    if (d < 0) { el.textContent = '마감'; return; }
    const days = Math.floor(d / 86400000);
    const h = String(Math.floor((d % 86400000) / 3600000)).padStart(2, '0');
    const m = String(Math.floor((d % 3600000)  / 60000)).padStart(2, '0');
    const s = String(Math.floor((d % 60000)    / 1000)).padStart(2, '0');
    el.textContent = days > 0 ? `${days}일 ${h}:${m}:${s}` : `${h}:${m}:${s}`;
  }, 1000);
})();

const cio = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting || !e.target.dataset.target) return;
    const target = parseInt(e.target.dataset.target), start = Date.now(), dur = 1400;
    const tick = () => {
      const p = Math.min((Date.now() - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      e.target.textContent = Math.floor(ease * target).toLocaleString();
      if (p < 1) requestAnimationFrame(tick);
      else e.target.textContent = target.toLocaleString();
    };
    requestAnimationFrame(tick);
    cio.unobserve(e.target);
  });
}, { threshold: .5 });
document.querySelectorAll('[data-target]').forEach(el => cio.observe(el));

const fio = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); fio.unobserve(e.target); } });
}, { threshold: .06 });
document.querySelectorAll('.fu').forEach(el => fio.observe(el));

const vc = document.getElementById('viewer-cnt');
if (vc) setInterval(() => { vc.textContent = Math.floor(Math.random() * 12) + 30; }, 7000);

document.querySelectorAll('.curr-item').forEach(details => {
  const body = details.querySelector('.curr-body');
  if (!body) return;
  details.addEventListener('click', e => {
    if (!e.target.closest('summary')) return;
    e.preventDefault();
    if (details.open) {
      body.style.height = body.scrollHeight + 'px';
      requestAnimationFrame(() => requestAnimationFrame(() => {
        body.style.height = '0';
        body.style.paddingTop = '0';
        body.style.paddingBottom = '0';
      }));
      body.addEventListener('transitionend', () => {
        details.removeAttribute('open');
        body.style.height = body.style.paddingTop = body.style.paddingBottom = '';
      }, { once: true });
    } else {
      details.setAttribute('open', '');
      const h = body.scrollHeight;
      body.style.height = '0';
      body.style.paddingTop = '0';
      body.style.paddingBottom = '0';
      requestAnimationFrame(() => requestAnimationFrame(() => {
        body.style.height = h + 'px';
        body.style.paddingTop = body.style.paddingBottom = '';
      }));
      body.addEventListener('transitionend', () => { body.style.height = ''; }, { once: true });
    }
  });
});
