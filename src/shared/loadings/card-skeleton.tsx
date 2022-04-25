import { ReactElement } from 'react'

import { Card, Skeleton } from 'antd'

/**
 * @returns ReactElement
 */
export const CardSkeleton = (): ReactElement => (
  <Card hoverable cover={<Skeleton.Image />}>
    <Skeleton active paragraph={{ rows: 2 }} />
  </Card>
)
