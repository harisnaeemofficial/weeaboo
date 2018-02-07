import * as React from "react";

export class AnimeInfos extends React.Component<any, any> {
  public render() {
    return (
        <div className="ui four wide column anime_side">
            <img src={this.props.image_poster}/>
        </div>
    );
  }
}
