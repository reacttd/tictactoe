// import React from 'react';
// import FlipButtonHoriz from '../buttons/FlipButtonHoriz';
// import { 
//     SCElementsContainer, 
//     SCElementsWrapper,
//     SCElementsRow,
//     Column1, 
//     TextWrapper,
//     TopLine,
//     Heading,
//     Subtitle,
//     BtnWrap,
// } from '../SoundcloudSection/SCElements';

// const SoundCloudSection = () => {
//     lightbg,
//     id,
//     playerStart,
//     topline,
//     headline,
//     darkText,
//     description,
//     buttonLabel,
//     playerStart,
//     SCPlayer,
//     primary,
//     dark,
//     dark2
//   return (
//     <>
//         <SCElementsContainer>
//             <SCElementsWrapper>
//                 <SCElementsRow playerStart={playerStart}>
//                     <Column1>
//                     <TextWrapper>
//                         <TopLine>{topline}</TopLine>
//                         <Heading lightText={lightText}>{headline}</Heading>
//                         <Subtitle darkText={darkText}>{description}</Subtitle>
//                         <BtnWrap>
//                             <FlipButtonHoriz
//                             to="home"
//                             smooth={true}
//                             duration={500}
//                             spy={true}
//                             exact='true'
//                             offset={-80}
//                             primary={primary}
//                             dark={dark}
//                             dark2={dark2}>
//                             </FlipButtonHoriz>
//                             {buttonLabel}
//                         </BtnWrap>
//                     </TextWrapper>
//                     </Column1>
//                     <Column2>
//                         <SCPlayerWrap>
//                         <SCPlayer>
//                         <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" 
//                         src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1301267287&color=%238d00ff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
//                         </iframe>
//                         {/* <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/trapstarbam" title="Trapstar Bam" target="_blank" style="color: #cccccc; text-decoration: none;">Trapstar Bam</a> · <a href="https://soundcloud.com/trapstarbam/lil-barb3" title="LiL BaRb!3" target="_blank" style="color: #cccccc; text-decoration: none;">LiL BaRb!3</a>
//                         </div> */}
//                         </SCPlayer>
//                         </SCPlayerWrap>
//                     </Column2>
//                 </SCElementsRow>
//             </SCElementsWrapper>
//         </SCElementsContainer>
//     </>
//   )
// }

// export default SoundCloudSection;