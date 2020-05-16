// import React from 'react'
import './app.less'
import React, { useState, useEffect } from 'react';
import { Tabs, Layout} from 'antd';
import {getFormList} from "./action";
const { Header, Content, Footer} = Layout;


export default function Container(){
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' },{text:'樱木花道'}]);
    
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
                {todos.map(item=>{
                    return <div>{item.text}</div>
                })}
            </Content>
            <Footer>
                <address>
                    有问题请联系<cite>By:Laury</cite>
                </address>
            </Footer>
        </Layout>
    );
}
