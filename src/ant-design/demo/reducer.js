//页面中所有的reducer集合在一起，同时在这里，根据node后端的数据，生成各个组件的初始化state默认值
import { getActionTypes } from './action';
import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'

let initState={//初始化的数据结构，这里的结构一定要全，后续加入的属性比较难监控
	pageData:{
		name:'123',
		class:['语文','数学','英语'],
		formData:{
			inputBox: '这是一个输入框',
			numInputBox: '1',
			textArea: "这个是文本输入框",
			dataPicker: "",
			checkBox: 0,
			radio: "1",
			singleSelectId:0,
			singleOptions:[{
				optionId:0,optionName:'好好学习，天天向上',
			},
			{
				optionId:1,optionName:'学习成为更好的自己',
			},
			{
				optionId:2,optionName:'比你好的人，总是比你更努力'
			}],
			mutipleSelectId: [0,1],
			mutipleOptions:[{
				optionId:0,optionName:'拉斯维加斯',
			},
			{
				optionId:1,optionName:'吼吼吼',
			},
			{
				optionId:2,optionName:'日本'
			}],
			residences : [{
				value: 'zhejiang',
				label: 'Zhejiang',
				children: [{
				  value: 'hangzhou',
				  label: 'Hangzhou',
				  children: [{
					value: 'xihu',
					label: 'West Lake',
				  }],
				}],
			  }, {
				value: 'jiangsu',
				label: 'Jiangsu',
				children: [{
				  value: 'nanjing',
				  label: 'Nanjing',
				  children: [{
					value: 'zhonghuamen',
					label: 'Zhong Hua Men',
				  }],
				}],
			  }]
		}
	}
}

let actionTypes=getActionTypes();//所有actionType

//一旦dispatch，下面所有的function都会执行一遍，函数里面根据不同的actionTypes来执行不同的组件的操作
const rootReducer = Redux.combineReducers({
	//一个reducer对应一个组件，一个组件可以有多个action，所以一个reducer中是个switch函数，按照action不同执行不同的state更新操作
	/* 
		action就是在组件里面调用dispatch方法的时候传入参数
		state就是全局state，其实和组件内this.state是一个道理，都是一个对象
		return后面是一个新的state，这个state会覆盖上一个state
		return这个state必须是一个新的object
		如果你的state有很多个属性，就要使用object.assign进行克隆
		let newState = Object.assign(state) newState.loading = false; return newState 这样才可以 
	*/

	pageData:function (state = initState.pageData, action) {
		//debugger;
	    switch (action.type) {
	        case actionTypes.GET_TABLE_LIST_DATA:{
				return Object.assign({}, state, action.data);
			}
			case actionTypes.CHANGE_PAGENUM_STATE:{
				//debugger
				state.leads.pagination.currentPageIndex = action.data.currentPageIndex;
				return Object.assign({}, state, action);
			}
			case actionTypes.CHANGE_PAGESIZE_STATE:{
				//debugger
				state.leads.pagination.pageSize = action.data.pageSize;
				return Object.assign({}, state);
	        }
	        default:
	            return state;
	    }
	},

	//所有dispatch都需要执行的state变化
});

/*
在 Redux 中，对于 store state 的定义是通过组合 reducer 函数来得到的，也就是说 reducer 决定了最后的整个状态的数据结构
最终生成的state是各个reducer下的state集合
*/

export default rootReducer