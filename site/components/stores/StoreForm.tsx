import { FC } from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import { LocationInputSchema } from '@validation'
import { LoadingDots } from '@components/ui'
import { Search, Location } from '@components/icons'
import useFakeRequestTimer from '@lib/hooks/useFakeRequestTimer'
import s from './StoreForm.module.css'

interface Props {
  setStoreValue: (storeId: string) => void
}

interface Values {
  location: string
}

const StoreForm: FC<Props> = ({ setStoreValue }) => {
  const { isSubmitting, handleSubmit } = useFakeRequestTimer(setStoreValue)

  //  fake location search with hardcode
  const handleLocationClick = () => {
    handleSubmit('Edinburgh')
  }

  return (
    <div className="w-full">
      <Formik
        initialValues={{
          location: '',
        }}
        validationSchema={LocationInputSchema}
        onSubmit={(
          values: Values,
          { setSubmitting, resetForm }: FormikHelpers<Values>
        ) => {
          handleSubmit(values.location, setSubmitting, resetForm)
        }}
      >
        {({ errors, touched }) => (
          <Form className={s.form}>
            <label htmlFor="location" hidden>
              Search location
            </label>
            <div className={s.fieldWrapper}>
              <Field
                id="location"
                name="location"
                placeholder="Enter a city name"
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
            {errors.location && touched.location ? (
              <p className={s.errorMessage}>{errors.location}</p>
            ) : null}
          </Form>
        )}
      </Formik>
      <div className={s.locationWrapper}>
        {isSubmitting ? (
          <LoadingDots />
        ) : (
          <button
            className={`${s.button} ${s.locationBtn}`}
            onClick={handleLocationClick}
          >
            Use my current location
            <Location className={s.location} />
          </button>
        )}
      </div>
    </div>
  )
}

export default StoreForm
