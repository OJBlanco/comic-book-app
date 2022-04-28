import { FC } from 'react'

import { Card, Typography, Divider, Comment, Avatar } from 'antd'

import { ContianerAvatars } from '../styles'
const { Title } = Typography

/**
 * @param props Props
 * @param props.data Generic[]
 * @param props.title string
 * @returns ReactElement
 */
export const InfoItem: FC<{ title: string; data: Generic[] }> = ({
  title,
  data,
}) => {
  return (
    <>
      <Title level={3}>{title}</Title>
      <ContianerAvatars>
        {data?.map(ch => (
          <Comment
            key={ch.id}
            avatar={<Avatar src={ch?.api_detail_url} shape="square" />}
            content={<p>{ch?.name}</p>}
          />
        ))}
      </ContianerAvatars>
      <Divider />
    </>
  )
}
