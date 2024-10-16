import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  background: #071952;
  color: #fff;
  border: unset;
  padding: 10px 15px;
  border-radius: 10px;
`;
 
const Button = ({ title, data, children, ...rest }) => {
    // console.log('props', props)
    // const { title, disabled } = props;
    // const { title, data, children, ...rest } = props; // Destructuing, Rest
    // console.log('buttonData', data)
    return (
        <>
            {/* <ButtonStyled disabled={props.disabled} title={props.title} >Custom Button</ButtonStyled> */}
            {/* <ButtonStyled disabled={disabled} title={title} >Custom Button</ButtonStyled> */}
            <ButtonStyled title={title} {...rest} >{children}</ButtonStyled>
        </>
    )
}

export default Button;
