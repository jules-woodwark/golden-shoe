import { FC, ReactNode } from 'react'
import s from './Heading.module.css'

interface Props {
  children: ReactNode
}

const Heading: FC<Props> = ({ children }) => {
  return <h1 className={s.heading}>{children}</h1>
}

export default Heading
