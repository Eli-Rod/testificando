import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.baseColorThree};
  font-size: 14px;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 10px 1px;
  margin-bottom: 8px;

  > svg {
    margin: 0 10px;
    width: 23px;
    height: 23px;
  }

  &:hover {
    background-color: ${props =>
      props.theme.title === 'light' ?
      props.theme.colors.baseColorOne :
      props.theme.colors.baseColorFive};
    box-shadow: 5px 5px 5px #444, 5px 5px 5px #444;
  }
`;