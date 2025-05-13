
const { app, BrowserWindow } = require("electron");
const path = require("path");
const { spawn } = require("child_process");

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadURL("http://localhost:3000");
}

app.whenReady().then(() => {
  // Launch FastAPI backend
  spawn("uvicorn", ["app.main:app", "--host", "127.0.0.1", "--port", "8000"], {
    cwd: path.join(__dirname, "../backend"),
    shell: true,
  });

  // Launch React dev server
  spawn("npm", ["start"], {
    cwd: path.join(__dirname, "../frontend"),
    shell: true,
  });

  createWindow();
});
