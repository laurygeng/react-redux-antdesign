//后端api文档地址:
// http://wiki.yeshj.com/pages/viewpage.action?pageId=46897146
// http://wiki.yeshj.com/pages/viewpage.action?pageId=46901243

export default {

	//列表页按钮数据 /v1/pro_activity/list/regulation
	"/v1/pro_activity/list/regulation":{
		
		param:{
			pageNum:1
		},
		"status":0,
		"message":null,
		"data":
		{"resultData":[{"orderId":100009653,"dealCost":"0.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100009653","statusDes":"已配送","payMethodDes":"--","payDateTime":"2017-11-02 13:44","enrollDateTime":"2017-11-02 13:44","mproductName":"1101kikiIAP新班（定制班）"},{"orderId":100009652,"dealCost":"0.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100009652","statusDes":"已配送","payMethodDes":"--","payDateTime":"2017-11-02 13:44","enrollDateTime":"2017-11-02 13:44","mproductName":"1101kikiIAP新班（定制班）"},{"orderId":100009651,"dealCost":"0.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100009651","statusDes":"已配送","payMethodDes":"--","payDateTime":"2017-11-02 13:43","enrollDateTime":"2017-11-02 13:43","mproductName":"1101kikiIAP新班（定制班）"},{"orderId":100009642,"dealCost":"0.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100009642","statusDes":"已配送","payMethodDes":"--","payDateTime":"2017-11-02 13:30","enrollDateTime":"2017-11-02 13:30","mproductName":"1101kikiIAP新班（定制班）"},{"orderId":100009641,"dealCost":"0.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100009641","statusDes":"已配送","payMethodDes":"--","payDateTime":"2017-11-02 13:30","enrollDateTime":"2017-11-02 13:30","mproductName":"1101kikiIAP新班（定制班）"},{"orderId":100009574,"dealCost":"0.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100009574","statusDes":"已配送","payMethodDes":"--","payDateTime":"2017-11-02 10:21","enrollDateTime":"2017-11-02 10:21","mproductName":"1101kikiIAP新班（定制班）"},{"orderId":100009570,"dealCost":"0.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100009570","statusDes":"已配送","payMethodDes":"--","payDateTime":"2017-11-02 10:09","enrollDateTime":"2017-11-02 10:09","mproductName":"1101kikiIAP新班（定制班）"},{"orderId":100009568,"dealCost":"0.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100009568","statusDes":"已配送","payMethodDes":"--","payDateTime":"2017-11-02 10:08","enrollDateTime":"2017-11-02 10:08","mproductName":"1101kikiIAP新班（定制班）"},{"orderId":100008794,"dealCost":"0.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100008794","statusDes":"已配送","payMethodDes":"--","payDateTime":"2017-10-30 13:30","enrollDateTime":"2017-10-30 13:30","mproductName":"英语零基础直达职场全能【随到随学班】"},{"orderId":100006865,"dealCost":"750.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100006865","statusDes":"已取消","payMethodDes":"支付宝直充","payDateTime":"--","enrollDateTime":"--","mproductName":"【沪江•牛津】零基础直达商务英语中级精品1V6【4月班】"}],
		"pagination":{"totalCount":1700,"pageSize":10,"sortColumn":null,"currentPageIndex":2,"sortEnum":0}},
		"time":null,
		"ok":true,
		"fail":false
	},

	"/v1/pro_activity/list/regulation2":{
		
		param:{
			pageNum:1
		},
		"status":0,
		"message":null,
		"data":
		{"resultData":[{"orderId":1111111111,"dealCost":"0.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100009653","statusDes":"已配送","payMethodDes":"--","payDateTime":"2017-11-02 13:44","enrollDateTime":"2017-11-02 13:44","mproductName":"1101kikiIAP新班（定制班）"},{"orderId":2222222222,"dealCost":"0.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100009652","statusDes":"已配送","payMethodDes":"--","payDateTime":"2017-11-02 13:44","enrollDateTime":"2017-11-02 13:44","mproductName":"1101kikiIAP新班（定制班）"},{"orderId":3333333333,"dealCost":"0.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100009651","statusDes":"已配送","payMethodDes":"--","payDateTime":"2017-11-02 13:43","enrollDateTime":"2017-11-02 13:43","mproductName":"1101kikiIAP新班（定制班）"},{"orderId":4444444444,"dealCost":"0.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100009642","statusDes":"已配送","payMethodDes":"--","payDateTime":"2017-11-02 13:30","enrollDateTime":"2017-11-02 13:30","mproductName":"1101kikiIAP新班（定制班）"},{"orderId":5555555555,"dealCost":"0.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100009641","statusDes":"已配送","payMethodDes":"--","payDateTime":"2017-11-02 13:30","enrollDateTime":"2017-11-02 13:30","mproductName":"1101kikiIAP新班（定制班）"},{"orderId":666666666,"dealCost":"0.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100009574","statusDes":"已配送","payMethodDes":"--","payDateTime":"2017-11-02 10:21","enrollDateTime":"2017-11-02 10:21","mproductName":"1101kikiIAP新班（定制班）"},{"orderId":100009570,"dealCost":"0.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100009570","statusDes":"已配送","payMethodDes":"--","payDateTime":"2017-11-02 10:09","enrollDateTime":"2017-11-02 10:09","mproductName":"1101kikiIAP新班（定制班）"},{"orderId":100009568,"dealCost":"0.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100009568","statusDes":"已配送","payMethodDes":"--","payDateTime":"2017-11-02 10:08","enrollDateTime":"2017-11-02 10:08","mproductName":"1101kikiIAP新班（定制班）"},{"orderId":100008794,"dealCost":"0.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100008794","statusDes":"已配送","payMethodDes":"--","payDateTime":"2017-10-30 13:30","enrollDateTime":"2017-10-30 13:30","mproductName":"英语零基础直达职场全能【随到随学班】"},{"orderId":100006865,"dealCost":"750.00","orderIdUrl":"http://qa.backend.hujiang.com/admin/order/orderdetail?orderId=100006865","statusDes":"已取消","payMethodDes":"支付宝直充","payDateTime":"--","enrollDateTime":"--","mproductName":"【沪江•牛津】零基础直达商务英语中级精品1V6【4月班】"}],
		"pagination":{"totalCount":1700,"pageSize":10,"sortColumn":null,"currentPageIndex":2,"sortEnum":0}},
		"time":null,
		"ok":true,
		"fail":false
	},

}
