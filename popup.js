document.addEventListener('DOMContentLoaded', () => {
    const limitInput = document.getElementById('limit');
    const setLimitButton = document.getElementById('setLimit');
    const resetDataButton = document.getElementById('resetData');
    const closePopupButton = document.getElementById('closePopup');
    const usageChart = document.getElementById('usageChart').getContext('2d');
    const dataConsumedText = document.getElementById('dataConsumed');
    let chart;
  
    function updateChart(dataUsage) {
      const labels = Object.keys(dataUsage);
      const data = Object.values(dataUsage).map(usage => usage / 1048576); // Convert bytes to MB
      const totalUsage = data.reduce((a, b) => a + b, 0);
  
      dataConsumedText.textContent = totalUsage.toFixed(2) + " MB"; // Update the text with consumed data
  
      if (chart) {
        chart.destroy(); // Destroy the previous chart instance to prevent duplication
      }
  
      chart = new Chart(usageChart, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Data Usage (MB)',
            data: data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          indexAxis: 'y',
          scales: {
            x: {
              beginAtZero: true
            }
          }
        }
      });
    }
  
    function refreshData() {
      chrome.storage.local.get('dataUsage', (result) => {
        const dataUsage = result.dataUsage || {};
        updateChart(dataUsage);
      });
    }
  
    // Refresh data periodically
    setInterval(refreshData, 1000);
  
    // Set a new data limit when the button is clicked
    setLimitButton.addEventListener('click', () => {
      const limit = parseInt(limitInput.value, 10) * 1048576; // Convert MB to bytes
      if (!isNaN(limit)) {
        chrome.storage.local.set({ limit }, () => {
          alert('Data limit set successfully!');
        });
      } else {
        alert('Please enter a valid number.');
      }
    });
  
    // Reset all data when the reset button is clicked
    resetDataButton.addEventListener('click', () => {
      chrome.storage.local.clear(() => {
        alert('All data has been reset!');
        location.reload(); // Reload the popup to refresh the displayed data
      });
    });
  
    // Close the popup when the close button is clicked
    closePopupButton.addEventListener('click', () => {
      window.close();
    });
  });
  