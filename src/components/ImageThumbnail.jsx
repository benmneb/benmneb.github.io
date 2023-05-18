import React from 'react';
import styled from 'styled-components';
import useImagePreloader from '../utils/useImagePreloader';

const CardMedia = styled.div`
  position: relative;
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

export default function ImageThumbnail({ placeholder, gif }) {
  const gifIsLoaded = useImagePreloader(gif);

  return <CardMedia image={gifIsLoaded ? gif : placeholder} />;
}
