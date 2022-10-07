import React from 'react';
import Button from './Button';
import styles from './Header.module.scss';
import HeaderLink from './HeaderLink';

const Header = () => {
  const links: string[] = ['Inicio', 'Tecnologias', 'Portfólio', 'Formações'];
  const [active, setActive] = React.useState('Inicio');
  return (
    <header className={`${styles.header} container`}>
      <nav className={styles.nav}>
        {links.map((link) => (
          <HeaderLink key={link} active={active}>
            {link}
          </HeaderLink>
        ))}
      </nav>
      <Button>Entre em contato</Button>
    </header>
  );
};

export default Header;
