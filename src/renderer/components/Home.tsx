import axios from "axios";
import { BrowserWindow, remote } from "electron";
import * as path from "path";
import * as React from "react";
import { Route, Switch, Link } from "react-router-dom";
import * as url from "url";
import { AnimePoster } from "./AnimePoster";
import { SearchBar } from "./SearchBar";

export class Home extends React.Component<any, any> {
  private window: BrowserWindow;

  public constructor() {
    super({});
    this.state = { objects: [] };
  }

  public render() {
    return (
      <div className="cont">
        <SearchBar onChange={this.search.bind(this)}/>
        {
          this.state.objects.map((object: any) => {
            return (
              <Link to={"/anime/" + object.id}>
                <AnimePoster
                  title={object.title_romaji}
                  image={object.image_url_lge}
                />
              </Link>
            );
          })
        }
      </div>
    );
  }

  private search(e: React.ChangeEvent<HTMLInputElement>) {
    axios.get("http://localhost:8080/search?title=" + e.target.value).then((res: any) => {
      this.setState({objects: res.data});
    });
  }
}
