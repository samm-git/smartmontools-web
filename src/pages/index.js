import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/download">
            Download
          </Link>
          <Link className="button button--secondary button--lg" to="/tocdoc">
            Documentation
          </Link>
          <Link className="button button--secondary button--lg" to="/tocsupport">
            Device support
          </Link>
        </div>
      </div>
    </header>
  );
}

const features = [
  {
    title: 'Download & install',
    link: '/download',
    description:
      'Source tarballs, binaries and packages for Linux, FreeBSD, NetBSD, OpenBSD, macOS, Solaris and Windows.',
  },
  {
    title: 'Documentation',
    link: '/tocdoc',
    description:
      'FAQ, installation notes and the on-line manual pages for smartctl, smartd and smartd.conf.',
  },
  {
    title: 'Device support',
    link: '/tocsupport',
    description:
      'Supported USB bridges, RAID controllers and NVMe devices, and how to read smartctl reports.',
  },
  {
    title: 'Get help',
    link: '/help',
    description:
      'Frequently asked questions, mailing lists and how to report a problem on GitHub.',
  },
];

function Feature({ title, description, link }) {
  return (
    <div className={clsx('col col--3')}>
      <Link className={styles.card} to={link}>
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="smartmontools — control and monitor storage systems using S.M.A.R.T."
    >
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
        <section className={styles.about}>
          <div className="container">
            <h2>About smartmontools</h2>
            <p>
              The smartmontools package contains two utility programs,
              <code> smartctl</code> and <code>smartd</code>, to control and
              monitor storage systems using the <em>Self-Monitoring, Analysis and
              Reporting Technology System</em> (S.M.A.R.T.) built into most
              modern ATA/SATA, SCSI/SAS and NVMe disks. In many cases these
              utilities provide advanced warning of disk degradation and
              failure.
            </p>
            <p>
              Smartmontools runs on Linux, FreeBSD, NetBSD, OpenBSD, Darwin
              (macOS), Solaris, Windows, Cygwin, OS/2, eComStation and QNX, and
              can also be run from one of many <Link to="/livecds">Live CDs/DVDs</Link>.
              It is published under the{' '}
              <a href="https://www.gnu.org/licenses/gpl-2.0.html">GNU General Public License</a>.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
