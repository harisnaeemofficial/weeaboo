import { app, BrowserWindow } from "electron";
import * as path from "path";
import * as url from "url";
import createApp from "./server";

let win: BrowserWindow;
const createWindow = () => {
  win = new BrowserWindow({width: 1200, height: 800});
  win.loadURL(url.format({
    pathname: path.join(app.getAppPath(), "/static/index.html"),
    protocol: "file:",
    slashes: true,
  }));

  win.webContents.openDevTools();

  win.on("closed", () => {
    win = null;
  });

  createApp(app);
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
