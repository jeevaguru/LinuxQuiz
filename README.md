
# Linux Quiz App

A modern, interactive Linux quiz web application built with React and Material UI.

## Features
- Large pool of randomized questions per topic
- Modern, vibrant UI
- Scorecard with pie chart
- Works on Windows and Linux

---

## Prerequisites
- [Node.js](https://nodejs.org/) (v16 or newer recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

---

## Installation & Running (Windows & Linux)

### 1. Download the App
- Download or clone the repository from GitHub:
	```
	git clone https://github.com/yourusername/LinuxQuiz.git
	cd LinuxQuiz
	```
	Or download the ZIP and extract it, then open a terminal in the extracted folder.

### 2. Install Dependencies
- In the project folder, run:
	```
	npm install
	```

### 3. Build the App
- This compiles the app for production:
	```
	npm run build
	```

### 4. Serve the App Locally
- Use the `serve` package to run a local web server:
	```
	npx serve dist
	```
- The terminal will show a local address, usually:
	```
	http://localhost:3000
	```
- Open this address in your web browser.

---

## Notes
- No internet connection is required after the initial install/build steps.
- The app runs entirely in your browser, locally.
- If you see a firewall prompt, allow access for local connections.
- To stop the app, press `Ctrl+C` in the terminal.

---


## Troubleshooting
- If you see errors about missing Node.js or npm, install them from [nodejs.org](https://nodejs.org/).
- If `npx serve dist` fails, install serve globally:
	```
	npm install -g serve
	serve dist
	```
- **Linux only:** If you see a `Permission denied` error when running `npm run build`, you may need to grant execute permission to scripts in `node_modules/.bin/`:
	```
	chmod +x node_modules/.bin/*
	```
- For any other issues, delete the `node_modules` folder and `package-lock.json`, then run `npm install` again.

---

## License
MIT

---

## Credits
- Built with [React](https://react.dev/) and [Material UI](https://mui.com/)
- Quiz content by Linux Quiz contributors
