import React from 'react'
import { Layout } from 'antd'
import FileSearch from '../components/FileSearch'
import FileList from '../components/FileList'
import BottomBtn from '../components/BottomBtn'

const { Sider } = Layout
const SliderList = () => {
  return (
    <Sider className="Sider_content" width={400}>
      <FileSearch />
      <FileList />
      <BottomBtn />
    </Sider>
  )
}
export default SliderList
