import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">The Power Pilot Innovation Hub</h1>
        <p className="hero__subtitle">Driving Digital Transformation</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Discover My Projects
          </Link>
        </div>
      </div>
    </header>
  );
}
function Features() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <div className={styles.feature}>
              <h3>Technical Expertise</h3>
              <p>
                Specialising in Microsoft technologies, Power Platform, and open source tech, with a strong focus on innovative solutions.
              </p>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.feature}>
              <h3>AI and Innovation</h3>
              <p>
                Collaborating with industry leaders like IBM and Microsoft to drive AI solutions and foster technological innovation.
              </p>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.feature}>
              <h3>Community Engagement</h3>
              <p>
                Actively raising public profile in tech communities, sharing knowledge, and engaging in client-focused technological advancements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="Seb's Innovation Hub - Driving Technological Transformation">
      <HomepageHeader />
      <main>
        <Features />
      </main>
    </Layout>
  );
}

