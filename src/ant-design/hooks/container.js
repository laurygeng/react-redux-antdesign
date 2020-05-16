import React from 'react'
import './app.less'
import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import RegistrationForm from './components/form';
import CommonTable from './components/table';
import { Tabs, Layout} from 'antd';
import {getFormList} from "./action";
const { Header, Content, Footer} = Layout;
const TabPane = Tabs.TabPane;


class Container extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        loading: true,
        iconLoading: true,
        mode: 'top',
        initSubject: 'sdfsd'
    }

    handleModeChange = (e) => {
        const mode = e.target.value;
        this.setState({ mode });
    }
    regFormSubmit = (param)=>{
        //debugger
        console.log("1111"+param);
    }

    componentDidMount(){
        getFormList();
        console.log(window.store);
    }

    inTheCircle = (e)=>{
        //alert(12343);

        var r=50;//圆的半径
        var x1 = 100, y1=100;
        var x2 = e.clientX;
        var y2 = e.clientY;
        //计算鼠标点的位置与圆心的距离
            var len=Math.abs(Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2)));
            if(len<=50){
                console.log("内")
            }else{
                console.log("外")
            }
    }
    
    
    render(){
    const { mode, initSubject } = this.state;
    const {pageData, formData} = this.props;
    //const {formData} = pageData;
    //debugger
    return (
        <Layout className="page-wrap">
            <Header className='title'>AntDesign_component</Header>
            <Content className="page-content">
                我要在这里把所有hooks的API都用一下，看看好不好玩
            </Content>
            <Footer>
                <address>
                    有问题请联系<cite>By:Laury</cite>
                </address>
            </Footer>
        </Layout>
    );
}

}

//将state绑定到props
const mapStateToProps = (state) => {
    return state;
}
//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
    console.log(dispatch);
    return {
    }
}

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Container)
