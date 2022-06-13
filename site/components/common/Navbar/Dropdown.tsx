import { FC } from 'react'
import Link from 'next/link'
import s from './Dropdown.module.css'

interface Props {
  isShown: boolean
  categories: {
    name: string
    slug: string
  }[]
  toggleDropdown: () => void
}

const Dropdown: FC<Props> = ({ categories, isShown, toggleDropdown }) => {
  const categoriesMap = categories.map((category, i) => {
    const { name, slug } = category

    return (
      <li key={i}>
        <Link href={`/search/${slug}`}>
          <a>{name}</a>
        </Link>
      </li>
    )
  })

  return isShown ? (
    <div className={s.root}>
      <ul
        aria-label="submenu"
        className={s.list}
        onMouseEnter={toggleDropdown}
        onMouseLeave={toggleDropdown}
      >
        <h3 className={s.listTitle}>Category</h3>
        {categoriesMap}
      </ul>
    </div>
  ) : null
}

export default Dropdown
