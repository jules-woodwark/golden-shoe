import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import s from './SeasonBanner.module.css'

interface Props {
  title: string
  text: string
  linkHref: string
  linkText: string
  bannerSrc: string
  bannerImgAlt: string
}

const changeTitle = (title: string) => {
  let splitTitle: any = title.split(' ')

  const newTitle = splitTitle.map((word: any, i: number) => {
    if (i === 1) {
      word = (
        <span key={i} className={s.goldWord}>
          {word}
        </span>
      )
    }

    if (i === 3) {
      word = (
        <span key={i} className={s.underlined}>
          {word}
        </span>
      )
    }

    return word
  })

  return newTitle
}

const SeasonBanner: FC<Props> = ({
  title,
  text,
  linkText,
  linkHref,
  bannerSrc,
  bannerImgAlt,
}) => {
  const newTitle = changeTitle(title)

  return (
    <section className={s.root}>
      <div className={s.wrapper}>
        <h1 className={s.heroTitle}>{newTitle}</h1>
        <p className={s.heroText}>{text}</p>
        <div className={s.linkWrapper}>
          <Link href={linkHref}>
            <a className={s.link}>{linkText}</a>
          </Link>
        </div>
      </div>
      <div className={s.imageWrapper}>
        <Image
          alt={bannerImgAlt}
          src={bannerSrc}
          height={300}
          width={600}
          quality="100"
          layout="responsive"
          priority
        />
      </div>
    </section>
  )
}

export default SeasonBanner
