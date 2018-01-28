import * as React from "react";
import { Link } from "react-router-dom";

export class SearchBar extends React.Component<any, any> {
    public render() {
        return (
            <div className="ui menu">
                <div className="ui category search item">
                    <div className="ui transparent icon input">
                        <input
                            className="prompt"
                            type="search"
                            placeholder="Search..."
                            name="anime"
                            onChange={(e) => this.props.onChange(e)}
                        />
                        <i className="search link icon"></i>
                    </div>
                </div>
            </div>
        );
    }
}
