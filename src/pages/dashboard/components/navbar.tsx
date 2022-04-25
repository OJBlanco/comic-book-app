import { FC } from 'react'

import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons'
import { PageHeader, Segmented, Divider } from 'antd'

import { ContainerNavbar } from '../styles'

interface Props {
  onChange: (value: string | number) => void
  value: string | number
}

/**
 * @param props Props
 * @param props.onChange (value: string | number) => void
 * @param props.value string | number
 * @returns ReactElement
 */
export const Navbar: FC<Props> = ({ onChange, value }) => {
  return (
    <ContainerNavbar>
      <PageHeader
        ghost={false}
        title="Lastest Issues"
        extra={
          <Segmented
            onChange={onChange}
            value={value}
            options={[
              {
                label: 'List',
                value: 'list',
                icon: <BarsOutlined />,
              },
              {
                label: 'Grid',
                value: 'grid',
                icon: <AppstoreOutlined />,
              },
            ]}
          />
        }
      >
        <Divider />
      </PageHeader>
    </ContainerNavbar>
  )
}
