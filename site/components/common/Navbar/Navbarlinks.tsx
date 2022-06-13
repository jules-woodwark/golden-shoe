import { FC } from 'react'
import { Clock, Location, Newsletter, Returns } from '@components/icons'
import { Container } from '@components/ui'
import Link from 'next/link'
import s from './NavbarLinks.module.css'

const NavbarLinks: FC = () => {
  return (
    <Container className={s.root}>
      <Container className={s.container}>
        <ul className="flex flex-row w-full justify-evenly sm:w-auto sm:mr-auto">
          <li className={s.listItem}>
            <Link href="/help/tracking">
              <a className={s.link}>
                <Clock className={s.icon} />
                <p>Order Tracking</p>
              </a>
            </Link>
          </li>
          <li className={s.listItem}>
            <Link href="/help/returns">
              <a className={s.link}>
                <Returns className={s.icon} />
                <p>Online Returns</p>
              </a>
            </Link>
          </li>
        </ul>
        <ul className="hidden sm:flex flex-row ml-auto">
          <li className={s.listItem}>
            <Link href="/stores">
              <a className={s.link}>
                <Location className={s.icon} />
                <p>Store Finder</p>
              </a>
            </Link>
          </li>
          <li className={s.listItem}>
            <button className={s.link}>
              <Newsletter className={s.icon} />
              <p>Get £10 off - Sign Up!</p>
            </button>
          </li>
        </ul>
      </Container>
    </Container>
  )
}

export default NavbarLinks
