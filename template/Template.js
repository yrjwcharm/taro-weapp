import Taro, {Component} from '@tarojs/taro'
import {View, Text, ScrollView, Image} from '@tarojs/components'
import {AtList, AtListItem} from "taro-ui"
import './Template.scss'
import Detail from "../src/pages/user/detail/Detail";
const Template =(props)=>{
  return(
    <View className='container'>

    </View>
  )
}
Template.config = {
  navigationBarTitleText: '检验结果查询'
}
export  default  Template
