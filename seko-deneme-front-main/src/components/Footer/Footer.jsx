import React from 'react';
import { useI18n } from '../../i18n/I18nContext';
import './Footer.css';

const Footer = () => {
  const { t } = useI18n();
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <a href="/" className="footer-logo"><img src="/logo.png" alt="KAPTAŞ Car Rental" /></a>
          <p>{t('footer.description')}</p>
        </div>
        
        <div className="footer-links">
          <h4>{t('footer.pages')}</h4>
          <ul>
            <li><a href="/">{t('common.home')}</a></li>
            <li><a href="/arac-filosu">{t('common.fleet')}</a></li>
            <li><a href="/hakkimizda">{t('common.about')}</a></li>
            <li><a href="/iletisim">{t('common.contact')}</a></li>
            <li><a href="/kiralama-kosullari">{t('common.conditions')}</a></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h4>{t('footer.contact')}</h4>
          <ul>
            <li>
              <i className='bx bx-phone'></i>
              <a dir="ltr" href="tel:+905550456261">0 (555) 045 62 61</a>
            </li>
            <li>
              <i className='bx bx-envelope'></i>
              <a href="mailto:kaptascarrental@gmail.com">kaptascarrental@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} KAPTAŞ Car Rental. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
