import { FC } from 'react'
import { useScrollListener } from 'hooks'
import cn from 'clsx'
import s from './Navbar.module.css'

const NavbarRoot: FC = ({ children }) => {
  const { hasScrolled } = useScrollListener()

  return (
    <div className={cn(s.root, { 'shadow-magical': hasScrolled })}>
      {children}
    </div>
  )
}

export default NavbarRoot
