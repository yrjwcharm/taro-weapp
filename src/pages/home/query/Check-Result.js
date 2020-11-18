import Taro, {Component} from '@tarojs/taro'
import {View, Text, Image, ScrollView, Swiper} from '@tarojs/components'
import './Check-Result.scss'
import {AtList, AtListItem} from "taro-ui";

const Check_Result = (props) => {
  const goToDetail=()=>{
    Taro.navigateTo({
      url: '/pages/home/detail/Detail',
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
    <View className='container'>
      <View className='container-wrap'>
        <AtList>
          <AtListItem
            arrow='right'
            title='预约人:金灿灿'
            note='2019-01-10  周四'
            hasBorder={true}
            extraText='立即查看'
            onClick={goToDetail}
          />
        </AtList>
      </View>
      <View className='container-wrap'>
        <AtList>
          <AtListItem
            arrow='right'
            title='预约人:金灿灿'
            note='2019-01-10  周四'
            hasBorder={false}
            extraText='结果正在生成中'
          />
        </AtList>
      </View>
    </View>
  )

}
Check_Result.config = {
  navigationBarTitleText: '检验结果查询'
}
export default Check_Result
