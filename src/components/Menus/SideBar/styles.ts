import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.baseColorThree};
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 250px;
  animation: showSidebar .4s;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 15px;
    margin-left: 35px;
    cursor: pointer;
  }
  
  @keyframes showSidebar {
    /* from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 250px;
    } */

    0% {opacity: 0; width: 0px}
    20% {opacity: 0; width: 0px}
    40% {opacity: 0; width: 0px}
    60% {opacity: 0; width: 100px}
    80% {opacity: 0; width: 200px}
    100% {opacity: 1; width: 250px}
  }
  `;

export const Content = styled.div`
  margin-top: 60px;
  flex-direction: column;
  display: flex;
  scroll-behavior: smooth;
  overflow: auto;
  scroll-snap-type: y mandatory;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #000
  }

  ::-webkit-scrollbar-thumb {
    background: #fff;
    border-radius: 10px
  }

`;
/* left: ${props => props.sidebar ? '0' : '-100%'}; */