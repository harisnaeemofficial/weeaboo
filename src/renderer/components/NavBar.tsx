import * as React from "react";
import { Link } from "react-router-dom";

export class NavBar extends React.Component<any, any> {
    public constructor() {
        super({});
    }

    public render() {
        return (
            <div className="ui left fixed vertical menu">
                <div className="item">
                    WEEABOO
                </div>
                <Link to={"/"}className="item">Home</Link>
                <Link to={"/animes"} className="item">Animes</Link>
            </div>
        );
    }
}
