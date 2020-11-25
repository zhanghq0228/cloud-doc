import React, { useState, useEffect } from 'react'
import { List, Input, Divider } from 'antd'
import {
  FileMarkdownOutlined,
  DeleteOutlined,
  FormOutlined,
  CloseOutlined
} from '@ant-design/icons'

interface FileListProps {
  files: Array<File>
  id: Number
  onFileClick: Function
  onFileDelect: Function
  onFileUpdata: Function
}

const FileList: React.FC<any> = ({
  files,
  onFileDelect,
  onFileUpdata,
  onFileClick
}) => {
  const [editStatus, seteditStatus] = useState(false)
  const [fileId, setfileId] = useState<String>('')

  const updateFileName = (item: File, target: String) => {
    if (item.isNew) {
      item.title = target
      item.isNew = false
    }
    if (target) {
      seteditStatus(false)
      onFileUpdata(item.id, target)
    }
  }
  useEffect(() => {
    const newFiles = files.find((file: File) => file.isNew)
    if (newFiles) {
      setfileId(newFiles.id)
    }
  }, [files])

  return (
    <>
      <List
        className="file_list"
        dataSource={files}
        renderItem={(item: File) => (
          <List.Item>
            <FileMarkdownOutlined />
            &nbsp;&nbsp;
            {(fileId === item.id && editStatus) || item.isNew ? (
              <span className="item_list">
                <Input
                  placeholder="请输入文件标题"
                  style={{ width: 280 }}
                  defaultValue={item.title as string}
                  onPressEnter={e => {
                    const target = e.target as HTMLTextAreaElement

                    updateFileName(item, target.value)
                  }}
                />
                <CloseOutlined
                  onClick={() => {
                    seteditStatus(false)
                    if (item.isNew) {
                      onFileDelect(item.id)
                    }
                  }}
                />
              </span>
            ) : (
              <span
                className="item_list"
                onClick={() => {
                  onFileClick(item.id)
                }}
              >
                <span>{item.title}</span>
                <span>
                  <FormOutlined
                    className="c_link"
                    onClick={event => {
                      event.stopPropagation()
                      seteditStatus(true)
                      setfileId(item.id)
                    }}
                    title="编辑"
                  />
                  <Divider type="vertical" />
                  <DeleteOutlined
                    className="c_link"
                    title="删除"
                    onClick={event => {
                      event.stopPropagation()
                      onFileDelect(item.id)
                    }}
                  />
                </span>
              </span>
            )}
          </List.Item>
        )}
      />
    </>
  )
}

export default FileList
