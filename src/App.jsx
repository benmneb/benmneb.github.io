import { StyledTheme } from './assets';
import { GlobalStyles } from './assets';

import { NavTabs } from './components';
import { Hello, Projects, Contact } from './sections';

export function App() {
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
