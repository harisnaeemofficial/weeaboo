import * as React from "react";
import { Link } from "react-router-dom";

export class SearchBar extends React.Component<any, any> {
    public render() {
        return (
            <div style={{ width : "100%" }} >
                <div className="ui icon input">
                    <input
                        placeholder="Search..."
                        type="text"
                        onChange={(e) => this.props.onChange(e)}
                    />
                    <i className="search icon" />
                </div>
            </div>
        );
    }
}
