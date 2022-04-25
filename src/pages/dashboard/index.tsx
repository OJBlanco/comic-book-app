/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect, useState } from 'react'

import { useHistory } from 'react-router-dom'

import { UseRequest } from 'services/request.service'
import { CardSkeleton } from 'shared/loadings/card-skeleton'

import { CardComicGrid } from './components/card-comic-grid'
import { CardComicList } from './components/card-comic-list'
import { Navbar } from './components/navbar'
import { ContainerGrid, ContainerList } from './styles'

/**
 * @returns ReactElement
 */
const Dashboard: FC = () => {
  // States
  const [comics, setComics] = useState<Comic[]>([])
  const [mode, setMode] = useState<string | number>('list')

  const history = useHistory()

  const [query, { loading }]: [query: Irequest, response: Iresponse] =
    UseRequest(
      `${process.env.COMIC_URL_API}?api_key=${process.env.COMIC_API_KEY}&format=json&limit=50`,
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
      setComics(res?.results)
    })
  }

  /**
   * @param value string | number
   */
  const handleChangeMode = (value: string | number): void => {
    setMode(value)
  }

  /**
   * @param url
   */
  const handleClick = (url: string): void => {
    const id = url
      .replace(process.env.COMIC_URL_DETAIL_API as string, '')
      .replace('/', '')
    history.push(`/comic/${id}`)
  }

  return (
    <>
      <Navbar onChange={handleChangeMode} value={mode} />
      {loading ? (
        <ContainerGrid>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </ContainerGrid>
      ) : mode !== 'list' ? (
        <ContainerGrid>
          {comics.map(comic => (
            <CardComicGrid
              key={comic.id}
              title={`${comic.name} ${comic.issue_number}`}
              date={comic.date_added}
              image={comic.image.original_url}
              onClick={(): void => handleClick(comic.api_detail_url)}
            />
          ))}
        </ContainerGrid>
      ) : (
        <ContainerList>
          {comics.map(comic => (
            <CardComicList
              key={comic.id}
              title={`${comic.name} ${comic.issue_number}`}
              date={comic.date_added}
              image={comic.image.original_url}
              onClick={(): void => handleClick(comic.api_detail_url)}
            />
          ))}
        </ContainerList>
      )}
    </>
  )
}

export default Dashboard
