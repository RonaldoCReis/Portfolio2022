import React from 'react';
import Button from './Button';
import styles from './Header.module.scss';
import HeaderLink from './HeaderLink';

const Header = () => {
  const links: string[] = ['Inicio', 'Tecnologias', 'Portfólio', 'Formações'];
  const [active, setActive] = React.useState('Inicio');
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {links.map((link) => (
          <HeaderLink active={active}>{link}</HeaderLink>
        ))}
      </nav>
      <Button>Entre em contato</Button>
    </header>
  );
};

export default Header;
