type Irequest = ({ body }: { body: any }) => Promise<unknown>

interface Iresponse {
  response: unknown
  error: unknown
  loading: boolean
  refetch: Irequest
}
