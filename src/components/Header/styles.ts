import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.primary};
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px;
  box-shadow: 0px 6px 8px ${props => props.theme.colors.baseColorThree}, 0px 3px 4px ${props => props.theme.colors.baseColorFour}, 0px 1px 16px ${props => props.theme.colors.baseColorFive};
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const MenuSistema = styled.div`
> svg {
  position: relative;
  color: ${props => props.theme.colors.baseColorFive}; 
  width: 25px;
  height: 25px;
  &:hover {
    color: white;
  }
  /*
  margin-top: 32px;
  margin-left: 32px;
  */
  cursor: pointer 
}
`;

export const IconMenu = styled.div`
  position: relative;
  color: ${props => props.theme.colors.baseColorFive}; 
  width: 25px;
  height: 25px;
  &:hover {
    color: white;
  }
  /*
  margin-top: 32px;
  margin-left: 32px;
  */
  cursor: pointer 
`;