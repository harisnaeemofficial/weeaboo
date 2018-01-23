import axios from "axios";
import { BrowserWindow, remote } from "electron";
import * as path from "path";
import * as React from "react";
import * as url from "url";

export class Hello extends React.Component<any, any> {
  private window: BrowserWindow;
  public constructor() {
    super({});
    this.state = { objects: [] };
  }
  public render() {
    return (
      <div>
        <input type="search" name="anime" onChange={(e) => this.search(e)}/>
        <ul>
        {
          this.state.objects.map((object: any) => {
            return <li>{object.title_romaji}</li>;
          })
        }
        </ul>
      </div>
    );
  }

  private search(e: React.ChangeEvent<HTMLInputElement>) {
    axios.get("http://localhost:8080/test?search=" + e.target.value).then((res: any) => {
      this.setState({objects: res.data});
    });

  }
}
