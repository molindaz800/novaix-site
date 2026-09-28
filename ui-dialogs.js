/* Shared lifecycle for the existing class-driven homepage and landing dialogs.
   Content/consent/loaders remain owned by each page; no external requests here. */
(() => {
  const selector = '.calendly-modal, .modal';
  const focusable = 'button, [href], input, select, textarea, iframe, [tabindex]:not([tabindex="-1"])';
  const states = new Map();
  const controls = dialog => [...dialog.querySelectorAll(focusable)]
    .filter(el => !el.disabled && !el.closest('[inert], [hidden]') && el.getClientRects().length);
  const focusFirst = dialog => (controls(dialog)[0] || dialog).focus();
  let previousFocus = document.activeElement;
  document.addEventListener('focusin', event => {
    const open = [...states].find(([, state]) => state.open)?.[0];
    if (open && !open.contains(event.target)) { focusFirst(open); return; }
    if (!event.target.closest(selector)) previousFocus = event.target;
  });
  document.querySelectorAll(selector).forEach(dialog => {
    const state = { open: false, opener: null };
    states.set(dialog, state);
    dialog.tabIndex = -1;
    const sync = () => {
      const open = dialog.classList.contains('open');
      if (open && !state.open) {
        state.opener = previousFocus;
        state.open = true;
        dialog.inert = false;
        dialog.setAttribute('aria-hidden', 'false');
        focusFirst(dialog);
      } else if (!open) {
        const wasOpen = state.open;
        state.open = false;
        if (wasOpen && state.opener?.isConnected) state.opener.focus();
        dialog.inert = true;
        dialog.setAttribute('aria-hidden', 'true');
      }
    };
    new MutationObserver(sync).observe(dialog, { attributes: true, attributeFilter: ['class'] });
    dialog.addEventListener('keydown', event => {
      if (!state.open || event.key !== 'Tab') return;
      const items = controls(dialog);
      const first = items[0] || dialog;
      const last = items[items.length - 1] || dialog;
      if (event.shiftKey && (document.activeElement === first || document.activeElement === dialog)) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first.focus();
      }
    });
    sync();
  });
})();
