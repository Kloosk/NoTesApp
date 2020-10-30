import React from 'react'
import styled from 'styled-components'
import Textarea from 'react-expanding-textarea'

const Container = styled(Textarea)`
  width: 100%;
  color: pink;
  background: green;
  border: none;
  font-size: 2rem;
  text-align: center;
  resize: none;
  outline: none;
  min-height: 170px;
  padding: 15px 5px 5px 5px;
`;
const InputDesc = () => {
    const handleChange = e => {
        console.log('Changed value to: ', e.target.value);
    };
    return (
        <>
            <Container
                defaultValue="Title"
                maxLength="30"
                onChange={handleChange}
            />
        </>
    )
};
export default InputDesc