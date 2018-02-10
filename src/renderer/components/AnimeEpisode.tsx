import * as React from "react";
import { EpisodeTorrent } from "./EpisodeTorrent";

export class AnimeEpisode extends React.Component<any, any> {

    public constructor() {
        super({});
        this.state = { selected: false };
      }

    public render() {
        const episodeTorrent = this.state.selected === true ?
            <EpisodeTorrent
                animeTitle={this.props.title}
                episodeNumber={this.props.episode}
                key={this.props.key + "t"}
                handleClick={this.handleClick.bind(this)}
            /> : "";
        return (
            <a className="episode" onClick={this.handleClick.bind(this)}>
                {episodeTorrent}
                <div className="episode" style={{ backgroundImage : "url(" + this.props.image_poster + ")" }} >
                    <div className="episode_name">
                        Episode {this.props.episode}
                    </div>
                </div>
            </a>
        );
    }

    private handleClick(e) {
        e.preventDefault();
        this.setState((prevState, props) => {
            return {selected: !prevState.selected};
        });
    }

}
