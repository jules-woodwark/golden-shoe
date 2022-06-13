import { FC } from 'react'
import { Clock, Location, Newsletter, Returns } from '@components/icons'
import { Container } from '@components/ui'
import Link from 'next/link'
import s from './NavbarLinks.module.css'

const NavbarLinks: FC = () => {
  return (
    <Container className={s.root}>
      <Container className={s.container}>
        <ul className={s.listLeft}>
          <li className={s.listItem}>
            <Link href="/help/tracking">
              <a className={s.link}>
                <Clock className={s.icon} />
                <p className={s.text}>
                  <span className={s.span}>Order&nbsp;</span>Tracking
                </p>
              </a>
            </Link>
          </li>
          <li className={s.listItem}>
            <Link href="/help/returns">
              <a className={s.link}>
                <Returns className={s.icon} />
                <p className={s.text}>
                  <span className={s.span}>Online&nbsp;</span>Returns
                </p>
              </a>
            </Link>
          </li>
        </ul>
        <ul className={s.listRight}>
          <li className={`${s.listItem} ${s.location}`}>
            <Link href="/stores">
              <a className={s.link}>
                <Location className={s.icon} />
                <p className={s.text}>Store Finder</p>
              </a>
            </Link>
          </li>
          <li className={s.listItem}>
            <button className={s.link}>
              <Newsletter className={s.icon} />
              <p className={s.text}>
                <span className={s.span}>Get £10 off -&nbsp;</span>Sign Up!
              </p>
            </button>
          </li>
        </ul>
      </Container>
    </Container>
  )
}

export default NavbarLinks
