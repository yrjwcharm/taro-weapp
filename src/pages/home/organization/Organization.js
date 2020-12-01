import Taro, {Component, PureComponent, useState} from '@tarojs/taro'
import {View, Text, ScrollView, Image} from '@tarojs/components'
import {AtSearchBar, AtIcon} from 'taro-ui'
import Marker from '@assets/home/location.png';
import Pic from '@assets/home/pic.svg'
import './Organization.scss'

class Organization extends PureComponent {
  state={
    value:'',
    couponList: [],
    code: '',
    status: 0,
    page: 1,
    limit: 10,
    count: 0,
    scrollTop: 0,
    showPage: false
  }
  onPullDownRefresh() {
    Taro.showNavigationBarLoading() //在标题栏中显示加载
    // this.getCartList();
    Taro.hideNavigationBarLoading() //完成停止加载
    Taro.stopPullDownRefresh() //停止下拉刷新
  }

  onChange = () => {

  }
  goToAddPersonInfo = () => {
    Taro.navigateTo({
      url: '/pages/home/write-person-info/AddPersonData',
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
    render(){
      return (
        <View className='container'>
          <View className='container_header'>
            <View className='container_header_location'>
              <Image src={Marker} className='container_header_location_marker'/>
              <Text className='container_header_location_city'>北京</Text>
            </View>
            <View className='container_header_wrap'>
              <AtSearchBar
                className='container_header_wrap_city'
                value={this.state.value}
                onChange={this.onChange}
                placeholder={'搜索医院名称'}
              />
            </View>
          </View>
          <View className='container_list_item' onClick={this.goToAddPersonInfo}>
            <Image src={Pic} className='container_list_item_pic'/>
            <View className='container_list_item_desc'>
              <Text className='container_list_item_desc_hospital'>大厂回族自治县人民医院</Text>
              <Text className='container_list_item_desc_item'>核酸检测</Text>
              <Text className='container_list_item_desc_address'>地址：北京市海淀区知春路53号</Text>
            </View>
          </View>
        </View>

      )
    }
  }

Organization.config = {
  navigationBarTitleText: '新冠核算检测'
}
export default Organization
