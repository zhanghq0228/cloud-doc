import React from 'react'

import { Button, Row, Col } from 'antd'
import {
  PlusSquareOutlined,
  DeliveredProcedureOutlined
} from '@ant-design/icons'

const BottomBtn: React.FC<any> = props => {
  return (
    <>
      <Row className="btn_group">
        <Col span={12}>
          <Button
            block={true}
            type="primary"
            onClick={() => props.onClickNewFiles()}
            icon={<PlusSquareOutlined />}
          >
            新建
          </Button>
        </Col>
        <Col span={12}>
          <Button
            block={true}
            type="default"
            icon={<DeliveredProcedureOutlined />}
          >
            导入
          </Button>
        </Col>
      </Row>
    </>
  )
}
export default BottomBtn
