import { FC } from 'react'
import { Card } from '@components/ui'
import { StoreData } from 'constants/stores'
import Image from 'next/image'
import s from './StoreItem.module.css'

interface Props {
  storeData: StoreData
}

const StoreItem: FC<Props> = ({ storeData }) => {
  const facilitiesMap = storeData.facilities.map((item, i) => (
    <li key={i} className="list-disc mx-4">{item}</li>
  ))

  return (
    <Card className={s.root}>
      <h5 className={s.title}>{storeData.name}</h5>
      <p>{storeData.address}</p>
      <p>{storeData.number}</p>
      <p className='mb-2'>{storeData.opening}</p>
      <Image
        alt={storeData.name}
        src={storeData.img}
        height={213.5}
        width={320}
        quality="100"
      />
      <ul className="flex flex-col mt-2">
        <p>Facilities:</p>
        {facilitiesMap}
      </ul>
    </Card>
  )
}

export default StoreItem
