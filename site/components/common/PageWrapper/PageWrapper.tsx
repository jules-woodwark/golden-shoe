import { FC, ReactNode } from 'react'
import s from './PageWrapper.module.css'

interface Props {
  title: string
  subText?: string
  children: ReactNode
}

const PageWrapper: FC<Props> = ({ title, children }) => {
  return (
    <section className={s.root}>
      <h1 className={s.heading}>{title}</h1>
      {children}
    </section>
  )
}

export default PageWrapper
