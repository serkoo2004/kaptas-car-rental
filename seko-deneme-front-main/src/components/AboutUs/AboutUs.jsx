import React from 'react';
import { useI18n } from '../../i18n/I18nContext';
import '../FleetSales/FleetSales.css';

const AboutUs = () => {
  const { t } = useI18n();
  const paragraphs = t('about.paragraphs');

  return (
    <div className="fleet-sales-wrapper">
      <div className="container breadcrumb-container">
        <ul className="breadcrumb">
          <li><a href="/" title={t('common.home')}>{t('common.home')}</a></li>
          <li><span className="separator">/</span></li>
          <li className="active">KAPTAŞ</li>
        </ul>
      </div>

      <section className="container sub_page">
        <header>
            <h1>{t('about.heading')}</h1>
        </header>
        <div className="sub_page_content">
          <div style={{textAlign: 'center'}}>
            <h2 style={{ fontSize: '1.8rem', marginTop: '2rem', marginBottom: '1.2rem' }}>{t('about.title')}</h2>
            <h3 style={{ fontSize: '1.3rem', marginTop: '1.5rem', marginBottom: '1rem', color: '#555' }}>{t('about.subtitle')}</h3>
            {paragraphs.map((paragraph) => (
              <p key={paragraph} style={{ lineHeight: '1.8', marginBottom: '1rem', color: '#444' }}>{paragraph}</p>
            ))}
            <br />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
