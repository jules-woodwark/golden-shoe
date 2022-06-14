import { object, string } from 'yup'

export const NewsletterSchema = object({
  firstName: string()
    .required('Please enter your first name!')
    .min(1, 'Your first name is too short')
    .max(100, 'Your first name is too long'),
  lastName: string()
    .required('Please enter your last name!')
    .min(1, 'Your last name is too short')
    .max(100, 'Your last name is too long'),
  email: string()
    .required('Please enter your email address!')
    .email('Your email address is invalud'),
  range: string().required('Please select a range!'),
})

export const OrderIdInputSchema = object({
  orderId: string()
    .required('Please enter your order id!')
    .min(1, 'Your order id is too short')
    .max(100, 'Your order id is too long'),
})

export const LocationInputSchema = object({
  location: string()
    .required('Please enter a valid location')
    .min(1, 'Location is too short')
    .max(100, 'Location is too long'),
})
