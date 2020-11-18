import Taro, {Component} from '@tarojs/taro'
import {View, Text, ScrollView, Image} from '@tarojs/components'
import {AtList, AtListItem} from "taro-ui"
import Pic from '@assets/home/pic.png'
import './ImmediateOrder.scss'
const ImmediateOrder =(props)=>{
  const onScrollToUpper =()=>{

  }
  const onScroll = ()=>{

  }
  const scrollStyle = {
    height: '150px'
  }
  const scrollTop = 0
  const Threshold = 20
  const vStyleA = {
    height: '150px',
    'background-color': 'rgb(26, 173, 25)'
  }
  const vStyleB = {
    height: '150px',
    'background-color': 'rgb(39,130,215)'
  }
  const vStyleC = {
    height: '150px',
    'background-color': 'rgb(241,241,241)',
    color: '#333'
  }
  return(
    <View className='container'>
      <View className='container_header'>
        <View className='container_header_list_item'>
          <Image src={Pic} className='container_header_list_item_pic'/>
          <View className='container_header_list_item_desc'>
            <Text className='container_header_list_item_desc_hospital'>大厂回族自治县人民医院</Text>
            <Text className='container_header_list_item_desc_item'>核酸检测</Text>
            <Text className='container_header_list_item_desc_address'>地址：北京市海淀区知春路53号</Text>
          </View>
        </View>
        <Text className='container_header_orderTime'>预约时间</Text>
        <ScrollView
          className='scrollview'
          scrollX
          scrollWithAnimation
          scrollTop={scrollTop}
          style={scrollStyle}
          lowerThreshold={Threshold}
          upperThreshold={Threshold}
          onScrollToUpper={onScrollToUpper} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
          onScroll={onScroll}
        >
          <View style={vStyleA}>A</View>
          <View style={vStyleB}>B</View>
          <View style={vStyleC}>C</View>
        </ScrollView>

      </View>
    </View>
  )
}
ImmediateOrder.config = {
  navigationBarTitleText: '新冠核酸检测'
}
export  default  ImmediateOrder
