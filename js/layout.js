// Shared nav and footer injected into every page
(function () {
  const path = window.location.pathname;
  const isRoot = path.endsWith('index.html') || path.endsWith('/') || path === '';

  function active(href) {
    return path.includes(href) ? 'style="opacity:0.45;pointer-events:none;"' : '';
  }

  const navHTML = `
  <nav id="site-nav" data-dark="${isRoot ? 'true' : 'false'}">
    <div class="nav-inner">
      <a class="nav-logo" href="${isRoot ? 'index.html' : '../index.html'}">
    
        J&R Design
      </a>
      <ul class="nav-links">
        <li><a href="${isRoot ? 'pages/' : ''}about.html" ${active('about')}>About us</a></li>
        <li><a href="${isRoot ? 'pages/' : ''}contact.html" ${active('contact')}>Contact us</a></li>
      </ul>
    </div>
  </nav>`;

  //note :  J&R designの上  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4 18L12 6L20 18H4Z" fill="currentColor" opacity="0.5"/> <path d="M8 18L16 8L22 18H8Z" fill="currentColor"/></svg>

  const footerHTML = `
  <footer>
    <div class="container">
      <div class="footer-top">
        <div>
          <a class="nav-logo" href="${isRoot ? 'index.html' : '../index.html'}" style="text-decoration:none;display:inline-flex;align-items:center;gap:.5rem;font-family:var(--font-display);font-size:1.2rem;color:var(--text-dark);">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 18L12 6L20 18H4Z" fill="currentColor" opacity="0.5"/>
              <path d="M8 18L16 8L22 18H8Z" fill="currentColor"/>
            </svg>
            Decora
          </a>
          <p class="footer-address">Studio 2A, 17 Cavendish Crescent,<br>Marylebone, London W1G 8QL,<br>United Kingdom</p>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:1.5rem;">
          <div class="footer-socials">
            <a href="#" aria-label="X">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L2.013 2.25H8.08l4.261 5.631 5.903-5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2" fill="currentColor"/></svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
          </div>
          <ul class="footer-nav">
            <li><a href="${isRoot ? 'pages/' : ''}portfolio.html">Portfolio</a></li>
            <li><a href="${isRoot ? 'pages/' : ''}shop.html">Shop</a></li>
            <li><a href="${isRoot ? 'pages/' : ''}about.html">About us</a></li>
            <li><a href="${isRoot ? 'pages/' : ''}contact.html">Contact us</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="footer-copy">©2025 Decora. All rights reserved.</p>
        <p class="footer-copy">Interior Design Studio</p>
      </div>
    </div>
  </footer>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);
})();
