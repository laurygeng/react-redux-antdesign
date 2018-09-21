//后端api文档地址:
// http://wiki.yeshj.com/pages/viewpage.action?pageId=46897146
// http://wiki.yeshj.com/pages/viewpage.action?pageId=46901243

export default {

	//列表页按钮数据 /v1/pro_activity/list/regulation
	"/v1/pro_activity/list/regulation":{
		
		param:{
			//不需要参数
		},

		"message": "OK",
		"status": 0, //接口执行成功
		"data": {
			formData: {
				inputBox: '这是调接口之后返回的数据',
				numInputBox: '2',
				textArea: "虽然但是",
				datePicker: "2015-02-01",
				checkBox: false,
				radio: "2",
				radioGroup: 'Pear',
				groupOptions: [{
						label: 'Apple',
						value: 'Apple'
					},
					{
						label: 'Pear',
						value: 'Pear'
					},
					{
						label: 'Orange',
						value: 'Orange'
					},
				],
				singleSelectId: 2,
				singleOptions: [{
						optionId: 0,
						optionName: '好好学习，天天向上',
					},
					{
						optionId: 1,
						optionName: '学习成为更好的自己',
					},
					{
						optionId: 2,
						optionName: '比你好的人，总是比你更努力'
					}
				],
				mutipleSelectId: [1],
				mutipleOptions: [{
						optionId: 0,
						optionName: '拉斯维加斯',
					},
					{
						optionId: 1,
						optionName: '吼吼吼',
					},
					{
						optionId: 2,
						optionName: '日本'
					}
				],
				residences: [{
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
	},

	//列表页表格数据 /v1/pro_activity/list/regulation
	"/v1/pro_activity/search":{
		param:{//param是参数,需要前端发给后端,也放在这里,一目了然便于查看
			"pageNum": 1,//第几页
			"pageSize": 50,//一页多少条
			"paramData": {
				"saleUnit": "成人口语",//销售单元
				"activityStatus":1,//活动状态code
				"activityName": "促销活动1"//活动名称
			}
		},
		status:0,
		message:"",
		data:{
			formData: {
				inputBox: '这是调接口之后返回的数据',
				numInputBox: '2',
				textArea: "虽然但是",
				datePicker: "2015-02-01",
				checkBox: false,
				radio: "2",
				radioGroup: 'Pear',
				groupOptions: [{
						label: 'Apple',
						value: 'Apple'
					},
					{
						label: 'Pear',
						value: 'Pear'
					},
					{
						label: 'Orange',
						value: 'Orange'
					},
				],
				singleSelectId: 2,
				singleOptions: [{
						optionId: 0,
						optionName: '好好学习，天天向上',
					},
					{
						optionId: 1,
						optionName: '学习成为更好的自己',
					},
					{
						optionId: 2,
						optionName: '比你好的人，总是比你更努力'
					}
				],
				mutipleSelectId: [1],
				mutipleOptions: [{
						optionId: 0,
						optionName: '拉斯维加斯',
					},
					{
						optionId: 1,
						optionName: '吼吼吼',
					},
					{
						optionId: 2,
						optionName: '日本'
					}
				],
				residences: [{
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
	},


	//获取活动数据 :type:get :和下面的/v1/pro_activity/{activity_id}重复了，用这个
	"/v1/pro_activity/activityId":{
		"message": "OK",
	    "status": 0,
	    "data": {
	        "saleUnits": [{
				"saleUnitName": "成人口语",
				"saleUnitValue": 1,
				"isSelected":true
			}, {
				"saleUnitName": "青少儿口语",
				"saleUnitValue": 2
			}, {
				"saleUnitName": "国内考试",
				"saleUnitValue": 3
			}, {
				"saleUnitName": "留学",
				"saleUnitValue": 4
			}, {
				"saleUnitName": "日语",
				"saleUnitValue": 5
			}],
			"activityTypes": [{
				"isSelected":true,
				"activityTypeName": "裂变活动",
				"activityTypeValue": 1
			}],
			"triggerTypes": [{
				"triggerTypeName": "提交例子",
				"triggerTypeValue": 1
			}, {
				"triggerTypeName": "完成DEMO",
				"triggerTypeValue": 2
			}, {
				"triggerTypeName": "购课成功",
				"triggerTypeValue": 3
			}],
			"rewardTypes": [{
				"rewardTypeName": "赠学币",
				"rewardTypeValue": 1,
				"triggerObject":0//0表示推荐人和被推荐人都有，1表示推荐人才有，2表示被推荐人才有
			}, {
				"rewardTypeName": "赠商品",
				"rewardTypeValue": 2
			}, {
				"rewardTypeName": "赠优惠券",
				"rewardTypeValue": 3
			}, {
				"rewardTypeName": "赠课",
				"rewardTypeValue": 4
			}, {
				"rewardTypeName": "返现金",
				"rewardTypeValue": 5
			}],

			//前面数据的和新建活动下发的一样
			"id": 123,
	        "activityName": "活动名称A",
	        "startDate": "2018-06-21", //开始日期
	        "endDate": "2018-06-25", //结束日期
	        "wxAppId": 2, //适用销售单元
	        "activityRules": "没有规则，大家随便玩，开心就好", //活动规则
	        "inactiveUrl": "http://www.hujiang.com", // 活动过期页面URL
	        "leadMaterialUrl": "http://www.hujiang.com/2.jpg", // 例子页面素材
	        "prizeMateriaUrl": "http://www.hujiang.com/3.jpg", // 奖励页面素材
	        "wxChannel":[{//下发的渠道信息，新建活动的时候没有，只有复制活动的时候请求数据才会下发
				"wxChannelName": "沪江口语俱乐部",
				"wxChannelValue": 1,
				"isSelected": true
	        },{//
				"wxChannelName": "测试号1",
				"wxChannelValue": 2,
				"isSelected": false
	        }],
	        "triggerCreateRequests": [{
			    "triggerObject": 2, // triggerObject=1(推荐人), triggerObject=2(被推荐人)
			    "triggers": { //触发奖励形式
			        "triggerType": 3, // triggerType=1(提交例子), triggerType=2(完成DEMO), triggerType=3(购课成功)
			        "triggerDetail": {
			            "productIds": [1003, 11105, 1106],
			            "trackingDays": 3
			        }
			    },
			    "rewardCreateRequests": [ //具体奖励信息
			        {
			            "rewardType": 5, // 奖品类型  rewardType=1(学币), rewardType=2(商品), rewardType=3(优惠券), rewardType=4(赠课), rewardType=5(现金)
			            "rewardName": "奖品名称",
			            "rewardDetail": {
			                "money": 52.00,//金额数量
			                "currency": "CNY"
			            } //奖品详细信息
			        }, {
			            "rewardType": 4, // 奖品类型  rewardType=1(学币), rewardType=2(商品), rewardType=3(优惠券), rewardType=4(赠课), rewardType=5(现金)
			            "rewardName": "奖品名称",
			            "rewardDetail": {
			                "productIds": [1003, 1004, 1005] //课程商品ID
			            } //奖品详细信息
			        }
			    ]
			}, {
			    "triggerObject": 1, // triggerObject=1(推荐人), triggerObject=2(被推荐人)
			    "triggers": { //触发奖励形式
			        "triggerType": 2, // triggerType=1(提交例子), triggerType=2(完成DEMO), triggerType=3(购课成功)
			        "triggerDetail": {
			            "trackingDays": 3
			        }
			    },
			    "rewardCreateRequests": [ //具体奖励信息
			        {
			            "rewardType": 3, // 奖品类型  rewardType=1(学币), rewardType=2(商品), rewardType=3(优惠券), rewardType=4(赠课), rewardType=5(现金)
			            "rewardName": "奖品名称",
			            "rewardDetail": {
			                "batchId": [1001, 1002, 1003] //优惠券批次ID
			            } //奖品详细信息
			        }, {
			            "rewardType": 2, // 奖品类型  rewardType=1(学币), rewardType=2(商品), rewardType=3(优惠券), rewardType=4(赠课), rewardType=5(现金)
			            "rewardName": "奖品名称",
			            "rewardDetail": {
			                "productIds": [1001, 1002, 1003], //商品ID
			                "count":2//商品数量
			            } //奖品详细信息
			        }
			    ]
			}, {
			    "triggerObject": 1, // triggerObject=1(推荐人), triggerObject=2(被推荐人)
			    "triggers": { //触发奖励形式
			        "triggerType": 1, // triggerType=1(提交例子), triggerType=2(完成DEMO), triggerType=3(购课成功)
			        "triggerDetail": {
			            "perCount": 1
			        }
			    },
			    "rewardCreateRequests": [{
			        "rewardType": 1, // 奖品类型  rewardType=1(学币), rewardType=2(商品), rewardType=3(优惠券), rewardType=4(赠课), rewardType=5(现金)
			        "rewardName": "奖品名称",
			        "rewardDetail": {
			            "xueBiLimit": 59.2 //学币：数量
			        } //奖品详细信息
			    }]
			}],
	        "subMitType": 1, //1启用，2禁用，3草稿
	        "activityState":true//活动是启用还是禁用 ：修改
	    }
	},

	//创建新的活动【其实就是获取新活动的下拉菜单数据】type":get
	"/v1/pro_activity/regulation": {
		"status": 0,
		"message": "success",
		"data": {
			"saleUnits": [{
				"saleUnitName": "成人口语",
				"saleUnitValue": 1
			}, {
				"saleUnitName": "青少儿口语",
				"saleUnitValue": 2
			}, {
				"saleUnitName": "国内考试",
				"saleUnitValue": 3
			}, {
				"saleUnitName": "留学",
				"saleUnitValue": 4
			}, {
				"saleUnitName": "日语",
				"saleUnitValue": 5
			}],
			"activityTypes": [{
				"activityTypeName": "裂变活动",
				"activityTypeValue": 1
			}],
			"triggerTypes": [{
				"triggerTypeName": "提交例子",
				"triggerTypeValue": 1
			}, {
				"triggerTypeName": "完成DEMO",
				"triggerTypeValue": 2
			}, {
				"triggerTypeName": "购课成功",
				"triggerTypeValue": 3
			}],
			"rewardTypes": [{
				"rewardTypeName": "赠学币",
				"rewardTypeValue": 1,
				"triggerObject":0// triggerObject=1(推荐人), triggerObject=2(被推荐人)，triggerObject=0(被推荐人和被推荐人都展示)
			}, {
				"rewardTypeName": "赠商品",
				"rewardTypeValue": 2,
				"triggerObject":0
			}, {
				"rewardTypeName": "赠优惠券",
				"rewardTypeValue": 3,
				"triggerObject":0
			}, {
				"rewardTypeName": "赠课",
				"rewardTypeValue": 4,
				"triggerObject":0
			}, {
				"rewardTypeName": "返现金",
				"rewardTypeValue": 5,
				"triggerObject":0
			}]
		},
		"time": null,
		"ok": true,
		"fail": false
	},

	//获取活动渠道列表
	"/v1/pro_activity/service_account": {
		"status": 0,
		"message": "success",
		"data": [{
			"wxChannelName": "沪江口语俱乐部",
			"wxChannelValue": 1
		}],
		"time": null,
		"ok": true,
		"fail": false
	},

	//启用禁用活动状态
	"/v1/pro_activity/operation":{//post请求，status，activityId
		"param":{
			status:true,
			activityId:1
		},
		"message": "OK",
	    "status": 0,//接口返回状态
	    "data": true//接口执行成功
	},

	//创建活动或者更新活动
	"/v1/pro_activity":{
	    "message": "OK",
	    "status": 0,//接口执行成功
	    "data": {
	        "validStatus": 0,
	        "validReason": "错误信息",
	        "activityCode": "活动Code",
	        "activityId":"活动Id"
	    }
	},

	//上传素材
	"/v1/pro_activity/material/upload":{
		"message": "OK",
	    "status": 0,//接口执行成功
	    "data": {
	        "width": 1080,
	        "height": 1920,
	        "imageUrl": "http://hjtest.hjfile.cn/hjcc/2018/06/20/2741e1c0348c9f6ab36840d267084bc5.jpg"
	    }
	},

	//查看报表
	"/v1/pro_activity/activityId/report_analyze":{//获取查看报告页面数据 :type:get
		"message": "OK",
		"status": 0,
		"data": {
			"activityId": 123456,//活动编号
			"activityName": "活动名称",//活动名称
			"startDate": "2018-08-15",//开始日期
			"endDate": "2018-09-15",//结束日期
			"activityStatus": 1,//活动状态
			"report": [{
				"key":1,
				"trigger": 3847562834,//活动触达人数
				"uv": 9283472908342,//活动详情UV
				"buildPoster": 345234456,//生成个人海报次数
				"leadConversion": 23354235,//转化例子数
				"demoConversion": 65745674334,//转化DEMO出席数
				"orderConversion": 1232134532098,//转化成单数
				"amountConversion": 234234.00//转化成单金额
				 
			},{
				"key":2,
				"trigger": 3847562834,//活动触达人数
				"uv": 9283472908342,//活动详情UV
				"buildPoster": 345234456,//生成个人海报次数
				"leadConversion": 23354235,//转化例子数
				"demoConversion": 65745674334,//转化DEMO出席数
				"orderConversion": 1232134532098,//转化成单数
				"amountConversion": 234234.00//转化成单金额
				 
			},{
				"key":3,
				"trigger": 3847562834,//活动触达人数
				"uv": 9283472908342,//活动详情UV
				"buildPoster": 345234456,//生成个人海报次数
				"leadConversion": 23354235,//转化例子数
				"demoConversion": 65745674334,//转化DEMO出席数
				"orderConversion": 1232134532098,//转化成单数
				"amountConversion": 234234.00//转化成单金额
				 
			}],
			"leads": {
				"resultData": [
					{   "key":1,
						"leadNumber": 94532,//例子编号
						"advisor": "秋秋",//顾问
						"recommendUser": "人",//推荐人用户
						"leadCreateTime": "2018-06-22 19:00:00",//例子收集时间
						"firstAttribution": "是",//是否首归因
						"salesStage": "不知道是第几阶段",//销售阶段
						"orderAmount": 1200.00 //成单金额
					},
					{	"key":2,
						"leadNumber": 94533,//例子编号
						"advisor": "吊吊",//顾问
						"recommendUser": "人人人",//推荐人用户
						"leadCreateTime": "2018-06-23 20:00:00",//例子收集时间
						"firstAttribution": "是",//是否首归因
						"salesStage": "不知道是第几阶段",//销售阶段
						"orderAmount": 3200.00 //成单金额
					},
					{	"key":3,
						"leadNumber": 94534,//例子编号
						"advisor": "人人",//顾问
						"recommendUser": "人人人人",//推荐人用户
						"leadCreateTime": "2018-06-24 21:00:00",//例子收集时间
						"firstAttribution": "否",//是否首归因
						"salesStage": "不知道是第几阶段",//销售阶段
						"orderAmount": 1500.00 //成单金额
					}
				],
				"pagination": {
					"totalCount": 443298,
					"pageSize": 10,
					"sortColumn": null,
					"currentPageIndex": 1,
					"sortEnum": 0
				}
			}
		}
	},

	//导出excel
	"/v1/pro_reward/export_reward_details":{
		"message": "OK",
		"status": 0,
		"data":true
	},

	//查看转推荐活动：这里面的数据可能错误，不用这个
	"/v1/pro_activity/{activity_id}":{
		"message": "OK",
		"status": 0,
		"data": {
			"id": 123,
			"activityName": "活动名称",
			"saleUnits": [{ //这个和后端商定修改成这样：修改
				"saleUnitName": "成人口语",
				"saleUnitValue": "成人口语",
				"isSelected": true
			}, {
				"saleUnitName": "青少儿口语",
				"saleUnitValue": "青少儿口语"
			}, {
				"saleUnitName": "国内考试",
				"saleUnitValue": "国内考试"
			}, {
				"saleUnitName": "留学",
				"saleUnitValue": "留学"
			}, {
				"saleUnitName": "日语",
				"saleUnitValue": "日语"
			}],
			"startDate": "2018-06-21", //开始日期
			"endDate": "2018-06-25", //结束日期
			"activityTypes": [{ //活动类型: 修改
				"activityTypeName": "裂变活动",
				"activityTypeValue": 1,
				"isSelected": true
			}],
			"triggerTypes": [{//修改
				"triggerTypeName": "提交例子",
				"triggerTypeValue": 1
			}, {
				"triggerTypeName": "完成DEMO",
				"triggerTypeValue": 2
			}, {
				"triggerTypeName": "购课成功",
				"triggerTypeValue": 3
			}],
			"rewardTypes": [{// 修改
				"rewardTypeName": "赠学币",
				"rewardTypeValue": 1,
				"triggerObject":0//0表示推荐人和被推荐人都有，1表示推荐人才有，2表示被推荐人才有
			}, {
				"rewardTypeName": "赠商品",
				"rewardTypeValue": 2
			}, {
				"rewardTypeName": "赠优惠券",
				"rewardTypeValue": 3
			}, {
				"rewardTypeName": "赠课",
				"rewardTypeValue": 4
			}, {
				"rewardTypeName": "返现金",
				"rewardTypeValue": 5
			}],
			"wxAppId": 2, //服务号ID
			"activityRules": "活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则", //活动规则
			"inactiveUrl": "http://www.hujiang.com/1.jpg", // 活动过期页面URL
			"leadMaterialUrl": "http://www.hujiang.com/2.jpg", // 例子页面素材
			"prizeMateriaUrl": "http://www.hujiang.com/3.jpg", // 奖励页面素材
			"triggerCreateRequests": [{ //这个后续慢慢再定
				"triggerObject": 1, // triggerObject=1(推荐人), triggerObject=2(被推荐人)
				"triggerType": 2, // triggerType=1(提交例子), triggerType=2(完成DEMO), triggerType=3(购课成功)
				"triggerDetail": [{}],
				"rewardCreateRequests": [{
					"rewardType": 1, // 奖品类型
					"rewardName": "奖品名称",
					"rewardDetail": [{}] //奖品详细信息
				}]
			}],
			"subMitType": 1, //1启用，2禁用，3草稿 ：只有新建或者下发状态是3草稿的时候，才有草稿按钮
			"activityState": false //活动是启用还是禁用 ：修改
		}
	},

	//活动处理页下拉选项数据+tab选项数据
	"/v1/pro_reward/reward_selects":{
	  "status": 0,
	  "message": "success",
	  "data": {
	    "rewardStatusSelects": [//奖励状态下拉
	      {
	        "rewardStatusName": "未发放",
	        "rewardStatusValue": 1
	      },
	      {
	        "rewardStatusName": "已经发送",
	        "rewardStatusValue": 2
	      },
	      {
	        "rewardStatusName": "终止发放",
	        "rewardStatusValue": 3
	      }
	    ],
	    "triggerObjectSelects": [//角色下拉
	      {
	        "triggerObjectName": "推荐人",
	        "triggerObjectValue": 1
	      },
	      {
	        "triggerObjectName": "被推荐人",
	        "triggerObjectValue": 2
	      }
	    ],
	    "rewardTypeSelects": [//tab横条
	      {
	        "rewardTypeName": "赠学币",
	        "rewardTypeValue": 1
	      },
	      {
	        "rewardTypeName": "赠商品",
	        "rewardTypeValue": 2
	      },
	      {
	        "rewardTypeName": "赠优惠券",
	        "rewardTypeValue": 3
	      },
	      {
	        "rewardTypeName": "赠课",
	        "rewardTypeValue": 4
	      },
	      {
	        "rewardTypeName": "返现金",
	        "rewardTypeValue": 5
	      }
	    ]
	  },
	  "time": null,
	  "ok": true,
	  "fail": false
	},

	//活动处理页查询数据请求:add by chenjiajie
	"/v1/pro_reward/search": {
		"status": 0,
		"message": "success",
		"data": {
			"resultData": [{
				"rewardDetailId": 1, //table的单条数据主键，点击查看处理单需要这个id
				"hjUserId": 0, //用户id
				"hjUserName": "eva", //用户名
				"weChatCode": "o6WoIw3hQh98BzRseJtSdWnI4_Yc",
				"weChatNickName": "WindyGogogo", //微信昵称
				"triggerObject": 2, //角色value
				"triggerObjectName": "被推荐人", //角色
				"triggerType": 1, //触发事件code
				"triggerTypeName": "提交例子", //触发事件名称
				"triggerTime": "2018-06-22T18:58:17", //触发时间
				"rewardStatusName": "终止发放", //奖励状态：要已发放奖励才可以勾选发送通知

				"rewardStatus": 3, //奖励状态code： 1未发放，2已发放，3终止发放 ：（是否发放字段）
				"isCallMessage": false,//false表示没有发送过通知 （是否已通知字段）  ：（已发放已通知：显示再次通知；）； （已发放且未通知：显示发送通知）
				"isSubmitLog":true,//查看处理单code：true表示已经填写过处理单，显示“查看处理单”;否则显示“填写处理单”
				"isRegister": false, //是否注册code  //这个字段 决定的前边选框是否可选 账号未填写 显示提示填写   不显示发送通知或者再次通知

				"rewardType": 1, //奖励形式code
				"rewardTypeName": "赠点", //奖励形式name
				"rewardId": 9, //奖励名称code
				"rewardName": "500个学币", //奖励名称name
				"rewardDetailName":"rewardName的hover效果展示的内容"//hover效果展示的内容
				
			},{
				"rewardDetailId": 2, //table的单条数据主键，点击查看处理单需要这个id
				"hjUserId": 0, //用户id
				"hjUserName": "eva", //用户名
				"weChatCode": "o6WoIw3hQh98BzRseJtSdWnI4_Yc",
				"weChatNickName": "WindyGogogo", //微信昵称
				"triggerObject": 2, //角色value
				"triggerObjectName": "被推荐人", //角色
				"triggerType": 1, //触发事件code
				"triggerTypeName": "提交例子", //触发事件名称
				"triggerTime": "2018-06-22T18:58:17", //触发时间
				"rewardStatusName": "未发放", //奖励状态：要已发放奖励才可以勾选发送通知

				"rewardStatus": 1, //奖励状态code： 1未发放，2已发放，3终止发放 ：（是否发放字段）
				"isCallMessage": true,//false表示没有发送过通知 （是否已通知字段）  ：（已发放已通知：显示再次通知；）； （已发放且未通知：显示发送通知）
				"isSubmitLog":true,//查看处理单code：true表示已经填写过处理单，显示“查看处理单”;否则显示“填写处理单”
				"isRegister": true, //是否注册code  //这个字段 决定的前边选框是否可选 账号未填写 显示提示填写   不显示发送通知或者再次通知

				"rewardType": 1, //奖励形式code
				"rewardTypeName": "赠点", //奖励形式name
				"rewardId": 9, //奖励名称code
				"rewardName": "500个学币", //奖励名称name
				"rewardDetailName":"rewardName的hover效果展示的内容"//hover效果展示的内容
				
			},{
				"rewardDetailId": 3, //table的单条数据主键，点击查看处理单需要这个id
				"hjUserId": 0, //用户id
				"hjUserName": "eva", //用户名
				"weChatCode": "o6WoIw3hQh98BzRseJtSdWnI4_Yc",
				"weChatNickName": "WindyGogogo", //微信昵称
				"triggerObject": 2, //角色value
				"triggerObjectName": "被推荐人", //角色
				"triggerType": 1, //触发事件code
				"triggerTypeName": "提交例子", //触发事件名称
				"triggerTime": "2018-06-22T18:58:17", //触发时间
				"rewardStatusName": "未发放", //奖励状态：要已发放奖励才可以勾选发送通知

				"rewardStatus": 1, //奖励状态code： 1未发放，2已发放，3终止发放 ：（是否发放字段）
				"isCallMessage": true,//false表示没有发送过通知 （是否已通知字段）  ：（已发放已通知：显示再次通知；）； （已发放且未通知：显示发送通知）
				"isSubmitLog":false,//查看处理单code：true表示已经填写过处理单，显示“查看处理单”;否则显示“填写处理单”
				"isRegister": true, //是否注册code  //这个字段 决定的前边选框是否可选 账号未填写 显示提示填写   不显示发送通知或者再次通知

				"rewardType": 1, //奖励形式code
				"rewardTypeName": "赠点", //奖励形式name
				"rewardId": 9, //奖励名称code
				"rewardName": "500个学币", //奖励名称name
				"rewardDetailName":"rewardName的hover效果展示的内容"//hover效果展示的内容
				
			},{
				"rewardDetailId": 4, //table的单条数据主键，点击查看处理单需要这个id
				"hjUserId": 0, //用户id
				"hjUserName": "eva", //用户名
				"weChatCode": "o6WoIw3hQh98BzRseJtSdWnI4_Yc",
				"weChatNickName": "WindyGogogo", //微信昵称
				"triggerObject": 2, //角色value
				"triggerObjectName": "被推荐人", //角色
				"triggerType": 1, //触发事件code
				"triggerTypeName": "提交例子", //触发事件名称
				"triggerTime": "2018-06-22T18:58:17", //触发时间
				"rewardStatusName": "已发放", //奖励状态：要已发放奖励才可以勾选发送通知

				"rewardStatus": 2, //奖励状态code： 1未发放，2已发放，3终止发放 ：（是否发放字段）
				"isCallMessage": false,//false表示没有发送过通知 （是否已通知字段）  ：（已发放已通知：显示再次通知；）； （已发放且未通知：显示发送通知）
				"isSubmitLog":false,//查看处理单code：true表示已经填写过处理单，显示“查看处理单”;否则显示“填写处理单”
				"isRegister": true, //是否注册code  //这个字段 决定的前边选框是否可选 账号未填写 显示提示填写   不显示发送通知或者再次通知

				"rewardType": 1, //奖励形式code
				"rewardTypeName": "赠点", //奖励形式name
				"rewardId": 9, //奖励名称code
				"rewardName": "500个学币", //奖励名称name
				"rewardDetailName":"rewardName的hover效果展示的内容"//hover效果展示的内容
				
			},{
				"rewardDetailId": 5, //table的单条数据主键，点击查看处理单需要这个id
				"hjUserId": 0, //用户id
				"hjUserName": "eva", //用户名
				"weChatCode": "o6WoIw3hQh98BzRseJtSdWnI4_Yc",
				"weChatNickName": "WindyGogogo", //微信昵称
				"triggerObject": 2, //角色value
				"triggerObjectName": "被推荐人", //角色
				"triggerType": 1, //触发事件code
				"triggerTypeName": "提交例子", //触发事件名称
				"triggerTime": "2018-06-22T18:58:17", //触发时间
				"rewardStatusName": "已发放", //奖励状态：要已发放奖励才可以勾选发送通知

				"rewardStatus": 2, //奖励状态code： 1未发放，2已发放，3终止发放 ：（是否发放字段）
				"isCallMessage": true,//false表示没有发送过通知 （是否已通知字段）  ：（已发放已通知：显示再次通知；）； （已发放且未通知：显示发送通知）
				"isSubmitLog":false,//查看处理单code：true表示已经填写过处理单，显示“查看处理单”;否则显示“填写处理单”
				"isRegister": true, //是否注册code  //这个字段 决定的前边选框是否可选 账号未填写 显示提示填写   不显示发送通知或者再次通知

				"rewardType": 1, //奖励形式code
				"rewardTypeName": "赠点", //奖励形式name
				"rewardId": 9, //奖励名称code
				"rewardName": "500个学币", //奖励名称name
				"rewardDetailName":"rewardName的hover效果展示的内容"//hover效果展示的内容
				
			}],
			"pagination": {
				"totalCount": 200,
				"pageSize": 40,
				"sortColumn": null, //不用
				"currentPageIndex": 1,
				"sortEnum": 0 //不用
			}
		},
		"time": null,
		"ok": true,
		"fail": false
	},

	//校验productsId是否有效
	"/v1/pro_activity/validate_product_id":{
		"status": 1,//0表示成功；成功的时候不需要错误信息
		"message": "success",
		"data": {
			"validStatus": -1,
			"validReason": "全部商品ID不合法"
		},
		"time": null,
		"fail": false,
		"ok": true
	},

	//批量发送通知
	"/v1/pro_reward/batch_trigger_notice":{
		"param": {
			"noticeType": 1, //1.常规多选 2 全选
			"rewardDetailIds": [111, 11, 1],
			"paramData": { //当nocityType 为2生效 （增加弹窗，具体文字待定）
				"hjUserId": 0, //用户id
				"rewardStatus": 1, //奖励状态
				"triggerEndDate": "2018-06-25T02:39:33.775Z", //结束时间
				"triggerObject": 2, //角色
				"triggerStartDate": "2018-06-01T02:39:33.775Z" //开始时间
			}
		},
		"status": 0,//网络请求成功
		"message": "success",
		"data": true,//请求操作成功
		"time": null,
		"ok": true,
		"fail": false
	},

	//获取日志列表
	"/v1/reward_log_list/{rewardDetailId}": {
		"status": 0,
		"message": "success",
		"data": {
			current: {//这个参数，在发送填写处理单的时候用到
				"rewardStatus": 1,//当前选中的rewardStatus，其实就是表格数据中的那个rewardStatus，这个没用
				"rewardDetailId": 16, //数据主键
				"memo": "45632178654xxx"//当前的备注内容，编辑页为空，查看页才有
			},
			logList: [ //无分页
				{
					"createUserId": 132,
					"createUserName": "张翠雪", //第一个字段：名称
					"logMemo": "修改了备注", //第二个字段
					"memo": "备注巴拉巴拉巴拉", //备注信息
					"createTime": "2018-06-25T15:26:19" //第三个字段
				}, {
					"createUserId": 132,
					"createUserName": "张翠雪",
					"logMemo": "奖励状态从未发放变更为已经发送",
					"memo": "巴拉巴拉巴拉",
					"createTime": "2018-06-25T15:27:28"
				}, {
					"createUserId": 132,
					"createUserName": "张翠雪",
					"logMemo": "奖励状态从已经发送变更为未发放",
					"memo": "巴拉巴拉",
					"createTime": "2018-06-25T15:56:50"
				}
			]
		},
		"time": null,
		"ok": true,
		"fail": false
	},

	//填写处理单-提交
	"/v1/pro_reward/add_reward_log": {
		param: {//请求参数
			"memo": "巴拉巴拉", //处理备注信息
			"rewardDetailId": 16, //数据主键
			"rewardStatus": 1 //奖励状态，和查询tablelist的时候的奖励状态一样
		},

		"status": 0,
		"message": "success",
		"data": {
			"isValid": true,
			"validReason": "填写处理单成功"
		},
		"time": null,
		"ok": true,
		"fail": false
	}
}
