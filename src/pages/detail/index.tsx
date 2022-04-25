import { ReactElement, useEffect, useState } from 'react'

import { Card, PageHeader } from 'antd'
import { useHistory, useParams } from 'react-router-dom'

import { UseRequest } from 'services/request.service'
import { CoverLoading } from 'shared/loadings/cover.loading'

import { InfoItem } from './components/info-item'
import { BodyCard, MainInfo, Poster } from './styles'

/**
 * @returns ReactElement
 */
const Detail = (): ReactElement => {
  const { id }: { id: string } = useParams()

  const history = useHistory()

  // States
  const [data, setData] = useState<DetailComic>()

  const [query, { loading }]: [query: Irequest, response: Iresponse] =
    UseRequest(
      `${process.env.COMIC_URL_DETAIL_API}${id}/?api_key=${process.env.COMIC_API_KEY}&format=json`,
      'GET'
    )

  useEffect(() => {
    getData()
  }, [])

  /**
   *
   */
  const getData = async (): Promise<void> => {
    query({
      body: {},
    }).then((res: any) => {
      console.log('>>> res', res)
      setData(res?.results)
    })
  }

  return loading ? (
    <CoverLoading />
  ) : (
    <>
      <PageHeader onBack={(): void => history.goBack()} title="Go back" />
      <Card>
        <BodyCard>
          <MainInfo>
            <InfoItem
              title="Characters"
              data={data?.character_credits as Generic[]}
            />
            <InfoItem title="Teams" data={data?.team_credits as Generic[]} />
            <InfoItem
              title="Locations"
              data={data?.location_credits as Generic[]}
            />
            <InfoItem
              title="Concepts"
              data={data?.concept_credits as Generic[]}
            />
          </MainInfo>
          <Poster>
            <img src={data?.image.original_url} />
          </Poster>
        </BodyCard>
      </Card>
    </>
  )
}

export default Detail
