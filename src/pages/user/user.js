import Taro, {Component} from '@tarojs/taro'
import {View, Text, ScrollView, Image} from '@tarojs/components'
import defaultAvatar from '@assets/default-avatar.png'
import * as actions from '@actions/user'
// import { dispatchCartNum } from '@actions/cart'
import {AtList, AtListItem} from "taro-ui"
import './user.scss'

// @connect(state => state.user, { ...actions, dispatchCartNum })
const User = (props) => {
  const goToAdvanceOrder=()=>{
    Taro.navigateTo({
      url: '/pages/user/advance-order/AdvanceOrder',
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function(data) {
          console.log(data)
        },
        someEvent: function(data) {
          console.log(data)
        }
      },
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
      }
    })
  }
  return (
    <View className='user-profile'>
      <View className='user-profile-avatar'>
        <Image
          className='user-profile-avatar-img'
          src={defaultAvatar}
          onClick={this.handleLogin}
        />
        <Text className='user-profile-avatar-nickname'>闫瑞丰</Text>
      </View>
      <AtListItem
        thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
        title='我的预约'
        className='user-profile-wrap'
        arrow='right'
        onClick={goToAdvanceOrder}
        hasBorder={false}
      />
      <View className='user_body'/>
    </View>
  )

}
User.config = {
  navigationBarTitleText: '个人中心'
}
export default User
