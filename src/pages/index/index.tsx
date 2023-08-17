import { Component, PropsWithChildren } from 'react'
import { View, Button } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import Taro from '@tarojs/taro';

import './index.scss'

type PageStateProps = {
  store: {
    counterStore: {
      counter: number,
      increment: Function,
      decrement: Function,
      incrementAsync: Function
    }
  }
}

@inject('store')
@observer
class Index extends Component<PageStateProps> {

  handleGo = () => {
    Taro.navigateTo({
      url: '/subPages/demo/index'
    })
  }

  render() {
    return (
      <View>
        <Button onClick={this.handleGo}>跳转去demo页</Button>
      </View>
    )
  }
}

export default Index
