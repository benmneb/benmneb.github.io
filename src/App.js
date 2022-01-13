import { StyledTheme } from './assets';
import { GlobalStyles } from './assets/GlobalStyles';

import { NavTabs } from './components';
import { Hello, Projects, Contact } from './sections';
import { useAcklytics } from './assets';

export function App() {
  useAcklytics();

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
