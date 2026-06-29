import React from 'react';
import './Footer.css';
import logoWhite from '../../assets/logo-white.svg';
import { CaretRightIcon } from '@phosphor-icons/react';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  logoText?: string;
  tagline?: string;
  columns?: FooterColumn[];
  copyrightText?: string;
}

export const Footer: React.FC<FooterProps> = ({
  tagline = 'Transformando patrimônio em legado sustentável desde 2011.',
  columns = [],
  copyrightText = `© 2026 Lumina Group. Todos os direitos reservados. CNPJ: XX.XXX.XXX/0001-XX. Av. Menino Marcelo, XXXX - Maceió/AL`,
}) => {
  return (
    <footer className="lumina-footer">
      <div className="lumina-footer__container">
        {/* Brand Block */}
        <div className="lumina-footer__brand">
          <a href="/" className="lumina-footer__logo">
            <img src={logoWhite} alt="Lumina Group Logo" />
          </a>
          {tagline && <p className="lumina-footer__tagline">{tagline}</p>}
          
          {/* Newsletter section */}
          <div className="lumina-footer__newsletter-section">
            <h4 className="lumina-footer__newsletter-title">Insights Exclusivos</h4>
            <p className="lumina-footer__newsletter-desc">
              Receba mensalmente análises de mercado, tendências de arquitetura e oportunidades de investimento.
            </p>
            <form className="lumina-footer__newsletter-wrapper" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email" className="lumina-footer__newsletter-input" required />
              <button type="submit" className="lumina-footer__newsletter-btn" aria-label="Enviar">
                <CaretRightIcon size={16} weight="bold" />
              </button>
            </form>
          </div>
        </div>

        {/* Links Grid */}
        <div className="lumina-footer__grid">
          {columns.map((column, idx) => (
            <div key={idx} className="lumina-footer__column">
              <h4 className="lumina-footer__title">{column.title}</h4>
              <ul className="lumina-footer__list">
                {column.links.map((link, lIdx) => (
                  <li key={lIdx} className="lumina-footer__item">
                    <a href={link.href} className="lumina-footer__link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="lumina-footer__bottom">
        <div className="lumina-footer__bottom-container">
          <div className="lumina-footer__bottom-info">
            <p className="lumina-footer__copy">{copyrightText}</p>
            <p className="lumina-footer__disclaimer" style={{ fontSize: '11px', color: '#666666', marginTop: '4px' }}>
              Aviso: Este é um site fictício desenvolvido exclusivamente para fins de demonstração de portfólio.
            </p>
          </div>
          <div className="lumina-footer__legal">
            <a href="#privacy" className="lumina-footer__legal-link">
              Política de Privacidade
            </a>
            <span className="lumina-footer__legal-separator">|</span>
            <a href="#terms" className="lumina-footer__legal-link">
              Termos de Uso
            </a>
            <span className="lumina-footer__legal-separator">|</span>
            <a href="#cookies" className="lumina-footer__legal-link">
              Política de Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

