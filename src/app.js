import React from 'react'
import { Route } from 'react-router-dom'
import Container from './container/login/container'
import AppDragDropDemo from './container/drag'
import './app.css'
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

class App extends React.Component {
    render () {
        return (
            <div>
                <Route path="/drag" component={AppDragDropDemo}></Route>
                <Route path="/login" component={Container}></Route>
                {/* <DatePicker /> */}
            </div>
        )
    }
}

export default App