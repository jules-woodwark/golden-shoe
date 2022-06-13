import { FC, useState, useEffect } from 'react'
import Link from 'next/link'
import Dropdown from './Dropdown'
import s from './NavLinkItem.module.css'

interface Props {
  className: string
  name: string
  slug: string
  categories?: {
    name: string
    slug: string
  }[]
}

const NavLinkItem: FC<Props> = ({ name, slug, categories, className }) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const [isOverCategory, setIsOverCategory] = useState(false)
  const [isOverDropdown, setIsOverDropdown] = useState(false)

  useEffect(() => {
    if (showDropdown && !isOverCategory && !isOverDropdown) {
      setShowDropdown(false)
    } else if ((!showDropdown && isOverCategory) || isOverDropdown) {
      setShowDropdown(true)
    }
  }, [isOverCategory, isOverDropdown])

  const handleToggleCategory = () => {
    setIsOverCategory((prevState) => !prevState)
  }

  const handleToggleDropdown = () => {
    setIsOverDropdown((prevState) => !prevState)
  }

  return (
    <li
      aria-haspopup="true"
      className={className}
      onMouseEnter={handleToggleCategory}
      onMouseLeave={handleToggleCategory}
    >
      <Link href={`/${slug}`}>
        <a className={s.navLink}>{name}</a>
      </Link>
      {categories && (
        <Dropdown
          toggleDropdown={handleToggleDropdown}
          isShown={showDropdown}
          categories={categories}
        />
      )}
    </li>
  )
}

export default NavLinkItem
