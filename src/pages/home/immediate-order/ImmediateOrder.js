import Taro, {Component} from '@tarojs/taro'
import {View, Text, ScrollView, Image} from '@tarojs/components'
import {AtList, AtListItem} from "taro-ui"
import Pic from '@assets/home/pic.svg'
import Doctor from '@assets/home/immediate-order/doctor.png'
import Dot from '@assets/home/immediate-order/dot.svg'
import Checked from '@assets/home/immediate-order/checked.svg'
import './ImmediateOrder.scss'

const ImmediateOrder = (props) => {
  const onScrollToUpper = () => {

  }
  const onScroll = () => {

  }
  // const scrollStyle = {
  //   height: '136px'
  // }
  const scrollTop = 0
  const Threshold = 20
  return (
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
      </View>
      <View className='section'>
        <Text className='section_orderTime'>预约时间</Text>
        <ScrollView
          className='scrollview'
          scrollX={true}
          scrollWithAnimation
          scrollTop={scrollTop}
          // style={scrollStyle}
          lowerThreshold={Threshold}
          upperThreshold={Threshold}
          onScrollToUpper={onScrollToUpper} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
          onScroll={onScroll}
        >
          <View className='wrap'>
            <View className='wrap_content'>
              <Text className='wrap_content_week'>周-</Text>
              <Text className='wrap_content_date'>02-04</Text>
              <Text className='wrap_content_status'>剩余10</Text>
            </View>
          </View>
          <View className='wrap'>
            <View className='wrap_content'>
              <Text className='wrap_content_week'>周二</Text>
              <Text className='wrap_content_date'>02-04</Text>
              <Text className='wrap_content_status'>剩余10</Text>
            </View>
          </View><View className='wrap'>
          <View className='wrap_content' style={{backgroundColor: `rgba(51, 153, 255, 0.698039215686274)`}}>
            <Text className='wrap_content_week' style={{color: '#fff'}}>周三</Text>
            <Text className='wrap_content_date' style={{color: '#fff'}}>02-04</Text>
            <Text className='wrap_content_status' style={{color: '#fff'}}>剩余10</Text>
          </View>
        </View><View className='wrap'>
          <View className='wrap_content'>
            <Text className='wrap_content_week'>周四</Text>
            <Text className='wrap_content_date'>02-04</Text>
            <Text className='wrap_content_status'>剩余10</Text>
          </View>
        </View><View className='wrap'>
          <View className='wrap_content'>
            <Text className='wrap_content_week'>周五</Text>
            <Text className='wrap_content_date'>02-04</Text>
            <Text className='wrap_content_status'>剩余10</Text>
          </View>
        </View><View className='wrap'>
          <View className='wrap_content'>
            <Text className='wrap_content_week'>周六</Text>
            <Text className='wrap_content_date'>02-04</Text>
            <Text className='wrap_content_status'>充足</Text>
          </View>
        </View><View className='wrap'>
          <View className='wrap_content'>
            <Text className='wrap_content_week'>周日</Text>
            <Text className='wrap_content_date'>02-04</Text>
            <Text className='wrap_content_status' style={{color: '#3399ff'}}>充足</Text>
          </View>
        </View>

        </ScrollView>
      </View>
      <View className='footer'>
        <Text className='footer_combo'>
          选择套餐
        </Text>
        <View className='footer_comboList'>
          <View className='footer_comboList_leftLayout'>
            <Image src={Doctor} className='footer_comboList_leftLayout_doctor'/>
            <View className='footer_comboList_leftLayout_info'>
              <Text className='footer_comboList_leftLayout_info_title'>
                新冠核算检测套餐
              </Text>
              <View className='footer_comboList_leftLayout_info_itemList'>
                <View style={{display: 'flex', alignItems: 'center',marginTop:'5px'}}>
                  <Image src={Dot} style={{width: '4px', height: '4px', borderRadius: '2px'}}/>
                  <Text style={{color: '#666', marginLeft: '5px', fontSize: '12px'}}>新型冠状病毒核酸检测</Text>
                </View>
                <View style={{display: 'flex', alignItems: 'center'}}>
                  <Image src={Dot} style={{width: '4px', height: '4px', borderRadius: '2px'}}/>
                  <Text style={{color: '#666', marginLeft: '5px', fontSize: '12px'}}>预约挂号</Text>
                </View>
              </View>
              <Text className='footer_comboList_leftLayout_info_money' style={{marginTop: '5px'}}>
                ¥250
              </Text>
            </View>
          </View>
          <Image className='footer_comboList_choice' src={Checked} style={{width: '25px', height: '25px'}}/>
        </View>
      </View>
      <View className='yellow'>
        <Text style={{fontSize:'13px'}}>1</Text>
      </View>
      <View style={{position:'absolute', bottom:0,width:'100%'}}>
          <View className='bottom_wrap'>
            <Text style={{color:'#fff',fontSize:'16px'}}>立即预约</Text>
          </View>
      </View>
    </View>
  )
}
ImmediateOrder.config = {
  navigationBarTitleText: '立即预约'
}
export default ImmediateOrder
