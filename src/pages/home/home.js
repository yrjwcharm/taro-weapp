import Taro, {Component} from '@tarojs/taro'
import {View, Text, Image, ScrollView, Swiper} from '@tarojs/components'
import {Loading} from '@components'
import {connect} from '@tarojs/redux'
import * as actions from '@actions/home'
import {getWindowHeight} from '@utils/style'
import './home.scss'
import Banner from './banner'
import Carousel from '@assets/home/banner.png'
const RECOMMEND_SIZE = 20

// @connect(state => state.home, { ...actions, dispatchCartNum })
const Home = (props) => {
  const goToDetail = () => {
    Taro.navigateTo({
      url: '/pages/home/query/Check-Result',
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
  const goToOrganization = () => {
    Taro.navigateTo({
      url: '/pages/home/organization/Organization',
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
  return (
    <View className='container'>
      <Banner list={[{rank:0,img:Carousel},{rank: 1,img:Carousel},{rank: 2,img:Carousel}]}/>
      <View className='container_section' onClick={goToOrganization}>
          <View className='home_wrap'>
            <Image className='home_wrap_img'
                   src={'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'}/>
            <View className='home_wrap_desp'>
              <Text className='home_wrap_desp_title'>个人核酸检测预约</Text>
              <Text className='home_wrap_desp_detail'>检验结果查询</Text>
            </View>
          </View>
        <View className='home_wrap' onClick={goToDetail}>
            <Image className='home_wrap_img'
                   src={'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'}/>
            <View className='home_wrap_desp'>
              <Text className='home_wrap_desp_title'>检验结果查询</Text>
              <Text className='home_wrap_desp_detail'>最快24小时出结果</Text>
            </View>
          </View>
      </View>
      <View className='container_footer'>
        <Text className='container_footer_title'>预约服务说明</Text>
        <Text className='container_footer_desp'>请根据个人实际情况填写资料进行预约检测，个人预约仅限公民使用本人身份证预约不可待办预约，平台仅提供线上预约请预约后到医院线下缴费，具体服务费用请按照卫生部门及医疗机构公布为准</Text>
      </View>
    </View>
  )

}
Home.config = {
  navigationBarTitleText: '新冠核酸检测'
}

export default Home
