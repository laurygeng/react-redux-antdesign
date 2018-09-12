import React from 'react'
import { Route } from 'react-router-dom'
import Login from './container/login'
import Register from './container/register'
import './app.css'
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

class App extends React.Component {
    render () {
        return (
            <div>
                <Route path="/Register" component={Register}></Route>
                <Route path="/login" component={Login}></Route>
                <DatePicker />
            </div>
        )
    }
}

export default App