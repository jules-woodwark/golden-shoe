import { useState } from 'react'
import { Layout } from '@components/common'
import { PageWrapper } from '@components/common'
import { OrderForm, OrderCard } from '@components/order'
import { Newsletter } from '@components/icons'

const Returns = () => {
  const [orderId, setOrderId] = useState<string | null>(null)

  return (
    <PageWrapper title="Return your order">
      <p className="mb-4">
        At Golden shoe we offer a hassle-free return process within 30 days of
        your order, simply enter your orderId below and a returns label shall be
        emailed to you!
      </p>
      <OrderForm setOrderValue={setOrderId} />
      {orderId && (
        <OrderCard
          icon={<Newsletter className="h-12 w-12" />}
          title="An email with a returns label has been sent"
          text="Refunds may take up to 7 working days to process"
          textTwo="We're sorry you didn't like your shoes"
          orderId={orderId}
          orderDate="16/06/22"
        />
      )}
    </PageWrapper>
  )
}

Returns.Layout = Layout

export default Returns
