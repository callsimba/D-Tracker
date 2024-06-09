// Initialize an object to store data usage per domain
let dataUsage = {};

// Function to update data usage
function updateDataUsage(details) {
  // Parse the URL to get the domain
  const url = new URL(details.url);
  const domain = url.hostname;

  // Find the 'content-length' header to get the size of the response
  const dataLength = details.responseHeaders.find(header => header.name.toLowerCase() === 'content-length');

  // If 'content-length' header is found, update the data usage
  if (dataLength) {
    if (!dataUsage[domain]) {
      dataUsage[domain] = 0;
    }
    dataUsage[domain] += parseInt(dataLength.value, 10);

    // Save the updated data usage to local storage
    chrome.storage.local.set({ dataUsage });

    // Check if the total usage exceeds the set limit
    chrome.storage.local.get('limit', (result) => {
      const limit = result.limit || 0;
      const totalUsage = Object.values(dataUsage).reduce((a, b) => a + b, 0);
      if (totalUsage >= limit) {
        // Show a notification if the data usage limit is reached
        chrome.notifications.create({
          type: 'basic',
          iconUrl: 'icons/icon128.png',
          title: 'Data Usage Alert',
          message: 'You have reached your data usage limit!'
        });
      }
    });
  }
}

// Listen to web requests and calculate data usage
chrome.webRequest.onCompleted.addListener((details) => {
  updateDataUsage(details);
}, { urls: ["<all_urls>"] }, ["responseHeaders"]);

// Load existing data usage from local storage when the extension is loaded
chrome.runtime.onStartup.addListener(() => {
  chrome.storage.local.get('dataUsage', (result) => {
    dataUsage = result.dataUsage || {};
  });
});
