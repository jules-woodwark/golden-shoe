import { FC } from 'react';
import { NavData } from '../../../constants/navigation';
import NavItem from './NavLinkItem';
import s from './NavLinkList.module.css';

interface Props {
  navItems: NavData;
}

const NavList: FC<Props> = ({ navItems }) => {
  const navItemsMap = navItems.map((navItem, i) => {
    const { name, slug, categories } = navItem;

    return <NavItem key={i} name={name} slug={slug} categories={categories} />;
  });

  return <ul className={s.navMenu}>{navItemsMap}</ul>;
};

export default NavList;
