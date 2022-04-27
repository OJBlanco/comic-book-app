import { FC } from 'react'

import { Divider, Typography } from 'antd'

import { ContainerCard, Info, Thumbnail } from '../styles/card'
import { FavoriteButton } from './favorite-button'

const { Title, Text } = Typography

/**
 * @param props CardData
 * @param props.title string
 * @param props.date string
 * @param props.image string
 * @param props.onClick () => void
 * @param props.onFavorite  () => void
 * @param props.isFavorite boolean
 * @returns ReactElement
 */
export const CardComicList: FC<CardData> = ({
  title,
  date,
  image,
  onClick,
  onFavorite,
  isFavorite,
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
        <FavoriteButton
          onClick={onFavorite}
          isFavorite={isFavorite as boolean}
        />
      </ContainerCard>
      <Divider />
    </>
  )
}
