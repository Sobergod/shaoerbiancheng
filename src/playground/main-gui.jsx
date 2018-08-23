// Polyfills
import 'es6-object-assign/auto';
import 'core-js/fn/array/includes';
import 'intl'; // For Safari 9

import React from 'react';
import ReactDOM from 'react-dom';
import analytics from '../lib/analytics';
import {
    Link
} from 'react-router-dom';
import GUI from '../containers/gui.jsx';
import HashParserHOC from '../lib/hash-parser-hoc.jsx';
import AppStateHOC from '../lib/app-state-hoc.jsx';
if (process.env.NODE_ENV === 'production' && typeof window === 'object') {
    // Warn before navigating away
    window.onbeforeunload = () => true;
}

// Register "base" page view
// analytics.pageview('/');


const WrappedGui = HashParserHOC(AppStateHOC(GUI));

// TODO a hack for testing the backpack, allow backpack host to be set by url param
// const backpackHostMatches = window.location.href.match(/[?&]backpack_host=([^&]*)&?/);
// const backpackHost = backpackHostMatches ? backpackHostMatches[1] : null;
// console.log(backpackHost)
// const backpackOptions = {
//     visible: true,
//     host: backpackHost
// };
class GUIWrap extends React.Component {
    render() {
        return (
            <WrappedGui />
        )
    }
}
// ReactDOM.render(<WrappedGui backpackOptions={backpackOptions} />, appTarget);
export default GUIWrap
