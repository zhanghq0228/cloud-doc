import React, { useState } from 'react'
import { Input } from 'antd'

const { Search } = Input

interface FileSearchProps {
  onFileSearch: Function
}
const FileSearch: React.FC<any> = props => {
  // const [value, setvalue] = useState<string>('')
  return (
    <Search
      allowClear
      enterButton
      placeholder="搜索我的云文档"
      onSearch={value => props.onFileSearch(value)}
    />
  )
}
export default FileSearch
