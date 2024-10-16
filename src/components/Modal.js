import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

// Overlay
const ModalContainer = styled.div`
  background: rgba(0,0,0, 0.8);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: #fff;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Modal Content
const ModalContent = styled.div`
  padding: 20px;
  border-radius: 14px;
  background: #fff;
  color: #000;
  max-width: 500px;
  width: 100%;
  margin:  50px auto 0 auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const HeadingStyled = styled.h2`
    margin: 0;
    font-size: 24px;
    font-weight: 700;
`;

const Modal = ({ onClose, open, heading, children, buttonLabel }) => {
    // console.log('onClose', onClose)

    // Component Logic

    return (
        <>
            {open &&
                <ModalContainer>
                    <ModalContent>
                        {heading &&
                            <HeadingStyled>{heading}</HeadingStyled>
                        }
                        <div>{children}</div>
                        {buttonLabel &&
                            <div>
                                <Button onClick={onClose} >{buttonLabel}</Button>
                            </div>
                        }
                    </ModalContent>
                </ModalContainer>
            }
        </>
    )
}

export default Modal;
