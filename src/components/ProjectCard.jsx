import { motion, useMotionValue } from 'framer-motion';
import React, { memo, useRef } from 'react';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { MdLaunch } from 'react-icons/md';
import { Button } from '../utils';
import ImageThumbnail from './ImageThumbnail';

import { closeSpring, openSpring } from '../utils/animations';
import { useInvertedBorderRadius } from '../utils/useInvertedBorderRadius';
import { useScrollConstraints } from '../utils/useScrollConstraints';
import { useWheelScroll } from '../utils/useWheelScroll';

const CardWrapper = styled.li`
  position: relative;
  display: block;
  width: 100%;
  height: 500px;

  ${(props) =>
    props.isSelected &&
    css`
      inset: 0;
      position: fixed;
      z-index: 10;
      overflow: hidden;
      padding: 40px 0;
    `}
`;

const Card = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #467139;
  border-radius: ${(props) => props.theme.spacing(1.5)};
  ${
    '' /* flex-direction: ${(props) => (props.index % 2 ? 'row-reverse' : 'row')}; */
  }
  pointer-events: auto;
  overflow: hidden;
  margin: 0 auto;

  ${(props) =>
    props.$isSelected &&
    css`
      z-index: 10;
      overflow: hidden;
      max-width: 700px;
      height: auto;
    `}

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
  ${'' /* justify-content: space-between; */}
  border-radius: ${(props) => props.theme.spacing(1.5)};
  padding: ${(props) => props.theme.spacing(2)};
  ${'' /* height: 150px; */}

  ${(props) => props.theme.breakpoints.down('tablet')} {
    justify-content: space-evenly;
  }
`;

const CardTitle = styled.h3`
  line-height: ${(props) => props.theme.spacing(5)};
  width: 100%;
  margin: 0;
  text-align: left;
`;

const CardActions = styled.div`
  display: flex;
  flexshrink: 1;
  justifycontent: 'center';
`;

const StyledLink = styled(Link)`
  position: absolute;
  inset: 0;
  cursor: zoom-in;
`;

// TODO: make it less on mobile
const dismissDistance = 150;

export const ProjectCard = memo(
  ({ project }) => {
    const match = useMatch({ path: String(project.id) });
    const isSelected = match?.pattern.path === String(project.id);
    const navigate = useNavigate();

    const y = useMotionValue(0);
    // const zIndex = useMotionValue(isSelected ? 10 : 0);

    // Maintain the visual border radius when we perform the layoutTransition by inverting its scaleX/Y
    const inverted = useInvertedBorderRadius(20);

    // We'll use the opened card element to calculate the scroll constraints
    const cardRef = useRef(null);
    const constraints = useScrollConstraints(cardRef, isSelected);

    function checkSwipeToDismiss() {
      y.get() > dismissDistance && navigate('/');
    }

    // function checkZIndex(latest) {
    //   if (isSelected) {
    //     zIndex.set(10);
    //   } else if (!isSelected && latest.scaleX < 1.01) {
    //     zIndex.set(0);
    //   }
    // }

    // When this card is selected, attach a wheel event listener
    const containerRef = useRef(null);
    useWheelScroll(
      containerRef,
      y,
      constraints,
      checkSwipeToDismiss,
      isSelected
    );

    return (
      <CardWrapper ref={containerRef}>
        <Overlay isSelected={isSelected} />
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            display: 'block',
            pointerEvents: 'none',
            ...(isSelected && {
              top: 0,
              left: 0,
              right: 0,
              position: 'fixed',
              zIndex: 10,
              overflow: 'hidden',
              padding: '40px 0',
            }),
          }}
        >
          <Card
            index={project.id}
            $isSelected={isSelected}
            ref={cardRef}
            style={{ ...inverted, y }}
            layoutTransition={isSelected ? openSpring : closeSpring}
            drag={isSelected ? 'y' : false}
            dragConstraints={constraints}
            onDrag={checkSwipeToDismiss}
            // onUpdate={checkZIndex}
          >
            <ImageThumbnail
              gif={project.gif}
              placeholder={project.placeholder}
            />
            <CardInfo>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: '100%',
                }}
              >
                <div style={{ flexGrow: 1, display: 'flex' }}>
                  <CardTitle>{project.title}</CardTitle>
                </div>
                <CardActions>
                  <Button
                    primary
                    href={project.url}
                    target="_blank"
                    icon={<MdLaunch />}
                    style={{ zIndex: 11 }}
                  >
                    View
                  </Button>
                </CardActions>
              </div>
              {isSelected && (
                <div>
                  lorem ipsuim lorem ipsuim lorem ipsuim lorem ipsuim lorem
                  ipsuim lorem ipsuim lorem ipsuim lorem ipsuim lorem ipsuim
                  lorem ipsuim lorem ipsuim lorem ipsuim lorem ipsuim lorem
                  ipsuim lorem ipsuim lorem ipsuim lorem ipsuim lorem ipsuim
                  lorem ipsuim lorem ipsuim lorem ipsuim lorem ipsuim lorem
                  ipsuim lorem ipsuim lorem ipsuim lorem ipsuim lorem ipsuim
                  lorem ipsuim lorem ipsuim lorem ipsuim lorem ipsuim lorem
                  ipsuim lorem ipsuim lorem ipsuim lorem ipsuim lorem ipsuim
                  lorem ipsuim lorem ipsuim lorem ipsuim lorem ipsuim lorem
                  ipsuim lorem ipsuim lorem ipsuim lorem ipsuim lorem ipsuim
                  lorem ipsuim lorem ipsuim lorem ipsuim lorem ipsuim lorem
                  ipsuim lorem ipsuim lorem ipsuim lorem ipsuim lorem ipsuim
                  lorem ipsuim lorem ipsuim lorem ipsuim lorem ipsuim lorem
                  ipsuim lorem ipsuim lorem ipsuim lorem ipsuim lorem ipsuim
                  lorem ipsuim lorem ipsuim lorem ipsuim lorem ipsuim lorem
                  ipsuim lorem ipsuim lorem ipsuim
                </div>
              )}
            </CardInfo>
            {!isSelected && <StyledLink to={String(project.id)} />}
          </Card>
        </div>
      </CardWrapper>
    );
  },
  (prev, next) => prev.isSelected === next.isSelected
);

const StyledOverlay = styled(motion.div)`
  z-index: 9;
  position: fixed;
  background: rgba(159, 159, 159, 0.6);
  backdrop-filter: blur(20px);
  will-change: opacity;
  inset: 0;

  & > a {
    position: fixed;
    inset: 0;
    cursor: zoom-out;
  }
`;

const Overlay = ({ isSelected }) => (
  <StyledOverlay
    initial={false}
    animate={{ opacity: isSelected ? 1 : 0 }}
    transition={{ duration: 0.2 }}
    style={{ pointerEvents: isSelected ? 'auto' : 'none' }}
  >
    <Link to="/" />
  </StyledOverlay>
);
