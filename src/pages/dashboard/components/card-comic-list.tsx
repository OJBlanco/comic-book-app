import { FC } from 'react'

import { Divider, Typography } from 'antd'

import { ContainerCard, Info, Thumbnail } from '../styles/card'

const { Title, Text } = Typography

/**
 * @param props CardData
 * @param props.title string
 * @param props.date string
 * @param props.image string
 * @param props.onClick () => void
 * @returns ReactElement
 */
export const CardComicList: FC<CardData> = ({
  title,
  date,
  image,
  onClick,
}) => {
  return (
    <>
      <ContainerCard onClick={onClick}>
        <Thumbnail>
          <img src={image} alt={title} />
        </Thumbnail>
        <Info>
          <Title level={4}>{title}</Title>
          <Text>{date}</Text>
        </Info>
      </ContainerCard>
      <Divider />
    </>
  )
}
