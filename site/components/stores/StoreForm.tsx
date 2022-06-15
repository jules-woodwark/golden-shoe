import { FC } from 'react'
import { Button, LoadingDots } from '@components/ui'
import { Search, Location } from '@components/icons'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import { LocationInputSchema } from '@validation'
import useFakeRequestTimer from '@lib/hooks/useFakeRequestTimer'
import s from './StoreForm.module.css'

interface Props {
  setStoreValue: (str: string) => void
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
    <div className='w-full'>
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
          <Form className="w-full flex flex-col">
            <label htmlFor="location" hidden>
              Search location
            </label>
            <div className="flex flex-row">
              <Field
                id="location"
                name="location"
                placeholder="Enter a city name"
                className="rounded w-4/5 border-2 px-2 py-2 mr-2 text-lg h-full"
              ></Field>
              {isSubmitting ? (
                <LoadingDots />
              ) : (
                <button
                  type="submit"
                  className="text-white bg-paletteDarkBlue w-1/6
                  px-2 py-2 rounded flex justify-center flex-row items-center hover:bg-paletteBlue"
                >
                  <Search className="w-6 h-6" />
                </button>
              )}
            </div>
            {errors.location && touched.location ? (
              <p className={s.errorMessage}>{errors.location}</p>
            ) : null}
          </Form>
        )}
      </Formik>
      <div className="flex justify-center mt-8">
        {isSubmitting ? (
          <LoadingDots />
        ) : (
          <div className="w-full">
            <Button className="w-full rounded" onClick={handleLocationClick}>
              Use my current location
              <Location className="ml-1" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default StoreForm
