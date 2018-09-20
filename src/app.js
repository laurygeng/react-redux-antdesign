import React from 'react'
import { Route } from 'react-router-dom'
import Container from './ant-design/login/container'
import AppDragDropDemo from './ant-design/drag'
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