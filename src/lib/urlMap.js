import { Modal } from 'antd';
import $ from 'jquery';
let config={
    // localClassHost:"local.backend.hjclass.com:8866",//nginx的端口
    // qaClassHost: 'backend.hjclass.com',//192.168.197.144:10131,
    // yzClassHost: 'backend.hjclass.com',//192.168.197.144:10131,
    classHost: 'backend.hjclass.com'//192.168.197.144:10131,
};

//ajax基础model，用于集成mock数据,后续其他全局ajax封装都可以写在这里面
export class BaseModel{
    constructor(opts){
        this.opts=opts;
        this.init();
    }

    init(){
        var opts=this.opts;
        if(this.opts.mock&&window.mockData){//url后有mock参数，且ajax手动添加了mock参数，才会走mock，正常url请求都是走线上数据
            this.promise=new Promise(function(resolve,reject){
                setTimeout(function(){
                    resolve(window.mockData[opts.mockUrl||opts.url]);
                    debugger
                },1000);//settimeout模仿ajax；虽然不是很完美，但却非常简单，暂时这么用
            });
        }else{
            this.promise=new Promise(function(resolve,reject){
                //var host=getClassWebapiHost();
                if(opts.type=="get"){
                    $.ajax({
                        type:(opts&&opts.type)?opts.type:"get",
                        //url:host+opts.url,
                        url:opts.url,
                        data:opts.data,
                        success:function(data){
                            if(data.status==0){//成功
                                resolve(data)//在异步操作成功时调用
                            }else{//status不为0表示失败
                                reject(data);//在异步操作失败时调用
                            }
                        },
                        //异常error
                        error:function(e){//通用网络错误不作处理
                            console.log(e);
                        }
                    });
                }else{
                    $.ajax({
                        type:(opts&&opts.type)?opts.type:"get",
                        //url:host+opts.url,
                        url:opts.url,
                        data:JSON.stringify(opts.data),
                        dataType: 'json',//如果不用dataType，默认传的是form数据，数据只能传一层，多层的数据会按照属性遍历分开传
                        contentType: 'application/json',
                        success:function(response){
                            if(response.status==0){//成功

                                // if(response.data){
                                //     if(response.data.validStatus===0||response.data===true){//有的时候，之下发true，就表示请求成功
                                        
                                //     }else{
                                //         Modal.error({//请求失败
                                //             title: '请求失败',
                                //             content: response.data.validReason||"",
                                //         });
                                //     }
                                // }else{
                                //     Modal.error({
                                //         title: '请求失败',
                                //         content: "",
                                //     });
                                // }

                                // 请求成功的具体
                                // if(response.message){
                                //     Modal.success({
                                //         title: '请求成功',
                                //         content: response.message,
                                //     });
                                // }

                                resolve(response)//在异步操作成功时调用
                            }else{//status不为0表示请求失败
                                Modal.error({
                                    title: '请求失败',
                                    content: response.message||"",
                                });
                                reject(response);//在异步操作失败时调用
                            }
                        },
                        //异常error
                        error:function(e){
                            Modal.error({
                                title: '请求失败',
                                content: "请求失败，请重新发起请求！",
                            });
                        }
                    });
                    
                }
                
            })
        }
    }
}

//获取各个环境下的前缀
// export function getClassWebapiHost() {
//     let webapiHost,
//         host = location.host;
//     if (/^local/i.test(host)) {
//         //接口发布到哪个分支环境就配成哪个分支环境
//         webapiHost = `//local.${config.classHost}:${location.port}/promotion-api`;//需要还原成qa
//     } else if (/^qa\d/i.test(host)) {
//         let mstrs = location.host.match(/^qa\d/i);
//         let qa=mstrs?mstrs[0]:'qa1';
//         webapiHost = `//${qa}${config.classHost}/promotion-api`;
//     } else if (/^qa/i.test(host)) {
//         webapiHost = `//qa${config.classHost}/promotion-api`;
//     } else if (/^yz/i.test(host)) {
//         webapiHost = `//yz${config.classHost}/promotion-api`;
//     } else {
//         webapiHost = `//${config.classHost}/promotion-api`;
//     }

//     return webapiHost;
// }

//获取环境
// export function getENV() {
//     let host = location.host;
//     if (/^local/i.test(host)) {
//         return 'local';
//     } else if (/^qa\d?/i.test(host)) {
//         return 'qa';
//     } else if (/^yz/i.test(host)) {
//         return 'yz';
//     } else {
//         return '';
//     }
// }


