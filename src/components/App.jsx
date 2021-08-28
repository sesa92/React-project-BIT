import React, { Fragment } from 'react';

import { Header } from './Header/Header.jsx';
import { BlogList } from "./BlogList/BlogList.jsx";
import { ClickCounter } from './ClickCounter/ClickCounter.jsx';

import "./App.css";

// function App() {
//     return (
//         <Fragment>
//             <Header />
//             <BlogList />
//         </Fragment>
//     );
// }

class SmartApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "Milos",
            counter: 0,
            isLoggedIn: false,
        };
        this.onUserSwitch = this.onUserSwitch.bind(this);
    }

    onUserSwitch() {
        this.setState({ name: 'Milan'});
    }

    onButtonClick = () => this.setState({ counter: this.state.counter + 1 })

    render(){
        console.log(this.state);

        const { counter, name, isLoggedIn } = this.state;
        const headerProps = {};

        if (isLoggedIn) {
            headerProps.name = name;
            headerProps.onUserSwitch = this.onUserSwitch;
        } else {
            headerProps.logIn = this.logIn;
        }

        return (
        <Fragment>
            <Header {...headerProps} />
            <ClickCounter count={counter} onButtonClick={this.onButtonClick} />
            <BlogList />
        </Fragment>
        );
    };
};

export { SmartApp };