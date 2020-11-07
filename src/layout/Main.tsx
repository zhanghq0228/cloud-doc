import React from 'react'
import {Layout} from 'antd'
const {Sider,Header,Content,Footer} = Layout
const Main = ()=>{
  return(
    <>
    <Layout>
    <Sider>Sider</Sider>
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  </Layout>
  </>
  )
}

export default Main