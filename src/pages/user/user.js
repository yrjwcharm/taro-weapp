import Taro, {Component, useEffect, useState} from '@tarojs/taro'
import {View, Text, ScrollView, Image} from '@tarojs/components'
import * as actions from '@actions/user'
import Arrow from '@assets/home/check-result-query/arrow__right.svg'
import List from '@assets/ucenter/list.svg';
import ArrowRight from '@assets/ucenter/arrow.png'
import './user.scss'
import DefaultAvatar from '@assets/ucenter/avatar.png'
// @connect(state => state.user, { ...actions, dispatchCartNum })
const User = (props) => {
  const [boolAuth,setBoolAuth] = useState(false)
  const [nickName,setNickName] = useState('');
  const [avatar,setAvatar] = useState('');
  const goToAdvanceOrder = () => {
    Taro.navigateTo({
      url: '/pages/user/advance-order/AdvanceOrder',
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function (data) {
          console.log(data)
        },
        someEvent: function (data) {
          console.log(data)
        }
      },
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', {data: 'test'})
      }
    })
  }
  const _goToAuditRecord=()=>{

  }
  const _goToAuth=()=>{
   !boolAuth&&Taro.navigateTo({
        url:'/pages/auth/login/login'
      })
  }
  useEffect(() => {
    Taro.getSetting({
      success: function (res) {
        if (!res.authSetting['scope.userInfo']) {
          setBoolAuth(false)
          Taro.navigateTo({
            url:'/pages/auth/login/login'
          })
        } else {
          setBoolAuth(true);
          Taro.getUserInfo({
            success:function (res){
              let userInfo = res.userInfo
              let nickName = userInfo.nickName
              let avatarUrl = userInfo.avatarUrl
              // let gender = userInfo.gender //性别 0：未知、1：男、2：女
              // let province = userInfo.province
              // let city = userInfo.city
              // let country = userInfo.country
                setNickName(nickName);
                setAvatar(avatarUrl);
               Taro.setStorageSync('userInfo',userInfo);
            }
          })
        }
      }
    })
  }, [])
  const listItems = [
    {label:'审核记录',id:0,onPress:_goToAuditRecord},
    {label:'我的预约',id:1,onPress:goToAdvanceOrder}
  ]
  const goToPage=(id)=>{
    if(id ===0)
      _goToAuditRecord();
    else
      goToAdvanceOrder();
  }
  return (
    <View className='container'>
      <View className='header'>
        <View className='header_wrap' onClick={_goToAuth}>
          <Image src={boolAuth?avatar:DefaultAvatar} className='header_wrap_avatar'/>
          <Text className='header_wrap_username'>{boolAuth?nickName:'立即登录'}</Text>
          {!boolAuth&&<Image src={Arrow} className='header_wrap_arrow'/>}
        </View>
      </View>
      {listItems.map((item,index)=>{
        return(
          <View className='section' key={item.id+""} onClick={()=>goToPage(item.id)}>
            <View className='section_wrap'>
              <View className='section_wrap_left'>
                <Image src={List} className='section_wrap_left_list'/>
                <Text className='section_wrap_left_label'>{item.label}</Text>
              </View>
              <Image src={ArrowRight} className='section_wrap_right'/>
            </View>
          </View>
        )
      })}
    </View>
  )

}
User.config = {
  navigationBarTitleText: '我的'
}
export default User
