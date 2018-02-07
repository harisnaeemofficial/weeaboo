import * as React from "react";

export class HeaderWithoutBanner extends React.Component<any, any> {

  public render() {
    return (
        <div>{this.props.title_romaji}</div>
    );
  }
}
