//所有的action，包括actionType，可以把getActionTypes里面返回的东西单独提出去
//ajax请求数据函数也在action中，因为dispatch(action)的时候，异步操作需要传入function类型的action，action里面包含了ajax请求
import {getFormListInfo, getFormListInfo2} from "./model";
import * as ActionTypes from './actionTypes';

//所有actionType，可以单独抽离
// let actionTypes={
//     GET_FORM_LIST_DATA:"GET_FORM_LIST_DATA",//获取活动统计表格数据
//     // CHANGE_PAGENUM_STATE:"CHANGE_PAGENUM_STATE",
//     // CHANGE_PAGESIZE_STATE:'CHANGE_PAGESIZE_STATE'
// };

// //外部获取所有actionTypes
// export function getActionTypes(){
//     return actionTypes;
// }
//getBtnData是一个action的creater，用于生成一个action；//store.dispatch(getBtnData()),getBtnData()执行返回一个action
//但是这个是异步操作，所以redux做action做了一个封装处理，getBtnData()返回的action可以是一个function，页面下面return的那个带有dispatch的函数
export function getFormList(pageNum){
    // return getFormListInfo().then(response => {
    //     console.log(response);
    //     window.store.dispatch({//dispatch需要传入的值
    //         type:actionTypes.GET_FORM_LIST_DATA,
    //         data:response.data
    //     });
    // }, xhr => {

    // });
    return function (dispatch) {
        getFormListInfo(pageNum).then(response => {//这里用return返回一个promise，是为了链式调用ajax
            console.log(response);
            dispatch({//dispatch需要传入的值
                type:ActionTypes.GET_FORM_LIST_DATA,
                payload:response.data
            });
        }, xhr => {
            //展示error信息
        });
    };

}
export function getFormList2(pageNum){
    // return getFormListInfo().then(response => {
    //     console.log(response);
    //     window.store.dispatch({//dispatch需要传入的值
    //         type:actionTypes.GET_FORM_LIST_DATA,
    //         data:response.data
    //     });
    // }, xhr => {

    // });
    return function (dispatch) {
        getFormListInfo2(pageNum).then(response => {//这里用return返回一个promise，是为了链式调用ajax
            console.log(response);
            dispatch({//dispatch需要传入的值
                type:ActionTypes.GET_FORM_LIST_DATA,
                payload:response.data
            });
        }, xhr => {
            //展示error信息
        });
    };

}






