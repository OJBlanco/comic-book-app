import { FC } from 'react'

import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons'
import { PageHeader, Segmented, Divider, Switch } from 'antd'

import { ContainerNavbar } from '../styles'

interface Props {
  onChange: (value: string | number) => void
  value: string | number
  isFavoriteList: boolean
  onChangeSwitch: (checked: boolean) => void
}

/**
 * @param props Props
 * @param props.onChange (value: string | number) => void
 * @param props.value string | number
 * @param props.isFavoriteList boolean
 * @param props.onChangeSwitch (checked: boolean) => void
 * @returns ReactElement
 */
export const Navbar: FC<Props> = ({
  onChange,
  value,
  isFavoriteList,
  onChangeSwitch,
}) => {
  return (
    <ContainerNavbar>
      <PageHeader
        ghost={false}
        title="Lastest Issues"
        extra={[
          <Segmented
            key={1}
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
          />,
          <Switch
            key={2}
            checkedChildren="Favorites"
            unCheckedChildren="All comics"
            checked={isFavoriteList}
            onChange={onChangeSwitch}
          />,
        ]}
      >
        <Divider />
      </PageHeader>
    </ContainerNavbar>
  )
}
