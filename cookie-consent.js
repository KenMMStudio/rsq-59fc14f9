(function () {
  try {
    if (localStorage.getItem('rsq_cookie_choice')) return;
  } catch (e) {}

  var isFr = (document.documentElement.lang || '').toLowerCase().indexOf('fr') === 0;
  var text = isFr
    ? 'Cette démo enregistre ton choix localement. Aucun tracking actif.'
    : 'This demo stores your choice locally. No tracking is active.';
  var declineLabel = isFr ? 'Refuser' : 'Decline';
  var acceptLabel = isFr ? 'Accepter' : 'Accept';
  var ariaLabel = isFr ? 'Préférences de confidentialité' : 'Privacy preferences';

  var style = document.createElement('style');
  style.textContent = '' +
    '.rsq-cookiebar{position:fixed;left:20px;bottom:20px;z-index:100;max-width:340px;padding:18px 20px;background:#231b1b;color:#fff5e5;border:2px solid #231b1b;box-shadow:4px 4px 0 rgba(0,0,0,.3);font:400 13px/1.5 Inter,sans-serif}' +
    '.rsq-cookiebar p{margin:0 0 16px}' +
    '.rsq-cookiebtns{display:flex;gap:10px;justify-content:flex-end}' +
    '.rsq-cookiebtns button{font:500 11px/1 JetBrains Mono,monospace;letter-spacing:.1em;text-transform:uppercase;padding:10px 16px;cursor:pointer}' +
    '.rsq-cookie-decline{background:transparent;color:#fff5e5;border:1px solid rgba(255,245,229,.5)}' +
    '.rsq-cookie-accept{background:#ff1493;color:#fff8fa;border:2px solid #231b1b;box-shadow:3px 3px 0 #111}' +
    '@media(max-width:480px){.rsq-cookiebar{left:12px;right:12px;bottom:12px;max-width:none}}';
  document.head.appendChild(style);

  var bar = document.createElement('div');
  bar.className = 'rsq-cookiebar';
  bar.setAttribute('role', 'dialog');
  bar.setAttribute('aria-label', ariaLabel);
  bar.innerHTML = '<p>' + text + '</p>' +
    '<div class="rsq-cookiebtns"><button class="rsq-cookie-decline" type="button">' + declineLabel + '</button>' +
    '<button class="rsq-cookie-accept" type="button">' + acceptLabel + '</button></div>';
  document.body.appendChild(bar);

  function choose(value) {
    try { localStorage.setItem('rsq_cookie_choice', value); } catch (e) {}
    bar.remove();
  }
  bar.querySelector('.rsq-cookie-accept').addEventListener('click', function () { choose('accepted'); });
  bar.querySelector('.rsq-cookie-decline').addEventListener('click', function () { choose('declined'); });
}());
