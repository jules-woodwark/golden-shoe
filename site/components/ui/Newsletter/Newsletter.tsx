import { FC, useState, useEffect, useRef } from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import { NewsletterSchema } from '@validation'
import { useUI } from '../context'
import { Button, LoadingDots, Success } from '@components/ui'
import s from './Newsletter.module.css'

interface Values {
  firstName: string
  lastName: string
  email: string
  range: string
}

//  in production map inputs from CMS dynamically i.e. contentful

const Newsletter: FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const { closeModal } = useUI()

  const firstTimerRef = useRef<NodeJS.Timeout | undefined>()
  const secondTimerRef = useRef<NodeJS.Timeout | undefined>()

  const handleSubmit = (setSubmitting: (bool: boolean) => void) => {
    firstTimerRef.current = setTimeout(() => {
      setSubmitting(false)
      setIsSubmitting(false)
      setSubmitSuccess(true)
      exitModal()
    }, 600)
  }

  const exitModal = () => {
    secondTimerRef.current = setTimeout(() => closeModal(), 1800)
  }

  useEffect(() => {
    return () => {
      clearTimeout(firstTimerRef.current)
      clearTimeout(secondTimerRef.current)
    }
  }, [])

  const initFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    range: '',
  }

  return (
    <aside className={s.root}>
      {submitSuccess ? (
        <Success
          isShown={submitSuccess}
          text="Newsletter sign up successful!"
        />
      ) : (
        <>
          <h1 className={s.heading}>Sign up to our Newsletter</h1>
          <p className={s.text}>
            Get £10 off on your first order, when you join the Golden Shoe club!
          </p>
          <Formik
            initialValues={initFormValues}
            validationSchema={NewsletterSchema}
            onSubmit={(
              values: Values,
              { setSubmitting }: FormikHelpers<Values>
            ) => {
              setIsSubmitting(true)
              handleSubmit(setSubmitting)
            }}
          >
            {({ errors, touched }) => (
              <Form className={s.form}>
                <label htmlFor="firstName" className={s.label}>
                  First name
                </label>
                <Field
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                  className={s.field}
                ></Field>
                {errors.firstName && touched.firstName ? (
                  <p className={s.errorMessage}>{errors.firstName}</p>
                ) : null}
                <label htmlFor="lastName" className={s.label}>
                  Last name
                </label>
                <Field
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                  className={s.field}
                ></Field>
                {errors.lastName && touched.lastName ? (
                  <p className={s.errorMessage}>{errors.lastName}</p>
                ) : null}
                <label htmlFor="email" className={s.label}>
                  Email address
                </label>
                <Field
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  className={s.field}
                ></Field>
                {errors.email && touched.email ? (
                  <p className={s.errorMessage}>{errors.email}</p>
                ) : null}
                <div id="my-radio-group" className={s.radioLabel}>
                  Please select the range you would like to hear about:
                </div>
                <div
                  role="group"
                  aria-labelledby="my-radio-group"
                  className={s.radioGroup}
                >
                  <label className={s.radioField}>
                    <Field
                      type="radio"
                      name="range"
                      value="womens"
                      className={s.radioInput}
                    />
                    Womens
                  </label>
                  <label className={s.radioField}>
                    <Field
                      type="radio"
                      name="range"
                      value="mens"
                      className={s.radioInput}
                    />
                    Mens
                  </label>
                  <label className={s.radioField}>
                    <Field
                      type="radio"
                      name="range"
                      value="kids"
                      className={s.radioInput}
                    />
                    Kids
                  </label>
                  <label className={s.radioField}>
                    <Field
                      type="radio"
                      name="range"
                      value="all"
                      className={s.radioInput}
                    />
                    All
                  </label>
                </div>
                {errors.range && touched.range ? (
                  <p className={s.errorMessageLast}>{errors.range}</p>
                ) : null}
                {!isSubmitting ? (
                  <Button type="submit" className={s.button}>
                    Sign me up!
                  </Button>
                ) : (
                  <div className={s.loading}>
                    <LoadingDots />
                  </div>
                )}
              </Form>
            )}
          </Formik>
        </>
      )}
    </aside>
  )
}

export default Newsletter
