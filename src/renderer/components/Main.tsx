import axios from "axios";
import { BrowserWindow, remote } from "electron";
import * as path from "path";
import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { AnimeDetails } from "./AnimeDetails";
import { Home } from "./Home";

export class Main extends React.Component<any, any> {
  public render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/anime/:id" component={AnimeDetails}/>
        </Switch>
      </main>
    );
  }
}
