import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import { getMainProjects } from '../assets';
import { ProjectCard, Section } from '../components';

const Heading = styled.h2`
  padding-top: ${(props) => props.theme.spacing(3)};
  display: inline;
`;

const Container = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.breakpoints.hd.min};
  display: flex;
  flex-direction: column;

  > * {
    margin: ${(props) => props.theme.spacing(8, 0)};
  }
`;

function ProjectList() {
  const [muiImageDownloads, setMuiImageDownloads] = useState('Loading');
  const mainProjects = getMainProjects(muiImageDownloads);

  useEffect(() => {
    (async function () {
      const response = await fetch(
        'https://api.npmjs.org/downloads/point/last-week/mui-image'
      );
      const { downloads } = await response.json();
      setMuiImageDownloads(downloads);
    })();
  }, []);

  return (
    <Container>
      {mainProjects?.map((project) => (
        <ProjectCard
          project={project}
          key={project.id}
          // isSelected={match.params.id === project.id}
          // history={history}
        />
      ))}
    </Container>
  );
}

export function Projects() {
  return (
    <BrowserRouter>
      <Section name="projects">
        <Heading>Selected works.</Heading>
        <Routes>
          <Route path="/" element={<ProjectList />} />
          <Route path="/:id" element={<ProjectList />} />
        </Routes>
      </Section>
    </BrowserRouter>
  );
}
