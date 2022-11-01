import styled from "styled-components";

export const MapStyled = styled.div`  
  height: 100%;
  width: 70%;
  margin: 10px auto;
  display: grid; 
  grid-template-columns: repeat(25,4%);
  gird-template-rows: repeat(19);  
`;
//height: 400px;
//background-image: url(${background});

export const ButtonsStyled = styled.div`
width: 150px;
display: flex;
flex-wrap: wrap;
color: #ffffff;
padding: 400px 0 0 0;
button{
  &:hover {
    cursor: pointer;
 }
}
`
export const ButtonUp = styled.div`
flex: 1 0 80%
`
export const ButtonDown = styled.div`
flex: 1 0 80%
`
export const ButtonRight = styled.div`
flex: 1 0 45%
`
export const ButtonLeft = styled.div`
flex: 1 0 45%
`
