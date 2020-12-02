import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import {set as setGlobalData, get as getGlobalData} from './global_data';
import Index from './pages/'

import configStore from './store'

import './app.scss'
import * as user from "./utils/user";
import {loginByWXApi} from "./services/auth";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {
  config = {
    pages: [
      'pages/home/home',
      'pages/auth/login/login',
      'pages/user/user',
      'pages/home/query/Check-Result',
      'pages/home/detail/Detail',
      'pages/user/advance-order/AuditRecord',
      'pages/user/order-success/OrderAppointSuccess',
      'pages/home/organization/Organization',
      'pages/home/write-person-info/AddPersonData',
      'pages/home/immediate-order/ImmediateOrder',
],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '新冠核酸检测',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#999",
      selectedColor: "#3399ff",
      backgroundColor: "#fff",
      borderStyle: 'black',
      list: [{
        pagePath: "pages/home/home",
        iconPath: "./assets/tab-bar/home.png",
        selectedIconPath: "./assets/tab-bar/home-active.png",
        text: "首页"
      }, {
        pagePath:'pages/user/user',
        iconPath: "./assets/tab-bar/user.png",
        selectedIconPath: "./assets/tab-bar/user-active.png",
        text: "我的"
      }],
    },
    "networkTimeout": {
      "request": 10000,
      "downloadFile": 10000
    },
    "debug": true,
  }

  componentWillMount() {
      let appId ="wxae2ca77ab20990ea";
        Taro.login({
          success:function (res){
            console.log(444,res.code);
            loginByWXApi({
              appid:appId,
              code:res.code
            }).then(res=>{
              console.log(333,res);
              const {userId,wxid,unionid,sectionKey } = res.data;
                Taro.setStorageSync('loginInfo',res.data);
            })
          }
        })
  }

  update = () => {
    if(process.env.TARO_ENV === 'weapp') {
      const updateManager = Taro.getUpdateManager();
      Taro.getUpdateManager().onUpdateReady(function() {
        Taro.showModal({
          title: '更新提示',
          content: '新版本已经准备好，是否重启应用？',
          success: function(res) {
            if (res.confirm) {
              // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
              updateManager.applyUpdate()
            }
          }
        })
      })
    }
  }

  componentDidMount () {
    this.update();
  }

  componentDidShow () {
    user.checkLogin().then(res => {
      setGlobalData('hasLogin', true);
    }).catch(() => {
      setGlobalData('hasLogin', false);
    });
  }

  componentDidHide () {}

  componentCatchError () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
