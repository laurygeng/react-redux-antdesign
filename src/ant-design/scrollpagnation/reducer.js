// //页面中所有的reducer集合在一起，同时在这里，根据node后端的数据，生成各个组件的初始化state默认值
// import {
// 	getActionTypes
// } from './action';
// import * as Redux from 'redux'
// import * as ReactRedux from 'react-redux'

// let initState = { //初始化的数据结构，这里的结构一定要全，后续加入的属性比较难监控
// 	pageData: {
// 		name: '123',
// 		class: ['语文', '数学', '英语'],
// 	},

	// formData: {
	// 	"status":0,
	// 	"message":null,
	// 	"data":
	// 	{"resultData":[{"orderId":100009653,"dealCost":"0.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100009653","statusDes":"已配送","payMethodDes":"--","payDateTime":"2017-11-02 13:44","enrollDateTime":"2017-11-02 13:44","mproductName":"1101kikiIAP新班（定制班）"},{"orderId":100009652,"dealCost":"0.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100009652","statusDes":"已配送","payMethodDes":"--","payDateTime":"2017-11-02 13:44","enrollDateTime":"2017-11-02 13:44","mproductName":"1101kikiIAP新班（定制班）"},{"orderId":100009651,"dealCost":"0.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100009651","statusDes":"已配送","payMethodDes":"--","payDateTime":"2017-11-02 13:43","enrollDateTime":"2017-11-02 13:43","mproductName":"1101kikiIAP新班（定制班）"},{"orderId":100009642,"dealCost":"0.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100009642","statusDes":"已配送","payMethodDes":"--","payDateTime":"2017-11-02 13:30","enrollDateTime":"2017-11-02 13:30","mproductName":"1101kikiIAP新班（定制班）"},{"orderId":100009641,"dealCost":"0.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100009641","statusDes":"已配送","payMethodDes":"--","payDateTime":"2017-11-02 13:30","enrollDateTime":"2017-11-02 13:30","mproductName":"1101kikiIAP新班（定制班）"},{"orderId":100009574,"dealCost":"0.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100009574","statusDes":"已配送","payMethodDes":"--","payDateTime":"2017-11-02 10:21","enrollDateTime":"2017-11-02 10:21","mproductName":"1101kikiIAP新班（定制班）"},{"orderId":100009570,"dealCost":"0.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100009570","statusDes":"已配送","payMethodDes":"--","payDateTime":"2017-11-02 10:09","enrollDateTime":"2017-11-02 10:09","mproductName":"1101kikiIAP新班（定制班）"},{"orderId":100009568,"dealCost":"0.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100009568","statusDes":"已配送","payMethodDes":"--","payDateTime":"2017-11-02 10:08","enrollDateTime":"2017-11-02 10:08","mproductName":"1101kikiIAP新班（定制班）"},{"orderId":100008794,"dealCost":"0.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100008794","statusDes":"已配送","payMethodDes":"--","payDateTime":"2017-10-30 13:30","enrollDateTime":"2017-10-30 13:30","mproductName":"英语零基础直达职场全能【随到随学班】"},{"orderId":100006865,"dealCost":"750.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100006865","statusDes":"已取消","payMethodDes":"支付宝直充","payDateTime":"--","enrollDateTime":"--","mproductName":"【沪江•牛津】零基础直达商务英语中级精品1V6【4月班】"}],
	// 	"pagination":{"totalCount":1700,"pageSize":10,"sortColumn":null,"currentPageIndex":2,"sortEnum":0}},
	// 	"time":null,
	// 	"ok":true,
	// 	"fail":false

	// }
// }

// let actionTypes = getActionTypes(); //所有actionType

// //一旦dispatch，下面所有的function都会执行一遍，函数里面根据不同的actionTypes来执行不同的组件的操作
// const rootReducer = Redux.combineReducers({
// 	//一个reducer对应一个组件，一个组件可以有多个action，所以一个reducer中是个switch函数，按照action不同执行不同的state更新操作
// 	/* 
// 		action就是在组件里面调用dispatch方法的时候传入参数
// 		state就是全局state，其实和组件内this.state是一个道理，都是一个对象
// 		return后面是一个新的state，这个state会覆盖上一个state
// 		return这个state必须是一个新的object
// 		如果你的state有很多个属性，就要使用object.assign进行克隆
// 		let newState = Object.assign(state) newState.loading = false; return newState 这样才可以 
// 	*/

// 	pageData: function (state = initState.pageData, action) {
// 		//debugger;
// 		switch (action.type) {
// 			case actionTypes.GET_TABLE_LIST_DATA:
// 				{
// 					return Object.assign({}, state, action.data);
// 				}
// 			case actionTypes.CHANGE_PAGENUM_STATE:
// 				{
// 					//debugger
// 					state.leads.pagination.currentPageIndex = action.data.currentPageIndex;
// 					return Object.assign({}, state, action);
// 				}
// 			case actionTypes.CHANGE_PAGESIZE_STATE:
// 				{
// 					//debugger
// 					state.leads.pagination.pageSize = action.data.pageSize;
// 					return Object.assign({}, state);
// 				}
// 			default:
// 				return state;
// 		}
// 	},
// 	formData: function(state = {},action){
// 		//console.log(action);
// 		switch (action.type) {
// 			case actionTypes.GET_FORM_LIST_DATA:
// 			//debugger
// 			//debugger
// 				//{
// 					return Object.assign({}, ...state, action.resultData);
// 				//}
// 			// case actionTypes.GET_TABLE_LIST_DATA:
// 			// 	{
// 			// 		return Object.assign({}, state, action.data);
// 			// 	}
// 				default:
// 				return state;
// 		}
// 	}
// 	//所有dispatch都需要执行的state变化
// });

// /*
// 在 Redux 中，对于 store state 的定义是通过组合 reducer 函数来得到的，也就是说 reducer 决定了最后的整个状态的数据结构
// 最终生成的state是各个reducer下的state集合
// */

// export default rootReducer





import * as ActionTypes from './actionTypes';
import { combineReducers } from 'redux';



let initState = { //初始化的数据结构，这里的结构一定要全，后续加入的属性比较难监控
	formData:{
		"status":0,
		"message":null,
		"data":
		{"resultData":[
			{"orderId":100009653,"dealCost":"0.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100009653","statusDes":"已配送","payMethodDes":"--","payDateTime":"2017-11-02 13:44","enrollDateTime":"2017-11-02 13:44","mproductName":"1101kikiIAP新班（定制班）"},
			{"orderId":100009652,"dealCost":"0.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100009652","statusDes":"已配送","payMethodDes":"--","payDateTime":"2017-11-02 13:44","enrollDateTime":"2017-11-02 13:44","mproductName":"1101kikiIAP新班（定制班）"},
			{"orderId":100009651,"dealCost":"0.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100009651","statusDes":"已配送","payMethodDes":"--","payDateTime":"2017-11-02 13:43","enrollDateTime":"2017-11-02 13:43","mproductName":"1101kikiIAP新班（定制班）"},{
				"orderId":100009642,"dealCost":"0.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100009642","statusDes":"已配送","payMethodDes":"--","payDateTime":"2017-11-02 13:30","enrollDateTime":"2017-11-02 13:30","mproductName":"1101kikiIAP新班（定制班）"},
				{"orderId":100009641,"dealCost":"0.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100009641","statusDes":"已配送","payMethodDes":"--","payDateTime":"2017-11-02 13:30","enrollDateTime":"2017-11-02 13:30","mproductName":"1101kikiIAP新班（定制班）"},
				{"orderId":100009574,"dealCost":"0.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100009574","statusDes":"已配送","payMethodDes":"--","payDateTime":"2017-11-02 10:21","enrollDateTime":"2017-11-02 10:21","mproductName":"1101kikiIAP新班（定制班）"},
				{"orderId":100009570,"dealCost":"0.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100009570","statusDes":"已配送","payMethodDes":"--","payDateTime":"2017-11-02 10:09","enrollDateTime":"2017-11-02 10:09","mproductName":"1101kikiIAP新班（定制班）"},
				{"orderId":100009568,"dealCost":"0.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100009568","statusDes":"已配送","payMethodDes":"--","payDateTime":"2017-11-02 10:08","enrollDateTime":"2017-11-02 10:08","mproductName":"1101kikiIAP新班（定制班）"},
				{"orderId":100008794,"dealCost":"0.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100008794","statusDes":"已配送","payMethodDes":"--","payDateTime":"2017-10-30 13:30","enrollDateTime":"2017-10-30 13:30","mproductName":"英语零基础直达职场全能【随到随学班】"},
				{"orderId":100006865,"dealCost":"750.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100006865","statusDes":"已取消","payMethodDes":"支付宝直充","payDateTime":"--","enrollDateTime":"--","mproductName":"【沪江•牛津】零基础直达商务英语中级精品1V6【4月班】"}],
		"pagination":{"totalCount":1700,"pageSize":10,"sortColumn":null,"currentPageIndex":2,"sortEnum":0}},
		"time":null,
		"ok":true,
		"fail":false
	}
}

const formDataReducer = (state = {}, action) => {
    const { payload } = action;
    switch (action.type) {
		case ActionTypes.GET_FORM_LIST_DATA:
			return Object.assign({}, ...state, payload);
        default:
            return state;
    }
}


const rootReducer = combineReducers({
	formData: formDataReducer,
});

export default rootReducer;