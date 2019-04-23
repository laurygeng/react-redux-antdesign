import React from 'react'
import './app.less'
import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import RegistrationForm from './components/form';

import ReactPageScroller from "react-page-scroller";

import CommonTable from './components/table';
import { Tabs, Layout} from 'antd';
import {getFormList, getFormList2} from "./action";
import { Item } from 'antd-mobile/lib/tab-bar';
const { Header, Content, Footer} = Layout;
const TabPane = Tabs.TabPane;



class Container extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        window.store.dispatch(getFormList());
    }

    goToPage = (pageNumber) => {
        window.store.dispatch(getFormList2());
    }
    pageOnChange(pageNum){
        window.store.dispatch(getFormList2());
    }
    
    render(){
    // const { mode, initSubject } = this.state;
    const { formData } = this.props;
    const { resultData } = formData;
    console.log(formData);
    
    return (
        <div className="page-wrap">
            <div>
                <ReactPageScroller 
                containerHeight={200}
                containerWidth={200}
                pageOnChange={this.pageOnChange.bind(this)}
                goToPage={this.goToPage.bind(this)}
                >
                <div>1212312</div>
                <div>
                {resultData && resultData.map(item=>{
                    return( <div className="scrollbox" key={item.orderId}>
                            {item.orderId}
                        </div>) 
                })} 
                </div>
         
                </ReactPageScroller>
            </div> 
            <Footer>
                <address>
                    <cite>By:Laury</cite>
                </address>
            </Footer>
        </div>
    );
}

}

//将state绑定到props
const mapStateToProps = (state) => {
    //debugger
    return state;
}
//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
    //console.log(dispatch);
    //debugger
    return {
    }
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Container)
/*
    将store中的state作为组件的props的值，
    通过connect实现将dispatch方法注入到组件的props.dispatch
 */