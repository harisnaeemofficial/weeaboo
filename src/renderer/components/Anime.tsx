import axios from "axios";
import { BrowserWindow, remote } from "electron";
import * as path from "path";
import * as React from "react";
import * as url from "url";

export class Anime extends React.Component<any, any> {
  private window: BrowserWindow;
  public constructor() {
    super({});
  }

  public render() {
      return (
        <div>
            <div className="anime_banner" style={{ backgroundImage :
                "url(https://cdn.anilist.co/img/dir/anime/banner/20832-NswCiSYMoI2k.jpg)" }}>
                <div className="anime_title">Overlord</div>
            </div>
            <div className="ui grid anime" style={{ marginTop: "2%" }}>
                <div className="ui four wide column anime_side">
                    <img src="https://cdn.anilist.co/img/dir/anime/reg/20832-NYbZ7GW33tyz.jpg"/>
                </div>
                <div className="ui twelve wide column episodes">
                    <a className="episode" href="#">
                        <div className="episode" id="episode_1" style={{ backgroundImage :
                        "url(http://img1.ak.crunchyroll.com/i/spire3-tmb/" +
                        "b88008a90c0b96c8c3769525bd59c6341515511412_full.jpg)" }}>
                            <div className="episode_name">
                                Episode 1 - The dawn of Despair
                            </div>
                        </div>
                    </a>

                    <a className="episode" href="#">
                        <div className="episode" id="episode_2" style={{ backgroundImage :
                        "url(http://img1.ak.crunchyroll.com/i/spire3-tmb/" +
                        "b88008a90c0b96c8c3769525bd59c6341515511412_full.jpg)" }}>
                            <div className="episode_name">
                                Episode 2 - Departure
                            </div>
                        </div>
                    </a>

                    <a className="episode" href="#">
                        <div className="episode" id="episode_3" style={{ backgroundImage :
                        "url(http://img1.ak.crunchyroll.com/i/spire3-tmb/" +
                        "b88008a90c0b96c8c3769525bd59c6341515511412_full.jpg)" }}>
                            <div className="episode_name">
                                Episode 3 - Lizard men, gathering
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        );
  }

}
