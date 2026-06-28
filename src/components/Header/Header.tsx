import React, { useState, useEffect } from 'react';
import './Header.css';
import { Button } from '../Button/Button';
import logoWhite from '../../assets/logo-white.svg';
import logoBlack from '../../assets/logo-black.svg';
import { UserIcon } from '@phosphor-icons/react';

export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href?: string;
  children?: NavChild[];
}

export interface HeaderProps {
  logoText?: string;
  navItems?: NavItem[];
  onLoginClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  navItems = [],
  onLoginClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll state
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`lumina-header ${scrolled ? 'lumina-header--scrolled' : ''}`}>
      <div className={`lumina-header__container ${scrolled ? 'lumina-header__container--scrolled' : ''}`}>
        {/* Logo */}
        <a href="/" className="lumina-header__logo">
          <img src={scrolled ? logoBlack : logoWhite} alt="Logo" />
        </a>

        {/* Mobile Menu Toggle Button */}
        <button
          className={`lumina-header__toggle ${mobileMenuOpen ? 'is-active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="lumina-header__toggle-bar" />
          <span className="lumina-header__toggle-bar" />
          <span className="lumina-header__toggle-bar" />
        </button>

        {/* Center Navigation */}
        <nav className={`lumina-header__nav ${mobileMenuOpen ? 'is-open' : ''}`}>
          <ul className="lumina-header__nav-list">
            {navItems.map((item, idx) => (
              <li
                key={idx}
                className={`lumina-header__nav-item ${
                  item.children ? 'lumina-header__nav-item--dropdown' : ''
                }`}
              >
                {item.children ? (
                  <>
                    <button
                      className="lumina-header__nav-link lumina-header__nav-link--trigger"
                      aria-haspopup="true"
                    >
                      {item.label}
                    </button>
                    <ul className="lumina-header__dropdown">
                      {item.children.map((child, cIdx) => (
                        <li key={cIdx} className="lumina-header__dropdown-item">
                          <a href={child.href} className="lumina-header__dropdown-link">
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a href={item.href || '#'} className="lumina-header__nav-link">
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Actions */}
        <div className={`lumina-header__actions ${mobileMenuOpen ? 'is-open' : ''}`}>
          <Button variant="secondary" size="sm" onClick={onLoginClick}>
            <UserIcon size={20} />
            Área do Cliente
          </Button>
        </div>
      </div>
    </header>
  );
};
