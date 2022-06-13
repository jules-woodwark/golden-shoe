import React, { FC } from 'react'
import { Container } from '@components/ui'
import { ArrowRight } from '@components/icons'
import s from './Hero.module.css'
import Link from 'next/link'

interface Props {
  className?: string
  headline: string
  description: string
  linkText: string
  linkUrl: string
}

const Hero: FC<Props> = ({
  headline,
  description,
  className,
  linkText,
  linkUrl,
}) => {
  return (
    <div className={className}>
      <Container className={s.root}>
        <h2 className={s.title}>{headline}</h2>
        <div className={s.description}>
          <p>{description}</p>
          <Link href={linkUrl}>
            <a className="flex items-center text-accent-0 pt-3 font-bold hover:underline cursor-pointer w-max-content">
              {linkText}
              <ArrowRight width="20" heigh="20" className="ml-1" />
            </a>
          </Link>
        </div>
      </Container>
    </div>
  )
}

export default Hero
