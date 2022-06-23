import React from 'react'
import {
    ThreeD, 
    MiniThreeD, 
    MiniThreeDGreen, 
    MiniThreeDRed, 
    MiniThreeDYellow, 
    MiniThreeDPurple, 
    MiniThreeDBlue, 
    SmallThreeDGreen, 
    SmallThreeD, 
    SmallThreeDRed, 
    SmallThreeDYellow, 
    SmallThreeDPurple, 
    SmallThreeDBlue, 
    NormalThreeD, 
    NormalThreeDGreen, 
    NormalThreeDRed, 
    NormalThreeDYellow, 
    NormalThreeDPurple, 
    NormalThreeDBlue, 
    LargeThreeD, 
    LargeThreeDGreen, 
    LargeThreeDRed, 
    LargeThreeDYellow, 
    LargeThreeDPurple, 
    LargeThreeDBlue, 
    GreenThreeD, 
    RedThreeD, 
    YellowThreeD, 
    PurpleThreeD, 
    BlueThreeD, 
    BlockThreeD,
    BlockThreeDYellow,
    BlockThreeDPurple,
    BlockThreeDBlue
} from './ColorfulButtonsElements';

const ColorfulButtons = () => {
  return (
    <>
        <ColorfulButtonsContainer>
            <ColorfulButtonsWrapper>
            <ColorfulButtonsH1>Colorful Buttons</ColorfulButtonsH1>
                <ColorfulButtonsItems>
                    <ColorfulButtonsMiniH2>base</ColorfulButtonsMiniH2>
                    <ThreeD />
                    <GreenThreeD />
                    <RedThreeD />
                    <YellowThreeD />
                    <PurpleThreeD />
                    <PurpleThreeD />
                    <BlueThreeD />
                </ColorfulButtonsItems>                       
                <ColorfulButtonsItems>
                    <ColorfulButtonsMiniH2>mini</ColorfulButtonsMiniH2>
                    <MiniThreeD />
                    <MiniThreeDGreen />
                    <MiniThreeDRed />
                    <MiniThreeDYellow />
                    <MiniThreeDPurple />
                    <MiniThreeDBlue />
                </ColorfulButtonsItems>
                <ColorfulButtonsItems>
                    <ColorfulButtonsSmallH2>small buttons</ColorfulButtonsSmallH2>
                    <SmallThreeD />
                    <SmallThreeDGreen />
                    <SmallThreeDRed />
                    <SmallThreeDYellow />
                    <SmallThreeDPurple />
                    <SmallThreeDBlue />
                </ColorfulButtonsItems>
                <ColorfulButtonsItems>
                    <ColorfulButtonsNormalH2>normal</ColorfulButtonsNormalH2>
                    <NormalThreeD />
                    <NormalThreeDGreen />
                    <NormalThreeDRed />
                    <NormalThreeDYellow />
                    <NormalThreeDPurple />
                    <NormalThreeDBlue />
                </ColorfulButtonsItems>
                <ColorfulButtonsItems>
                    <ColorfulButtonsLargeH2>large</ColorfulButtonsLargeH2>
                    <LargeThreeD />
                    <LargeThreeDGreen />
                    <LargeThreeDRed />
                    <LargeThreeDYellow />
                    <LargeThreeDPurple />
                    <LargeThreeDBlue />                
                    </ColorfulButtonsItems>
                <ColorfulButtonsItems>
                    <ColorfulButtonsLargeJumboH2>block</ColorfulButtonsLargeJumboH2>
                    <BlockThreeD />
                    <BlockThreeDGreen />
                    <BlockThreeDRed />
                    <BlockThreeDYellow />
                    <BlockThreeDPurple />
                    <BlockThreeDBlue />
                </ColorfulButtonsItems>
            </ColorfulButtonsWrapper>
        </ColorfulButtonsContainer>
    </>
  )
}

export default ColorfulButtons;