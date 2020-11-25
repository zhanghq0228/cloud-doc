import React, { useState } from 'react'
import { Layout } from 'antd'
import SimpleMDE from 'react-simplemde-editor'
import FileSearch from '../components/FileSearch'
import FileList from '../components/FileList'
import BottomBtn from '../components/BottomBtn'
import TabList from '../components/TabList'
import { v4 } from 'uuid'
import { flattenArr, objToArr } from '../utils/tools'
import './main.sass'

const { Content, Sider } = Layout
const data = [
  {
    id: '1',
    title: 'first post',
    body: '## 撒旦法 ad 撒旦法',
    createAt: 1323552351
  },
  {
    id: '2',
    title: 'second post',
    body: '撒旦法 ad 撒旦安达市法 <br />',
    createAt: 1323552351
  },
  {
    id: '3',
    title: 'hahahha',
    body: '哒哒哒哒哒安达市法 <br />',
    createAt: 1323552351
  },
  {
    id: '4',
    title: 'chress',
    body: '撒 大大所 <br />',
    createAt: 1323552351
  }
]

const Main = () => {
  const [files, setfiles] = useState(flattenArr(data)) //文件列表
  const [activeFileId, setactiveFileId] = useState<string>('') // 激活文件
  const [openedFileIds, setopenedFileIds] = useState<String[]>([]) // 记录打开文件
  const [unSaveFileIds, setunSaveFileIds] = useState<string[]>([]) // 记录未保存文件
  const [searchFiles, setsearchFiles] = useState<any>([]) // 搜索文件

  const filesArr = objToArr(files)

  // 计算打开文件
  const openedFiles = openedFileIds.map((item: String) => {
    return files[item as string]
  })

  // 计算打开文件内容
  const activeFile = files[activeFileId]
  // const activeFile: any = files.find((file: any) => file.id === activeFileId)

  // 选中文件
  const fileClick = (fildId: string): void => {
    setactiveFileId(fildId)
    if (!openedFileIds.includes(fildId)) {
      setopenedFileIds([...openedFileIds, fildId])
    }
  }

  // 点中 tabs
  const tabsClick = (fildId: string) => {
    setactiveFileId(fildId)
  }

  //  删除 tabs
  const tabsClose = (fildId: string) => {
    const withoutIds = openedFileIds.filter((item: String) => item !== fildId)
    setopenedFileIds(withoutIds)
    withoutIds.length > 0
      ? setactiveFileId(withoutIds[0] as string)
      : setactiveFileId('')
  }

  // 编辑 md
  const fileChange = (id: string, value: any) => {
    const newFiles = { ...files[id], body: value }
    setfiles({ ...files, [id]: newFiles })
    if (!unSaveFileIds.includes(id)) {
      setunSaveFileIds([...unSaveFileIds, id])
    }
  }

  // 删除文件
  const deletFiles = (id: string) => {
    delete files[id]
    setfiles(files)
    tabsClose(id)
  }

  // 修改文件名
  const updataFileName = (id: string, title: string) => {
    const newFiles = { ...files[id], title: title }
    setfiles({ ...files, [id]: newFiles })
  }

  // 搜索
  const fileSearch = (keyword: string) => {
    const newFile = filesArr.filter(item => item.title.includes(keyword))
    setsearchFiles(newFile)
  }

  // 创建文件
  const createNewFile = () => {
    const newId = v4()
    const newFile = {
      id: newId,
      title: '',
      body: '## 请输入 md',
      createAt: new Date().getTime(),
      isNew: true
    }
    setfiles({ ...files, [newId]: newFile })
  }
  return (
    <Layout className="layout_content">
      <Sider className="Sider_content" width={400}>
        <FileSearch onFileSearch={fileSearch} />
        <FileList
          files={searchFiles.length > 0 ? searchFiles : filesArr}
          onFileClick={fileClick}
          onFileDelect={deletFiles}
          onFileUpdata={updataFileName}
        />
        <BottomBtn onClickNewFiles={createNewFile} />
      </Sider>
      <Layout>
        <Content>
          {activeFileId ? (
            <>
              <TabList
                filesArr={openedFiles}
                activeId={activeFileId}
                unsaveIds={unSaveFileIds}
                onTabClick={tabsClick}
                onCloseTab={tabsClose}
              ></TabList>
              <SimpleMDE
                id="your-custom-id"
                key={activeFile && activeFile.id}
                value={activeFile && activeFile.body}
                onChange={(value: any) => {
                  fileChange(activeFile.id, value)
                }}
                options={{ maxHeight: '480px' }}
              />
            </>
          ) : (
            <div className="star_page">选择或者创建新的 Markdown 文档</div>
          )}
        </Content>
      </Layout>
    </Layout>
  )
}

export default Main
