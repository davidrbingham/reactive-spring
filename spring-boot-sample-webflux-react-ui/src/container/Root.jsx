import React from "react";
import {Provider} from "react-redux";
import Application from "./Application.jsx";

export default class Root extends React.Component {
    render() {
        const {store} = this.props;
        return (
            <Provider store={ store }>
                <Application store={ store }/>
            </Provider>
        );
    }
}