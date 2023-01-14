import useAckee from 'use-ackee';

import { GlobalStyles, StyledTheme } from './assets';

import { NavTabs } from './components';
import { Contact, Hello, Projects } from './sections';

export function App() {
  useAckee(
    '/',
    {
      server: 'https://acklytics.vercel.app',
      domainId: 'd571ac04-f0be-4ca9-9999-b035ee86111a',
    },
    {
      detailed: true,
      ignoreLocalhost: true,
      ignoreOwnVisits: true,
    }
  );

  return (
    <StyledTheme>
      <GlobalStyles />
      <NavTabs />
      <main>
        <Hello />
        <Projects />
        <Contact />
      </main>
    </StyledTheme>
  );
}
