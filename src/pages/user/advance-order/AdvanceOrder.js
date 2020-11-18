import Taro, {Component, useState} from '@tarojs/taro'
import {View, Text, ScrollView, Image} from '@tarojs/components'
import {AtList, AtTabs, AtTabsPane, AtButton, AtListItem, } from "taro-ui"
import './AdvanceOrder.scss'

const AdvanceOrder = (props) => {
  const [current, setCurrent] = useState(0);
  const [tabList, setTabList] = useState([{title: '全部'}, {title: '已预约'}, {title: '已完成'}, {title: '已取消'}])
  const handleClick = (value) => {
    setCurrent(value);
  }
  const goToOrderAppointSuccess =()=>{
    Taro.navigateTo({
      url: '/pages/user/order-success/OrderAppointSuccess',
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
      <View className='container_body'>
        <AtTabs current={current} tabList={tabList} onClick={handleClick}>
          {tabList.map((item, index) => {
            return (
              <AtTabsPane key={index.toString()} current={current} index={index}>
                <View className='container_body_listItem'>
                  <AtList>
                    <AtListItem
                      note='2019-01-10 周四'
                      arrow='right'
                      extraText='订单已取消'
                      title='预约人:金灿灿'
                    />
                  </AtList>
                  <View className='container_body_listItem_operate'>
                    <AtButton circle size='small' className='order_op_0'>再次预约</AtButton>
                    <AtButton circle size='small' className='order_op_1'>删除</AtButton>
                  </View>
                </View>
                <View className='container_body_listItem'>
                  <AtList>
                    <AtListItem
                      note='2019-01-10 周四'
                      arrow='right'
                      extraText='订单已完成'
                      title='预约人:金灿灿'
                    />
                  </AtList>
                  <View className='container_body_listItem_operate'>
                    <AtButton circle size='small' className='order_op_1'>再次预约</AtButton>
                  </View>
                </View>
                <View className='container_body_listItem' onClick={goToOrderAppointSuccess}>
                  <AtList>
                    <AtListItem
                      note='2019-01-10 周四'
                      arrow='right'
                      extraText='订单已预约'
                      title='预约人:金灿灿'
                    />
                  </AtList>
                  <View className='container_body_listItem_operate'>
                    <AtButton circle size='small' className='order_op_1'>取消预约</AtButton>
                  </View>
                </View>
              </AtTabsPane>
            )
          })}
        </AtTabs>
      </View>
    </View>
  )
}
AdvanceOrder.config = {
  navigationBarTitleText: '我的预约'
}
export default AdvanceOrder
