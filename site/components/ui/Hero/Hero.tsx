import React, { FC } from 'react'
import { Container } from '@components/ui'
import { ArrowRight } from '@components/icons'
import s from './Hero.module.css'
import Button from '../Button'

interface Props {
  className?: string
  headline: string
  description: string
  btnText: string
  btnFn: () => void
}

const Hero: FC<Props> = ({
  headline,
  description,
  className,
  btnText,
  btnFn,
}) => {
  const handleClick = () => {
    btnFn()
  }

  return (
    <div className={className}>
      <Container className={s.root}>
        <h2 className={s.title}>{headline}</h2>
        <div className={s.description}>
          <p>{description}</p>
          <Button
            onClick={handleClick}
            className={s.btn}
          >
            <ArrowRight width="20" heigh="20" className="ml-1" />
            {btnText}
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default Hero
