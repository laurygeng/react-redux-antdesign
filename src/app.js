import React from 'react'
import { Route } from 'react-router-dom'
<<<<<<< HEAD
import Container from './ant-design/hooks/container.js'
=======
import Container from './ant-design/scrollpagnation/container.js'
>>>>>>> 434525f07f64281001f223bea16e211825fed603
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
                <Route path="/scrollpagnation" component={Container}></Route>
                {/* <Route path="/mobx" component={FinishedView}></Route> */}
                {/* <DatePicker /> */}
            </div>
        )
    }
}

export default App

// 迭代器
// 每次执行的时候会返回一个对象，对象里面有一个值一个状态，还有一个方法
// 生成器就是用于生成迭代器的