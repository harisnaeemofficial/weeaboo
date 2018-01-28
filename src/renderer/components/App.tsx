import * as React from "react";
import { Main } from "./Main";
import { NavBar } from "./NavBar";

export class App extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <NavBar />
                <Main />
            </div>
        );
    }
}
