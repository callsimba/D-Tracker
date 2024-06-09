# Data Usage Monitor Extension

## Overview

The Data Usage Monitor extension is designed to track and display data usage across all browser tabs in real-time. This tool is especially useful for users who want to monitor their data consumption and set limits to avoid exceeding their data caps.

## Features

- **Real-time Tracking**: Monitor data usage across all open tabs in real-time.
- **Data Visualization**: Visualize data usage using a horizontal bar chart.
- **Data Consumption Display**: Display the total data consumed in text format.
- **Set Data Limit**: Set a data usage limit and receive notifications when the limit is reached.
- **Persistent Data**: Data usage persists even when the browser is refreshed.
- **Reset Data**: Option to reset all data usage.
- **Close Button**: Close the extension popup manually.

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/callsimba/data-tracker-extension.git
   cd data-tracker-extension
   ```

2. **Install Dependencies**
   Make sure you have Node.js and npm installed. Then, run:
   ```bash
   npm install
   ```

3. **Load the Extension in Chrome**
   - Open Chrome and go to `chrome://extensions/`.
   - Enable Developer Mode.
   - Click "Load unpacked" and select the `data-tracker-extension` directory.

## Usage

1. **Open the Extension**: Click on the extension icon in the browser toolbar to open the Data Usage Monitor popup.
2. **Set Data Limit**: Enter the desired data limit in megabytes (MB) and click the "Set Limit" button.
3. **View Data Usage**: Monitor real-time data usage across all tabs in the chart and text display.
4. **Reset Data**: Click the "Reset Data" button to clear all data usage records.
5. **Close Popup**: Click the "Close" button to manually close the popup.

## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Chart.js](https://www.chartjs.org/) - Used for data visualization.
