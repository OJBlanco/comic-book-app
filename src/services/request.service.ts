/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState } from 'react'

/**
 * @param path string
 * @param method string
 * @returns any
 */
export const UseRequest = (
  path: string,
  method = 'POST'
): [query: Irequest, response: Iresponse] => {
  const [response, setResponse] = useState<null | unknown>(null)
  const [error, setError] = useState<null | unknown>(null)
  const [loading, setLoading] = useState(false)

  const OPTIONS: any = {
    headers: {
      Accept: 'application/json',
    },
    // mode: 'cors',
  }

  /**
   *
   */
  const init = () => {
    setResponse(null)
  }

  /**
   * @param params any
   * @returns string
   */
  const getQueryString = (params: any): string => {
    const esc = encodeURIComponent
    return Object.keys(params)
      .map(k => esc(k) + '=' + esc(params[k]))
      .join('&')
  }

  /**
   * @param props Props
   * @param props.body Oject
   * @returns Promise
   */
  const query = async ({ body = {} }): Promise<unknown> => {
    init()
    setLoading(true)
    let qs = ''

    OPTIONS.headers['Content-Type'] = 'application/json'
    OPTIONS.headers['Access-Control-Allow-Origin'] = '*'

    const options: any = {
      ...OPTIONS,
      method,
    }

    if (method !== 'GET' && method !== 'DELETE') {
      options.body = JSON.stringify(body)
    }

    if (method === 'GET' || method === 'DELETE') {
      qs = Object.keys(body).length > 0 ? `?${getQueryString(body)}` : ''
    }
    const url = `https://cors-anywhere.herokuapp.com/${process.env.COMIC_URL_API}${path}${qs}`

    // eslint-disable-next-line no-undef
    const request = await fetch(url, options)
    const status = request.status
    let data: any = null
    try {
      data = await request.json()
    } catch (error) {
      data = {}
    }
    return new Promise((resolve, reject) => {
      try {
        if (status === 200 || status === 201 || status === 204) {
          setResponse(data)
          resolve(data)
          console.log('>>> data', data)
          setLoading(false)
        } else {
          reject(data)
          setError(data)
          setLoading(false)
        }
      } catch (error) {
        reject(error)
        setError(error)
        setLoading(false)
      }
    })
  }

  return [query, { response, error, loading, refetch: query }]
}
