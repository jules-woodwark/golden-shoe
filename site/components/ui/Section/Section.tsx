import { FC, ReactNode } from 'react'
import s from './Section.module.css'

interface Props {
  children: ReactNode
}

const Section: FC<Props> = ({ children }) => {
  return <section className={s.root}>{children}</section>
}

export default Section
