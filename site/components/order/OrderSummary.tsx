import { FC } from 'react'
import { normalizeString } from '@lib/normalize-string'
import { SuccessCircle, Sent } from '@components/icons'
import OrderCard from './OrderCard'

interface Props {
  orderId: string
}

const OrderSummary: FC<Props> = ({ orderId }) => {
  const normalizedOrderId = normalizeString(orderId)

  switch (normalizedOrderId) {
    case 'ordered':
      return (
        <OrderCard
          title="Your order has been recieved"
          text="Thanks for shopping with Golden Shoe!"
          textTwo="Please allow up to 2 business days for delivery, excluding weekends and bank holidays. You will recieve an update email when your order has shipped"
          orderId={normalizedOrderId}
          orderDate="10/06/2022"
          icon={
            <SuccessCircle className="h-12 w-12 mb-4 text-paletteSuccessGreen" />
          }
        />
      )
    case 'shipped':
      return (
        <OrderCard
          title="Your order has been Shipped"
          text="Thanks for shopping with Golden Shoe!"
          textTwo="Please allow up to 2 business days for delivery, excluding weekends and bank holidays. You will recieve an update email when your order has shipped"
          orderId={normalizedOrderId}
          orderDate="10/06/2022"
          icon={
            <Sent className="h-12 w-12 mb-4" />
          }
        />
      )
    case 'delivered':
      return (
        <OrderCard
          title="Your order has been Delivered"
          text="Thanks for shopping with Golden Shoe!"
          textTwo="We really hope you enjoy your new pair of shoes, if we can help with anything get in touch!"
          orderId={normalizedOrderId}
          orderDate="10/06/2022"
          icon={
            <SuccessCircle className="h-12 w-12 mb-4 text-paletteSuccessGreen" />
          }
        />
      )
    default:
      return (
        <p className="mt-10 text-rose-400">
          Sorry your order id was not found, please check again!
        </p>
      )
  }
}

export default OrderSummary
