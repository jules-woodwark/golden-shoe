import { FC, ReactNode } from 'react'
import { Card } from '@components/ui'
import s from './OrderCard.module.css'

interface Props {
  title: string
  text: string
  textTwo: string
  orderId: string
  orderDate: string
  icon: ReactNode
}

const OrderCard: FC<Props> = ({ icon, title, text, textTwo, orderId, orderDate }) => {
  return (
    <Card className={s.root}>
      {icon}
      <h5 className={s.title}>{title}</h5>
      <p className={s.text}>{text}</p>
      <p className={s.textTwo}>{textTwo}</p>
      <div>
        <p>
          <span className={s.bold}>Order Id:</span> {orderId}
        </p>
        <p>
          <span className={s.bold}>Order Date:</span> {orderDate}
        </p>
      </div>
    </Card>
  )
}

export default OrderCard
