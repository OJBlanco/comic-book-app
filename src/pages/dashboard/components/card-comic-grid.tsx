import { FC } from 'react'

import { Card } from 'antd'

import { ButtonCard } from '../styles'

const { Meta } = Card

/**
 * @param props CardData
 * @param props.title string
 * @param props.date string
 * @param props.image string
 * @returns ReactElement
 */
export const CardComicGrid: FC<CardData> = ({ title, date, image }) => (
  <ButtonCard>
    <Card hoverable cover={<img alt={title} src={image} />}>
      <Meta title={title} description={date} />
    </Card>
  </ButtonCard>
)
