import { FC } from 'react'
import { normalizeString } from '@lib/normalize-string'
import { STORE_DATA } from '@constants'
import StoreItem from './StoreItem'

interface Props {
  value: string
}

const StoreList: FC<Props> = ({ value }) => {
  const normalizedStoreValue = normalizeString(value)
  const searchResult = STORE_DATA.filter(
    (store) => store.id === normalizedStoreValue
  )

  return searchResult.length > 0 ? (
    <ul className="mt-4">
      <li>
        <StoreItem storeData={searchResult[0]} />
      </li>
    </ul>
  ) : (
    <p>Sorry, no store found, please search again</p>
  )
}

export default StoreList
