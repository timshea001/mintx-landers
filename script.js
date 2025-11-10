// Mint-X Navigation and Amazon Attribution
(function(){
  // UTM capture
  const params = new URLSearchParams(window.location.search);
  if (Array.from(params.keys()).length){ 
    localStorage.setItem('utm', params.toString()); 
  }
  
  // TODO: Replace with your actual Mint-X Amazon ASIN
  const AMAZON_BASE = 'https://www.amazon.com/dp/REPLACE_ME'; // set ASIN
  const AMAZON_ATTR = 'tag=amznattr-XXXX&asc_source=meta&asc_refurl='+encodeURIComponent(document.referrer||location.origin);
  
  function buildAmazonUrl(){
    const utm = localStorage.getItem('utm');
    let url = AMAZON_BASE + '?' + AMAZON_ATTR; 
    if (utm) url += '&' + utm; 
    return url;
  }
  
  // Mobile navigation toggle
  function initMobileNav() {
    const hamburger = document.getElementById('hamburger-button');
    const navmenu = document.getElementById('bs-example-navbar-collapse-1');
    
    if (hamburger && navmenu) {
      hamburger.addEventListener('click', function() {
        navmenu.classList.toggle('in');
      });
    }
  }
  
  // Mobile dropdown toggle
  function initMobileDropdown() {
    const dropdownBtn = document.getElementById('nav-arrow');
    const dropdown = document.getElementById('myDropdown');
    
    if (dropdownBtn && dropdown) {
      dropdownBtn.addEventListener('click', function() {
        dropdown.classList.toggle('show');
      });
    }
  }
  
  // Wire up all Buy Now buttons
  function wireBuyButtons() {
    ['buy-header', 'buy-header-desktop', 'buy-hero', 'buy-final'].forEach(id => {
      const el = document.getElementById(id); 
      if(!el) return;
      el.addEventListener('click', e => { 
        e.preventDefault(); 
        const href = buildAmazonUrl(); 
        setTimeout(() => location.href = href, 160); 
      });
    });
  }
  
  // Initialize everything when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initMobileNav();
      initMobileDropdown();
      wireBuyButtons();
    });
  } else {
    initMobileNav();
    initMobileDropdown();
    wireBuyButtons();
  }
})();
