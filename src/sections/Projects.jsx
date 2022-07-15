import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { MdLaunch } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

import { Section, ProjectCardBody as CardBody } from '../components';
import { Button } from '../utils';
import { getMainProjects } from '../assets';

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

const Card = styled.div`
  display: flex;
  width: 100%;
  padding: ${(props) => props.theme.spacing(2)};
  flex-direction: ${(props) => (props.index % 2 ? 'row-reverse' : 'row')};
  gap: ${(props) => props.theme.spacing(4)};

  & > * {
    width: 50%;
    height: 300px;
  }

  ${(props) => props.theme.breakpoints.down('tablet')} {
    flex-direction: column;
    gap: 0;

    & > * {
      width: 100%;
      padding-top: ${(props) => props.theme.spacing(2)};
      padding-left: 0;
    }
  }
`;

const CardMedia = styled.div`
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  overflow: hidden;
  border-radius: ${(props) => props.theme.spacing()};
  filter: brightness(75%);
  transition: ${(props) => `filter ${props.theme.transitions.long} ease`};

  :hover {
    filter: brightness(100%);
    ::after {
      transform: scale(1.05);
    }
  }

  ::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: inherit;
    background-size: cover;
    transform-origin: center;
    transition: ${(props) => `transform ${props.theme.transitions.long} ease`};
  }

  ${(props) => props.theme.breakpoints.down('tablet')} {
    filter: brightness(100%);
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;

  ${(props) => props.theme.breakpoints.down('tablet')} {
    justify-content: space-evenly;
  }
`;

const CardTitle = styled.h3`
  line-height: ${(props) => props.theme.spacing(5)};
  width: 100%;
  margin: 0;
`;

const CardActions = styled.div`
  display: flex;
`;

export function Projects() {
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
    <Section name="projects">
      <Heading>Selected works.</Heading>
      <Container>
        {mainProjects?.map((project) => (
          <Card key={project.title} index={project.id}>
            <CardMedia image={project.image} />
            <CardInfo>
              <CardTitle>{project.title}</CardTitle>
              <CardBody project={project} />
              <CardActions>
                <Button primary href={project.url} icon={<MdLaunch />}>
                  Launch
                </Button>
                <Button href={project.github} icon={<FaGithub />}>
                  Source
                </Button>
              </CardActions>
            </CardInfo>
          </Card>
        ))}
      </Container>
    </Section>
  );
}
