import { FC } from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import { OrderIdInputSchema } from '@validation'
import { LoadingDots } from '@components/ui'
import { Search } from '@components/icons'
import useFakeRequestTimer from '@lib/hooks/useFakeRequestTimer'
import s from './OrderForm.module.css'

interface Props {
  setOrderValue: (orderId: string) => void
}

interface Values {
  orderId: string
}

const OrderForm: FC<Props> = ({ setOrderValue }) => {
  const { isSubmitting, handleSubmit } = useFakeRequestTimer(setOrderValue)

  return (
    <div className="w-full">
      <Formik
        initialValues={{
          orderId: '',
        }}
        validationSchema={OrderIdInputSchema}
        onSubmit={(
          values: Values,
          { setSubmitting, resetForm }: FormikHelpers<Values>
        ) => {
          handleSubmit(values.orderId, setSubmitting, resetForm)
        }}
      >
        {({ errors, touched }) => (
          <Form className={s.form}>
            <label htmlFor="orderId" hidden>
              Search order id
            </label>
            <div className={s.fieldWrapper}>
              <Field
                id="orderId"
                name="orderId"
                placeholder="Please enter your order id"
                className={s.field}
              ></Field>
              {isSubmitting ? (
                <LoadingDots />
              ) : (
                <button type="submit" className={s.button}>
                  <Search className={s.search} />
                </button>
              )}
            </div>
            {errors.orderId && touched.orderId ? (
              <p className={s.errorMessage}>{errors.orderId}</p>
            ) : null}
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default OrderForm
