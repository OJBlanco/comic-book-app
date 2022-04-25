/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect, useState } from 'react'

import { UseRequest } from 'services/request.service'

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

  const [query, { loading }]: [query: Irequest, response: Iresponse] =
    UseRequest(
      `?api_key=${process.env.COMIC_API_KEY}&format=json&limit=50`,
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

  return (
    <>
      <Navbar onChange={handleChangeMode} value={mode} />
      {mode !== 'list' ? (
        <ContainerGrid>
          {comics.map(comic => (
            <CardComicGrid
              key={comic.id}
              title={comic.volume.name}
              date={comic.date_last_updated}
              image={comic.image.medium_url}
            />
          ))}
        </ContainerGrid>
      ) : (
        <ContainerList>
          {comics.map(comic => (
            <CardComicList
              key={comic.id}
              title={comic.volume.name}
              date={comic.date_last_updated}
              image={comic.image.medium_url}
            />
          ))}
        </ContainerList>
      )}
    </>
  )
}

export default Dashboard
