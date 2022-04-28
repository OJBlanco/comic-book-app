import { ReactElement } from 'react'

import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

import { ContainerCover, ContainerSpinner } from './styles/cover.loading'

/**
 * @returns ReactElement
 */
export const CoverLoading = (): ReactElement => (
  <ContainerCover>
    <ContainerSpinner>
      <Spin indicator={<LoadingOutlined style={{ fontSize: 40 }} spin />} />
    </ContainerSpinner>
  </ContainerCover>
)
