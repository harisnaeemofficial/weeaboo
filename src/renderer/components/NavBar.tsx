import * as React from "react";
import { Link } from "react-router-dom";

export class NavBar extends React.Component<any, any> {
    public render() {
        return (
            <header>
                <nav>
                <ul>
                    <li><Link to="/">App</Link></li>
                    <li><Link to="/anime">Anime</Link></li>
                </ul>
                </nav>
            </header>
        );
    }
}
