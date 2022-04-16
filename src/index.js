import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import './styles/styles.scss';
import 'regenerator-runtime/runtime';



function RootComponent(){
    return (
        <div>
            <App />
        </div>
    );
}

render(<RootComponent/>, document.querySelector(".app"));