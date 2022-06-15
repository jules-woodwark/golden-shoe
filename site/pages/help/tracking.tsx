import { useState } from 'react'
import { Layout } from '@components/common'
import { PageWrapper } from '@components/common'
import { OrderForm, OrderSummary } from '@components/order'

const Tracking = () => {
  const [orderId, setOrderId] = useState<string | null>(null)

  return (
    <PageWrapper title="Track your order">
      <OrderForm setOrderValue={setOrderId} />
      {orderId && <OrderSummary orderId={orderId} />}
    </PageWrapper>
  )
}

Tracking.Layout = Layout

export default Tracking
