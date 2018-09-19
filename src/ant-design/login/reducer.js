//页面中所有的reducer集合在一起，同时在这里，根据node后端的数据，生成各个组件的初始化state默认值
import { getActionTypes } from './action';
import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'

let initState={//初始化的数据结构，这里的结构一定要全，后续加入的属性比较难监控
	tableList:{
	}
}

let actionTypes=getActionTypes();//所有actionType

//一旦dispatch，下面所有的function都会执行一遍，函数里面根据不同的actionTypes来执行不同的组件的操作
const rootReducer = Redux.combineReducers({

	//studyPlanInfo的reduce，一个reduce单元,可以拆封到一个reduce文件夹中
	//一个reducer对应一个组件，一个组件可以有多个action，所以一个reducer中是个switch函数，按照action不同执行不同的state更新操作

	tableList:function (state = initState.tableList, action) {
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
{
	studyPlanInfo：{solutions,items},
	user:20
}*/

export default rootReducer