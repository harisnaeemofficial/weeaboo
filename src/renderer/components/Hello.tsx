import { BrowserWindow, remote } from "electron";
import * as path from "path";
import * as React from "react";
import * as url from "url";
import { Clock } from "./Clock";

export interface IHelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<IHelloProps, {}> {

  private window: BrowserWindow;

  public render() {
    return (
      <div>
        <Clock />
        <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
        <button onClick={() => this.clicked()}>Open new window</button>
      </div>
    );
  }

  private clicked() {
    this.window = new remote.BrowserWindow({width: 800, height: 600});
    this.window.loadURL(url.format({
      pathname: path.join(remote.app.getAppPath(), "/static/index.html"),
      protocol: "file:",
      slashes: true,
    }));
    this.window.webContents.openDevTools();
    this.window.on("closed", () => {
      this.window = null;
    });
  }
}
