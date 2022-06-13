import { Heading } from '@components/ui'
import { Formik, Field, Form, FormikHelpers } from 'formik'

const Newsletter = () => {
  const initFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    range: '',
  }

  return (
    <>
      <Heading>Sign up to our Newsletter</Heading>
      <Formik
        initialValues={initFormValues}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 500)
        }}
      >
        <Form>
          <label htmlFor="firstName">First name</label>
          <Field
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
          ></Field>
          <label htmlFor="lastName">Last name</label>
          <Field
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
          ></Field>
          <label htmlFor="firstName">Email address</label>
          <Field
            id="email"
            name="email"
            placeholder="Enter your email address"
          ></Field>
          <button type="submit">Sign me up!</button>
        </Form>
      </Formik>
    </>
  )
}

export default Newsletter
