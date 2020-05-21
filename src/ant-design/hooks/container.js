// import React from 'react'
import './app.less'
import React, { useState, useEffect, useReducer } from 'react';
import { Tabs, Layout} from 'antd';
import {getFormList} from "./action";
import Eat from './components/eat'

const { Header, Content, Footer} = Layout;


function init(payload) {
    return {count: payload.initialCount, isHungury: payload.initIsHungury};
}
  
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
        return {count: state.count + 1};
        case 'decrement':
        return {count: state.count - 1};
        case 'reset':
        return init(action.payload);
        case 'feedme':
            return {isHungury: true};
        default:
        throw new Error();
    }
}

export default function Container(){
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' },{text:'樱木花道'}]);
    const [state, dispatch] = useReducer(reducer,  init);
    // 相当于 componentDidMount 和 componentDidUpdate:
    useEffect(() => {
        // 使用浏览器的 API 更新页面标题
        document.title = `You clicked ${count} times`;
    });

    return (
        <Layout className="page-wrap">
            <Header className='title'>Hooks API</Header>
            <Content className="page-content">
            Count: {count}
                <button onClick={() => setCount(0)}>Reset</button>
                <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
                <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
                <div>小明今年{age}岁了，请问明年他几岁</div>
                <div>小明最喜欢吃的水果是:{fruit}</div>
                {todos.map((item,index)=>{
                    return <div key={index}>{item.text}</div>
                })}

            {/* 用useReducer来实现增减,reducer里面会有自己的state */}
            {/* 在大型的组件树中，我们推荐的替代方案是通过 context 用 useReducer 往下传一个 dispatch 函数： */}
            {/* 子组件都可以使用 dispatch 函数来向上传递 actions 到父组件 */}
            Count: {state.count}
                <button
                    onClick={() => dispatch({type: 'reset', payload: {initialCount:0,initIsHungury:false}})}>
                    Reset
                </button>
                <button onClick={() => dispatch({type: 'decrement'})}>-</button>
                <button onClick={() => dispatch({type: 'increment'})}>+</button>
                {Eat(dispatch)}
                {state.isHungury && <div>爸爸我饿了，快点喂我吃东西</div>}
            </Content>
            <Footer>
                <address>
                    有问题请联系<cite>By:Laury</cite>
                </address>
            </Footer>
        </Layout>
    );
}
