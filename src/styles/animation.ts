import { keyframes } from "@mui/system";

export const waveAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(20deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const typingAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

export const colorTransition = keyframes`
  0% {
    color: transparent;
    background: linear-gradient(45deg, #ff6f61, #ffcc5c);
    WebkitBackgroundClip: text;
    WebkitTextFillColor: transparent;
  }
  100% {
    color: white;
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const hoverFadeIn = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.8;
  }
`;
