/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';


import {Provider} from "react-redux"
import configureStore from "./src/store/store"

import Root from "./src/root"

const store = configureStore()

export default class App extends Component<Props> {
    render() {
        return (
            <Provider store={store}>
                <Root/>
            </Provider>
        );
    }
}
