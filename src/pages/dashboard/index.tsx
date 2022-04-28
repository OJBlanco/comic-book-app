/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect, useState } from 'react'

import ecomCart from '@ecomplus/shopping-cart'
import { notification } from 'antd'
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
  const [backupComics, setBackupComics] = useState<Comic[]>([])
  const [favorites, setFavorites] = useState<Comic[]>([])
  const [mode, setMode] = useState<string | number>('grid')
  const [isFavoriteList, setIsFavoriteList] = useState(false)

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
      processData(res?.results)
    })
  }

  /**
   * @param data Comic[]
   */
  const processData = (data: Comic[]): void => {
    try {
      let results: Comic[] = data
      const local = window.localStorage.getItem('ecomShoppingCart')
      let items: Comic[] = []
      if (local) {
        items = JSON.parse(local as string)?.items
      }
      results = results.map(result => {
        return {
          ...result,
          isFavorite: items.some(item => item.id === result.id),
        }
      })
      setComics(isFavoriteList ? items : results)
      setBackupComics(results)
      setFavorites(items)
    } catch (error) {
      notification.error({
        message: 'Oops! an error occurred, try again later.',
      })
    }
  }

  /**
   * @param value string | number
   */
  const handleChangeMode = (value: string | number): void => {
    setMode(value)
  }

  /**
   * @param url string
   */
  const handleClick = (url: string): void => {
    const id = url
      .replace(process.env.COMIC_URL_DETAIL_API as string, '')
      .replace('/', '')
    history.push(`/comic/${id}`)
  }

  /**
   * @param comic Comic
   * @returns void
   */
  const handleToggleFavorite = (comic: Comic) => (): void => {
    const local = window.localStorage.getItem('ecomShoppingCart')
    if (local) {
      const items: Comic[] = JSON.parse(local as string)?.items
      const exist = items.some(item => item.id === comic.id)
      let title = ''
      if (exist) {
        ecomCart.removeItem(comic.id)
        title = 'Comic removed from favorites'
      } else {
        ecomCart.addItem({
          _id: comic.id,
          ...comic,
          isFavorite: true,
          price: 0,
          product_id: comic.issue_number,
          quantity: 1,
        })
        title = 'Comic added from favorites'
      }
      const localComics = JSON.parse(JSON.stringify(backupComics))
      processData(localComics)
      notification.success({
        message: title,
      })
    }
  }

  /**
   * @param value
   */
  const handleToggleItems = (value: boolean): void => {
    setIsFavoriteList(value)
    if (value) {
      setComics(favorites)
    } else {
      setComics(backupComics)
    }
  }

  return (
    <>
      <Navbar
        onChange={handleChangeMode}
        value={mode}
        isFavoriteList={isFavoriteList}
        onChangeSwitch={handleToggleItems}
      />
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
              title={`${comic.name || comic.volume.name} ${comic.issue_number}`}
              date={comic.date_added}
              image={comic.image.original_url}
              onClick={(): void => handleClick(comic.api_detail_url)}
              onFavorite={handleToggleFavorite(comic)}
              isFavorite={comic.isFavorite}
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
              onFavorite={handleToggleFavorite(comic)}
              isFavorite={comic.isFavorite}
            />
          ))}
        </ContainerList>
      )}
    </>
  )
}

export default Dashboard
