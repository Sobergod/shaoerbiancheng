/**
 * @author CJH
 * @description 路由页面
 */

// Polyfills
import 'es6-object-assign/auto';
import 'core-js/fn/array/includes';
import 'intl'; // For Safari 9
import React from 'react';
import ReactDOM from 'react-dom';
import GUIWrap from './main-gui.jsx'
import GUI from '../containers/gui.jsx';
import styles from './index.css';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Test from '../others/test.jsx'
import Login from '../others/containers/login.jsx'
import Register from '../others/containers/register.jsx'
import MNavBar from '../others/navBar.jsx'
import styles1 from './router.css';
const appTarget = document.querySelector('#root');
appTarget.className = styles.app;
GUI.setAppElement(appTarget);
class RouterMap extends React.Component {
    render() {
        return (
            <Router>
                <div className={styles1.router}>
                    <MNavBar />
                    <Switch>
                        <Route exact path="/" component={Test} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route path="/test" component={GUIWrap} />
                    </Switch>
                </div>
            </Router >
        )
    }
}
// ReactDOM.render(<RouterMap />, appTarget);
ReactDOM.render(<RouterMap />, document.getElementById("root"));
// export default WrappedGui
