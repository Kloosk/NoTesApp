import React, {useState} from 'react';
import styled from 'styled-components'
import {useSelector} from "react-redux";

const Container = styled.button`
  border: 2px solid #F9B613;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background: #E8EAE3;
  padding: 10px;
  display: flex;
  align-items: center;
  position: relative;
  @media (min-width: 768px) {
    border-left: none;
  }
`;
const Svg = styled.svg`
  transition: opacity 1s ease,transform 1s ease;
  opacity: ${props => props.status ? '0' : '1'};
  transform: ${props => props.status ? 'scale(0)' : "scale(1)"};
  position: absolute;
  width: 32px;
  height: 32px;
  overflow: hidden;
  color: #F9B613;
`;
const SvgCheck = styled(Svg)`
  transition: opacity 1s ease,transform 1s ease;
  opacity: ${props => props.status ? '1' : '0'};
  transform: ${props => props.status ? 'scale(1)' : "scale(0)"};
  color: greenyellow;
`;
const SaveBtn = () => {
    const objToSave = useSelector(state => state.note);
    const [state,setState] = useState(false);
    const handleSave = () => {
        setState(true);
        localStorage.setItem('noteSave', JSON.stringify(objToSave));
        setTimeout(() => {
            setState(false);
        },1000);
    };
    return (
        <Container onClick={handleSave}>
            <Svg status={state} aria-hidden="true" focusable="false" data-prefix="far" data-icon="save" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM272 80v80H144V80h128zm122 352H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h42v104c0 13.255 10.745 24 24 24h176c13.255 0 24-10.745 24-24V83.882l78.243 78.243a6 6 0 0 1 1.757 4.243V426a6 6 0 0 1-6 6zM224 232c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88zm0 128c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z"></path></Svg>
            <SvgCheck status={state} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></SvgCheck>
        </Container>
    );
};

export default SaveBtn;