import cn from 'clsx'
import s from './Marquee.module.css'
import { FC, ReactNode, Component, Children } from 'react'
import { default as FastMarquee } from 'react-fast-marquee'

interface MarqueeProps {
  className?: string
  children?: ReactNode[] | Component[] | any[]
  variant?: 'primary' | 'secondary'
  title?: string
  text?: string
}

const Marquee: FC<MarqueeProps> = ({
  className = '',
  children,
  variant = 'primary',
  title,
  text,
}) => {
  const rootClassName = cn(
    s.root,
    {
      [s.primary]: variant === 'primary',
      [s.secondary]: variant === 'secondary',
    },
    className
  )

  return (
    <section className={s.wrapper}>
      <div className={s.textWrapper}>
        {title && <h3 className={s.title}>{title}</h3>}
        {text && <p className={s.text}>{text}</p>}
      </div>
      <FastMarquee gradient={false} className={rootClassName} pauseOnHover>
        {Children.map(children, (child) => ({
          ...child,
          props: {
            ...child.props,
            className: cn(child.props.className, `${variant}`),
          },
        }))}
      </FastMarquee>
    </section>
  )
}

export default Marquee
