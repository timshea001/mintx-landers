// Simple UTM + Amazon Attribution linker
(function(){
  const params = new URLSearchParams(window.location.search);
  if (Array.from(params.keys()).length){
    localStorage.setItem('utm', params.toString());
  }

  // TODO: Replace with your actual DP URL
  const AMAZON_BASE = 'https://www.amazon.com/dp/REPLACE_ME';
  // Replace with your Amazon Attribution tag and source mapping as needed
  const AMAZON_ATTR = 'tag=amznattr-XXXX&asc_source=meta&asc_refurl='+encodeURIComponent(document.referrer||location.origin);

  function buildAmazonUrl(){
    const utm = localStorage.getItem('utm');
    let url = AMAZON_BASE + '?' + AMAZON_ATTR;
    if (utm) url += '&' + utm;
    return url;
  }

  function wire(id){
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('click', function(e){
      const href = buildAmazonUrl();
      e.preventDefault();
      setTimeout(()=>{ window.location.href = href; }, 160);
    });
  }

  ['buy-header','buy-hero','buy-final'].forEach(wire);
})();
