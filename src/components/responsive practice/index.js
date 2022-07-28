import styled from "styled-components";
import React from 'react';
import { SmallContainer, SmallWrapper, SmallH1, MediumContainer, MediumWrapper, MediumH1, LargeContainer, LargeWrapper, LargeH1 } from "./ResponsiveElements";

const Responsiveness = () => {
  return (
    <>
        <SmallContainer>
            <SmallWrapper>
                <SmallH1>This is the phone size screen!</SmallH1>
            </SmallWrapper>
        </SmallContainer>
        <MediumContainer>
            <MediumWrapper>
                <MediumH1>This is the tablet size screen!</MediumH1>
            </MediumWrapper>
        </MediumContainer>
        <LargeContainer>
            <LargeWrapper>
                <LargeH1>This is the large size screen!</LargeH1>
            </LargeWrapper>
        </LargeContainer>
    </>
  );
}

export default Responsiveness;