//所有的action，包括actionType，可以把getActionTypes里面返回的东西单独提出去
//ajax请求数据函数也在action中，因为dispatch(action)的时候，异步操作需要传入function类型的action，action里面包含了ajax请求
//import {getTableListInfo,exportExcelInfo} from "./model";

//所有actionType，可以单独抽离
let actionTypes={
    GET_TABLE_LIST_DATA:"GET_TABLE_LIST_DATA",//获取活动统计表格数据
    CHANGE_PAGENUM_STATE:"CHANGE_PAGENUM_STATE",
    CHANGE_PAGESIZE_STATE:'CHANGE_PAGESIZE_STATE'
};

//外部获取所有actionTypes
export function getActionTypes(){
    return actionTypes;
}

// export function getTableList(activityId,pageNum,pageSize){
//    // debugger
//     return function (dispatch) {
//         return getTableListInfo(activityId,pageNum,pageSize).then(response => {
//             //debugger
//             //console.log(response);
//             dispatch({//dispatch需要传入的值
//                 type:actionTypes.GET_TABLE_LIST_DATA,
//                 data:response.data
//                 //data:formatTableListData(response)
//             });
//         }, xhr => {

//         });
//     };
// }

// //发送ajax请求按钮表格数据
// export function dispatchTableListData (activityId,pageNum,pageSize){
//     //根据返回的btn数据来请求table数据
//     //debugger;
//     getTableList(activityId,pageNum,pageSize)(store.dispatch);
//     // store.dispatch({...});
// }





