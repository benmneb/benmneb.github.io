import styled, { css } from 'styled-components';

const StyledButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing(1)};
  padding: ${(props) => props.theme.spacing(1, 2)};
  margin: ${(props) => props.theme.spacing(0.5, 1)};
  width: 100%;
  align-self: center;
  border-radius: ${(props) => props.theme.spacing(1.5)};
  transition: ${(props) =>
    `all ${props.theme.transitions.shorter} ease-in-out`};
  cursor: pointer;

  ${(props) =>
    props.primary
      ? css`
          background-color: ${(props) => props.theme.colors.font};
          color: ${(props) => props.theme.colors.projects};
          border: none;
          :hover {
            background-color: ${(props) => props.theme.colors.font + 'dd'};
          }
        `
      : css`
          background-color: transparent;
          border: ${(props) =>
            `${props.theme.spacing(0.25)} solid ${props.theme.colors.font}`};
          :hover {
            background-color: rgba(0, 0, 0, 0.05);
          }
        `}
`;

export default function Button(props) {
  const { children, icon, ...other } = props;

  return (
    <StyledButton {...other}>
      {!other.primary && icon && icon}
      {children}
      {other.primary && icon && icon}
    </StyledButton>
  );
}
