import React from 'react';
import { DevTools } from './utils/index';

export default class App extends React.Component {

    static path = '/';

    render() {
        return (
            <div>
                <h2>Мое первое приложение на React</h2>
                [ process.env.MODE_DEV !== 'production' ? <DevTools/> : null]
            </div>    
        );
    }
}