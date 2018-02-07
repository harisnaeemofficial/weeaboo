import axios, {AxiosRequestConfig} from "axios";
import { BrowserWindow, remote } from "electron";
import * as path from "path";
import * as React from "react";
import * as url from "url";
import { HeaderWithBanner } from "./HeaderWithBanner";
import { AnimeInfos } from "./AnimeInfos";
import { AnimeEpisode } from "./AnimeEpisode";
import { HeaderWithoutBanner } from "./HeaderWithoutBanner";
export class AnimeDetails extends React.Component<any, any> {
    private window: BrowserWindow;
    public constructor() {
        super({});
        this.state = {
            details: {},
            nbEpisodes: 0,
        };
    }

    public render() {
        const Header =
        this.state.details.image_url_banner == null ?
            <HeaderWithoutBanner
                title_romaji={this.state.details.title_romaji}
            /> :
            <HeaderWithBanner
                banner={this.state.details.image_url_banner}
                title_romaji={this.state.details.title_romaji}
            />;
        const episodes = [];
        for ( let i = 1; i <= this.state.nbEpisodes; i++) {
            episodes.push(<AnimeEpisode
                image_poster={this.state.details.image_url_lge}
                title={"Episode " + i}
                key={i}
            />);
        }

        return (
        <div>
            { Header }
                <div className="ui grid anime" style={{ marginTop: "2%" }}>
                    <AnimeInfos
                        image_poster={this.state.details.image_url_lge}
                    />
                    <div className="ui twelve wide column episodes">
                        { episodes }
                    </div>
                </div>
            </div>
            );
    }
    public componentDidMount() {
        this.get_details_anime(this.props.match.params.id);
    }

    private get_details_anime(animeId: number) {
        const config: AxiosRequestConfig = {
            baseURL: "http://localhost:8080",
            method: "GET",
            params: { id: animeId },
            url: "/details",
        };
        axios.request(config).then((res: any) => {
            this.setState({details: res.data});
            if (res.data.airing_status === "currently airing") {
                this.setState({ nbEpisodes: res.data.airing.next_episode - 1 });
            }
            if (res.data.airing_status === "finished airing") {
                this.setState({ nbEpisodes: res.data.episodes });
            }
        });
    }
}
