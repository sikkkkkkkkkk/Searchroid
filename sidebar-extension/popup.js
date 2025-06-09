document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('open-sidebar');
  document.title = chrome.i18n.getMessage('extName');
  openBtn.textContent = chrome.i18n.getMessage('openSidebar');
  openBtn.addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      if (tabs[0]?.id) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'toggle-sidebar' });
      }
    });
  });
});