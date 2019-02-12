import React from 'react'
import { Route } from 'react-router-dom'
import Container from './ant-design/demo/container.js'
import AppDragDropDemo from './ant-design/drag'

//import FinishedView from './ant-design/mobx'
import './app.css'
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

class App extends React.Component {
    render () {
        return (
            <div>
                {/* <Route path="/drag" component={AppDragDropDemo}></Route> */}
                <Route path="/demo" component={Container}></Route>
                {/* <Route path="/mobx" component={FinishedView}></Route> */}
                {/* <DatePicker /> */}
            </div>
        )
    }
}

export default App