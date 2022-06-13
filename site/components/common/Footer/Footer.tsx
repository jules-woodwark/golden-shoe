import { Logo } from '@components/ui';
import Link from 'next/link';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={s.root}>
      <div className={s.wrapper}>
        <Link href="/">
          <a className={s.link}>
            <Logo />
          </a>
        </Link>
        <p className={s.text}>
          © {new Date().getFullYear()} Golden Shoe Demo. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
