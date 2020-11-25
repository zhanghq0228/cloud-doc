import React from 'react'
import { Tabs } from 'antd'
import './TabList.sass'

interface TabListProps {
  filesArr: Array<File | any>
  activeId: string
  unsaveIds: Array<String>
  onTabClick: Function
  onCloseTab: Function
}
const { TabPane } = Tabs

const TabList: React.FC<TabListProps> = props => {
  return (
    <Tabs
      tabBarGutter={0}
      hideAdd
      onChange={activeKey => {
        props.onTabClick(activeKey)
      }}
      activeKey={props.activeId}
      type="editable-card"
      className="tab_list"
    >
      {props.filesArr.map((pane: any) => (
        <TabPane
          tab={<span>{pane.title}</span>}
          key={pane.id}
          closeIcon={
            props.unsaveIds.includes(pane.id) ? (
              <span className="un_save">
                <span className="un_icon_redio"></span>
                <span
                  className="un_icon_close"
                  onClick={() => {
                    props.onCloseTab(pane.id)
                  }}
                >
                  ×
                </span>
              </span>
            ) : (
              <span
                className="un_icon_close"
                onClick={() => {
                  props.onCloseTab(pane.id)
                }}
              >
                ×
              </span>
            )
          }
        ></TabPane>
      ))}
    </Tabs>
  )
}
export default TabList
