import { styled, keyframes } from 'styled-components';

export default function AppTitle() {
  return (
    <p>
      <ThreeDText>By ~ Divyansh Jha</ThreeDText>
    </p>
  );
}

const threeDAnimation = keyframes`
  from {
    transform: scale(1) translate(-50%, -50%);
    text-shadow: 1px 1px 0 grey, 1px 2px 0 grey, 1px 3px 0 grey, 1px 4px 0 grey,
      1px 5px 0 grey, 1px 6px 0 grey, 1px 7px 0 grey, 1px 8px 0 grey,
      5px 13px 15px black;
  }

  to {
    transform: scale(1.1) translate(-50%, -50%);
    text-shadow: 1px -1px 0 grey, 1px -2px 0 grey, 1px -3px 0 grey,
      1px -4px 0 grey, 1px -5px 0 grey, 1px -6px 0 grey, 1px -7px 0 grey,
      1px -8px 0 grey, 5px -13px 15px black, 5px -13px 25px #808080;
  }
`;

const ThreeDText = styled.div`
  color: #46c4fa;
  white-space: nowrap;
  position: absolute;
  top: 10%;
  left: 80%;
  transform: translate(-50%, -50%);
  font-size: 3em;
  font-family: sans-serif;
  letter-spacing: 0.1em;
  transition: 0.3s;
  text-shadow:
    1px 1px 0 #5e74bd,
    1px 2px 0 #5e74bd,
    1px 3px 0 #5e74bd,
    1px 4px 0 #5e74bd,
    1px 5px 0 #5e74bd,
    1px 6px 0 #5e74bd,
    1px 7px 0 #5e74bd,
    1px 8px 0 #5e74bd,
    5px 13px 15px black;

  &:hover {
    transition: 0.3s;
    animation: ${threeDAnimation};
  }
`;
