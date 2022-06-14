import { FC } from 'react'
import { NavData } from '../../../constants/navigation'
import NavLinkItem from './NavLinkItem'
import s from './NavLinkList.module.css'

interface Props {
  navItems: NavData
}

interface NavItem {
  label: string
  href: string
  categories?: {
    name: string
    href: string
  }[]
}

const NavLinkList: FC<Props> = ({ navItems }) => {
  const navItemsMap = navItems.map((navItem: NavItem, i) => {
    const { label, href, categories } = navItem
    console.log(navItem)
    return (
      <NavLinkItem
        key={i}
        className={s.navItem}
        name={label}
        href={href}
        categories={categories}
      />
    )
  })

  return <ul className={s.navLinkList}>{navItemsMap}</ul>
}

export default NavLinkList
