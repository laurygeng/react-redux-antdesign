/*用于获取数据，格式化数据*/
import {BaseModel} from '../../lib/urlMap';


//根据活动类型获取渠道信息
export function getFormListInfo(pageNum){
	//debugger
	return new BaseModel({
			url:"/v1/pro_activity/list/regulation",
			mockUrl:"/v1/pro_activity/list/regulation",//因为是动态的，所以得加一个mockUrl
			type:"get",
			data:pageNum,
			mock: true
	}).promise;
}

export function getFormListInfo2(pageNum){
	//debugger
	return new BaseModel({
			url:"/v1/pro_activity/list/regulation",
			mockUrl:"/v1/pro_activity/list/regulation2",//因为是动态的，所以得加一个mockUrl
			type:"get",
			data:pageNum,
			mock: true
	}).promise;
}


