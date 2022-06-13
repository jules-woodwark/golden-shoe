import { FC } from 'react'
import { Logo, Container } from '@components/ui'
import { Searchbar, UserNav } from '@components/common'
import { NAVIGATION_DATA } from 'constants/index'
import Link from 'next/link'
import NavbarLinks from './Navbarlinks'
import NavbarRoot from './NavbarRoot'
import NavLinkList from './NavLinkList'
import s from './Navbar.module.css'

interface Link {
  href: string
  label: string
}

interface NavbarProps {
  links?: Link[]
}

const Navbar: FC<NavbarProps> = ({ links }) => (
  <NavbarRoot>
    <NavbarLinks />
    <Container clean className={s.container}>
      <div className={s.nav}>
        <div className="flex items-center flex-1 justify-items-stretch">
          <Link href="/">
            <a className={s.logo} aria-label="Logo">
              <Logo />
            </a>
          </Link>
          <nav className={s.navMenu}>
            <NavLinkList navItems={NAVIGATION_DATA} />
          </nav>
        </div>
        <div className="flex items-center justify-end flex-1 space-x-8">
          {process.env.COMMERCE_SEARCH_ENABLED && (
            <div className="justify-end flex-1 hidden lg:flex">
              <Searchbar />
            </div>
          )}
          <UserNav />
        </div>
      </div>
      {process.env.COMMERCE_SEARCH_ENABLED && (
        <div className="flex pb-4 lg:px-6 lg:hidden">
          <Searchbar id="mobile-search" />
        </div>
      )}
    </Container>
  </NavbarRoot>
)

export default Navbar
