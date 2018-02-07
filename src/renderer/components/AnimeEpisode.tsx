import * as React from "react";

export class AnimeEpisode extends React.Component<any, any> {
  public render() {
    return (
        <a className="episode" href="#">
            <div className="episode" style={{ backgroundImage : "url(" + this.props.image_poster + ")" }} >
                <div className="episode_name">
                    {this.props.title}
                </div>
            </div>
        </a>
    );
  }
}
