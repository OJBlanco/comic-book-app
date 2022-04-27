import { FC, MouseEvent } from 'react'

import { StarFilled, StarOutlined } from '@ant-design/icons'
import { Button, Tooltip } from 'antd'

interface Props {
  onClick: () => void
  isFavorite: boolean
}

/**
 * @param props Props
 * @param props.onClick () => void
 * @param props.isFavorite boolean
 * @returns ReactElement
 */
export const FavoriteButton: FC<Props> = ({ onClick, isFavorite }) => {
  /**
   * @param e MouseEvent
   */
  const handleToggleFavorite = (e: MouseEvent): void => {
    e.preventDefault()
    e.stopPropagation()
    onClick()
  }
  return (
    <Tooltip
      title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      color="volcano"
    >
      <Button
        type="text"
        shape="circle"
        icon={
          !isFavorite ? (
            <StarOutlined twoToneColor="volcano" />
          ) : (
            <StarFilled twoToneColor="volcano" />
          )
        }
        onClick={handleToggleFavorite}
        color="volcano"
      />
    </Tooltip>
  )
}
