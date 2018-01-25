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
      <div className="cont">
        <div className="ui menu">
          <div className="ui category search item">
            <div className="ui transparent icon input">
              <input className="prompt" type="search" placeholder="Search..."
              name="anime" onChange={(e) => this.search(e)}/>
              <i className="search link icon"></i>
            </div>
          </div>
        </div>
        <div>
        {
          this.state.objects.map((object: any) => {
            return <div className="wrapper">
              <a href="#"><div className="anime_cover"
              style={{ backgroundImage : "url(" + object.image_url_lge + ")" }}/>
              <div className="description">
                <p className="description_content">{object.title_romaji}</p>
              </div>
            </a></div>;
          })
        }
        </div>
      </div>
    );
  }

  private search(e: React.ChangeEvent<HTMLInputElement>) {
    axios.get("http://localhost:8080/test?search=" + e.target.value).then((res: any) => {
      console.log(res.data);
      this.setState({objects: res.data});
    });

  }
}
