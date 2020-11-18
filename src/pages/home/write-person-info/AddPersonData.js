import Taro, {Component, useState} from '@tarojs/taro'
import {View, Text, ScrollView, Image} from '@tarojs/components'
import {AtList, AtListItem, AtTextarea} from "taro-ui"
import './AddPersonData.scss'

const AddPersonData = (props) => {
  const [detailAddress, setDetailAddress] = useState('');
  const handleChange = () => {

  }
  const goToImmediatelyOrder=()=>{
    Taro.navigateTo({
      url: '/pages/home/immediate-order/ImmediateOrder',
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
      <View className='container_section'>
        <AtList>
          <AtListItem title='姓名' extraText='闫瑞锋' onClick={this.handleClick}/>
          <AtListItem title='电话' extraText='18311410379'/>
          <AtListItem title='请输入验证码' extraText='3838'/>
          <AtListItem title='身份证号'  extraText='142601199412139117'/>
          <AtListItem title='地址' hasBorder={false}  extraText='北京市海淀区知春路' arrow='right'/>
        </AtList>
        <AtTextarea
          value={detailAddress}
          onChange={handleChange}
          maxLength={200}
          placeholder='请输入详细地址'
        />
      </View>
      <View className='container__footer' onClick={goToImmediatelyOrder}>
        <View className='container_footer'>
          <Text className='container_footer_next'>下一步</Text>
        </View>
      </View>
    </View>
  )
}
AddPersonData.config = {
  navigationBarTitleText: '填写信息'
}
export default AddPersonData
