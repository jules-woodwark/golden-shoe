import { FC, ReactNode } from 'react'
import s from './Card.module.css'

interface Props {
  children: ReactNode
  className?: string
}

const Card: FC<Props> = ({ children, className }) => {
  return <div className={`${s.root} ${className}`}>{children}</div>
}

export default Card
