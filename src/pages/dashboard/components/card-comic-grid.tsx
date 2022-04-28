import { FC } from 'react'

import { Card } from 'antd'

import { ButtonCard } from '../styles'
import { FavoriteButton } from './favorite-button'

const { Meta } = Card

/**
 * @param props CardData
 * @param props.title string
 * @param props.date string
 * @param props.image string
 * @param props.onClick () => void
 * @param props.onFavorite () => void
 * @param props.isFavorite boolean
 * @returns ReactElement
 */
export const CardComicGrid: FC<CardData> = ({
  title,
  date,
  image,
  onClick,
  onFavorite,
  isFavorite,
}) => {
  return (
    <ButtonCard onClick={onClick}>
      <Card hoverable cover={<img alt={title} src={image} />}>
        <Meta title={title} description={date} />
        <FavoriteButton
          onClick={onFavorite}
          isFavorite={isFavorite as boolean}
        />
      </Card>
    </ButtonCard>
  )
}
