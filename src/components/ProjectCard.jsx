import React from 'react';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { FaGithub } from 'react-icons/fa';
import { MdLaunch } from 'react-icons/md';
import { Button } from '../utils';
import ImageThumbnail from './ImageThumbnail';
import { ProjectCardBody as CardBody } from './ProjectCardBody';

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

export function ProjectCard({ project }) {
  const match = useMatch({ path: String(project.id) });
  const isSelected = match?.pattern.path === String(project.id);
  const navigate = useNavigate();

  return (
    <Card index={project.id}>
      <ImageThumbnail gif={project.gif} placeholder={project.placeholder} />
      <CardInfo>
        <Link to={String(project.id)}>
          <CardTitle>{project.title}</CardTitle>
        </Link>
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
  );
}
