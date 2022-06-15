import { useState } from 'react'
import { Layout } from '@components/common'
import { PageWrapper } from '@components/common'
import { Button } from '@components/ui'
import { StoreForm, StoreList } from '@components/stores'

const Stores = () => {
  const [searchValue, setSearchValue] = useState<string | null>(null)

  const handleClick = () => {
    setSearchValue(null)
  }

  return (
    <PageWrapper
      title="Find your local Golden Shoe store"
      subText="Find store details, facilities and opening hours"
    >
      {!searchValue ? (
        <>
          <p className="mb-4 text-center text-lg italic text-amber-500">
            Find store details, facilities and opening hours
          </p>
          <StoreForm setStoreValue={setSearchValue} />
        </>
      ) : (
        <div className="flex flex-col">
          <Button onClick={handleClick} className="rounded">
            New Search
          </Button>
          <h3 className="text-center mt-4 text-lg italic">Search results:</h3>
          <StoreList value={searchValue} />
        </div>
      )}
    </PageWrapper>
  )
}

Stores.Layout = Layout

export default Stores
