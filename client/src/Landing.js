import React, { Component } from 'react';
import Header from './components/common/Header';
import UserList from './components/UserList';
import VenueList from './components/VenueList';


class App extends Component {
    render() {
        return (
            <div className="">
                <Header />
                <div>
                    <h3>Users</h3>
                    <UserList />
                </div>
                <div>
                    <h3>Places to Go</h3>
                    <VenueList />
                </div>
            </div>
        );
    }
}

export default App;
