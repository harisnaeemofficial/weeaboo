import * as React from "react";

export class HeaderWithBanner extends React.Component<any, any> {

  public render() {
    return (
        <div className="anime_banner" style={{ backgroundImage :
            "url(" + this.props.banner + ")" }}>
            <div className="anime_title">{this.props.title_romaji}</div>
        </div>
    );
  }
}
