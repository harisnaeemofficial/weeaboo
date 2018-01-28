import * as React from "react";

export class AnimePoster extends React.Component<any, any> {
  public render() {
    return (
        <div className="wrapper">
            <a href="#">
                <div
                    className="anime_cover"
                    style={{ backgroundImage : "url(" + this.props.image + ")" }}
                />
                <div className="description">
                    <p className="description_content">
                        {this.props.title}
                    </p>
                </div>
            </a>
        </div>
    );
  }
}
