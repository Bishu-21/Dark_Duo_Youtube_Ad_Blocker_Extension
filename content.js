// Block YouTube Ads
function blockAds() {
  const adSelectors = [
      '.video-ads', // General YouTube video ads
      '.ytp-ad-module', // Skippable and non-skippable video ads
      '.ytp-ad-player-overlay', // Overlay ads
      '#player-ads', // Additional ad container
  ];

  adSelectors.forEach(selector => {
      const ads = document.querySelectorAll(selector);
      ads.forEach(ad => {
          ad.style.display = 'none'; // Hide or remove ad elements
      });
  });
}

// Observer for dynamic ads
const observer = new MutationObserver(blockAds);

// Start observing changes in the DOM to catch ads that load after page load
observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Block ads on initial page load
window.addEventListener('load', blockAds);

// Dark Mode Toggle - Checks for user preference
chrome.storage.sync.get('darkMode', function(data) {
  if (data.darkMode) {
      document.body.classList.add('dark-mode');
  }
});

// Listen for messages from the popup (dark mode toggle)
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.toggleDarkMode) {
      const isDarkMode = request.toggleDarkMode;
      if (isDarkMode) {
          document.body.classList.add('dark-mode');
      } else {
          document.body.classList.remove('dark-mode');
      }
      // Save the user preference in storage
      chrome.storage.sync.set({ darkMode: isDarkMode });
  }
});

// Add dark mode styling via CSS
const darkModeStyle = document.createElement('style');
darkModeStyle.innerHTML = `
  .dark-mode {
      background-color: #121212 !important;
      color: #ffffff !important;
  }
`;
document.head.appendChild(darkModeStyle);
