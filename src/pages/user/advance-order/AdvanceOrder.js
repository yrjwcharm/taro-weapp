import Taro, {Component, PureComponent, useState} from '@tarojs/taro'
import {View, Text, ScrollView, Image} from '@tarojs/components'
import {AtList, AtTabs, AtTabsPane, AtButton, AtListItem,} from "taro-ui"
import './AdvanceOrder.scss'
import ArrowRight from '@assets/home/check-result-query/arrow__right.svg'
import {getMyAppointListApi} from "../../../services/user";
import moment from "moment";

export class AdvanceOrder extends PureComponent {
  state = {
    current: 0,
    list: [],
    state:'',
    page: 1,
    limit: 10,
    totalPage: 1,
    userId: '',
    tabList: [{title: '全部',id:0}, {title: '预约中',id:1}, {title: '已预约',id:2}, {title: '已完成',id:3}, {title: '已取消',id:4}]
  }

  componentDidMount() {
    const {userId, wxid, unionid, sectionKey} = Taro.getStorageSync('loginInfo');
    this.setState({userId}, () => {
      this._getList();
    })
  }

  _getList = () => {
    Taro.showLoading({
      title: '加载中...',
    });
    getMyAppointListApi({
      userId: this.state.userId,
      page: this.state.page,
      size: this.state.limit,
      state:this.state.state
    }).then(res => {
      console.log(444, res);
      if (res.code === 200) {
        if (res.data) {
          const {object, totalPage} = res.data;
          if (Array.isArray(object)) {
            this.setState({list: this.state.list.concat(object), totalPage})
          } else {
            this.setState({list: this.state.list.concat([]), totalPage})
          }
        }
      }
      Taro.hideLoading();
    })

  }

  onReachBottom() {
    if (this.state.totalPage > this.state.page) {
      this.setState({
        page: this.state.page + 1
      }, () => {
        this._getList();
      });

    } else {
      Taro.showToast({
        title: '没有更多数据了',
        icon: 'none',
        duration: 2000
      });
      return false;
    }
  }

  handleClick = (value) => {
    let state = '';
    switch (value){
      case 0:
        state = '';
        break;
      case 1:
        state = 0;
        break;
      case 2:
        state = 1;
        break;
      case 3:
        state = 2;
        break;
      case 4:
        state = 3;
        break;
    }
    this.setState({current: value,state,page:1,list:[]},()=>{
      this._getList();
    })
  }
  goToPage = (item) => {
    if(item.state ==2) {
      Taro.navigateTo({
        url: '/pages/user/order-success/OrderAppointSuccess',
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
  }
  _getWeek=(date)=>{
    let week = moment(date).day()
    switch (week){
      case 0:
        return '周日';
      case 1:
        return '周一';
      case 2:
        return '周二';
      case 3:
        return '周三';
      case 4:
        return '周四';
      case 5:
        return '周五';
      case 6:
        return '周六'
    }
  }
  render() {
    const {current, tabList,list} = this.state;
    console.log(333,list);
    return (
      <View className='container'>
        <View className='container_body'>
          <AtTabs current={current} tabList={tabList} onClick={this.handleClick}>
            {tabList.map((item, index) => {
              return (
                <AtTabsPane key={item.id+""} current={current} index={index}>
                  {list.map((_item,index)=>{
                    let date =  moment(_item.date).format('YYYY-MM-DD');
                    let week = this._getWeek(_item.date);
                    return (
                      <View className='wrap' key={_item.id+" "} onClick={(item)=>this.goToPage(item)}>
                        <View className='listItem'>
                          <View className='listItem_left'>
                            <Text className='listItem_left_appoint'>预约人:{_item.name}</Text>
                            <Text className='listItem_left_date'>{date} {week}</Text>
                          </View>
                          <View className='listItem_right'>
                            <Text className='listItem_right_status'>{_item.state==0?'预约中':_item.state ==1?'已预约':_item.state == 2?'已完成':'已取消'}</Text>
                            <Image src={ArrowRight} className='listItem_right_arrow'/>
                          </View>
                        </View>
                        <View className='wrap_footer'>
                          <View className='op_btn_1'>
                            <Text>{_item.state ==1?'取消预约':'再次预约'}</Text>
                          </View>
                          {_item.state ==3&&<View className='op_btn_2'>
                            <Text>删除</Text>
                          </View>}
                        </View>
                      </View>
                    )
                  })}

                </AtTabsPane>
              )
            })}
          </AtTabs>
        </View>
      </View>
    )
  }
}

AdvanceOrder.config = {
  navigationBarTitleText: '我的预约'
}
export default AdvanceOrder
