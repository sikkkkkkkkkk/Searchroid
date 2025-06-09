chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === 'toggle-sidebar') {
    toggleSidebar();
  }
});

function toggleSidebar() {
  const existing = document.getElementById('sample-sidebar-wrapper');
  if (existing) {
    existing.remove();
    return;
  }

  const wrapper = document.createElement('div');
  wrapper.id = 'sample-sidebar-wrapper';
  Object.assign(wrapper.style, {
    position: 'fixed',
    top: 0,
    right: 0,
    height: '100%',
    width: '300px',
    zIndex: 999999,
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
    backgroundColor: '#fff'
  });

  const iframe = document.createElement('iframe');
  iframe.src = chrome.runtime.getURL('sidebar.html');
  Object.assign(iframe.style, {
    border: 'none',
    height: '100%',
    width: '100%'
  });

  wrapper.appendChild(iframe);
  document.body.appendChild(wrapper);
}