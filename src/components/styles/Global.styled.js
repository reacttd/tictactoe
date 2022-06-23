import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap');
	
 }
 * {
 box-sizing: border-box;
 }

 header: {
	margin: 0 !important;
 }

 body {
	background: ${({ theme }) => theme.colors.body};
	color: hsl(192, 100%. 9%);
	font-family: 'Poppins', sans-serif;
	font-size: 1.15em;
	margin: 0;
 }
 p {
	 opacity: 0.6;
	 line-height: 1.5;
 }
 
 img {
	 max-width: 100%;
 }
`;

// export const Container = styled.div`
// 	width: 100%;
// 	max-width: 1300px;
// 	margin: ${({ margin }) => (margin ? margin : '0 auto')};
// 	padding: ${({ padding }) => (padding ? padding : '0 15px')};
// `;

// export const Header = styled.h1`
// 	color: ${({ color }) => (color ? color : 'blue')};
// 	text-align: center;
// 	margin: 2rem;
// `;

// export const DEFAULT_DIV = styled.div`
// 	padding: ${({ padding }) => (padding ? padding : '')};
// 	padding-bottom: ${({ pb }) => (pb ? pb : '')};
// 	padding-top: ${({ pt }) => (pt ? pt : '')};
// 	margin: ${({ margin }) => (margin ? margin : '')};
// 	margin-bottom: ${({ mb }) => (mb ? mb : '')};
// 	margin-top: ${({ mt }) => (mt ? mt : '')};
// 	position: ${({ position }) => (position ? position : '')};
// 	width: ${({ width }) => (width ? width : '')};
// 	min-width: ${({ minWidth }) => (minWidth ? minWidth : '')};
// 	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '')};
// 	height: ${({ height }) => (height ? height : '')};
// 	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : '')};
// 	min-height: ${({ minHeight }) => (minHeight ? minHeight : '')};
// 	background-color: ${({ background }) => (background ? background : '')};
// `;

// export const Section = styled(DEFAULT_DIV)`
// 	height: 100vh;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	font-size: 6rem;
// `;

// export const Row = styled(DEFAULT_DIV)`
// 	display: flex;
// 	justify-content: ${({ justify }) => (justify ? justify : '')};
// 	align-items: ${({ align }) => (align ? align : '')};
// 	gap: ${({ gap }) => (gap ? gap : '')};
// `;

// export const Column = styled(DEFAULT_DIV)`
// 	display: flex;
// 	flex-flow: column;
// 	justify-content: ${({ justify }) => (justify ? justify : '')};
// 	align-items: ${({ align }) => (align ? align : '')};
// 	gap: ${({ gap }) => (gap ? gap : '')};
// `;

// export const Text = styled.span`
// 	font-size: ${({ size }) => (size ? size : '')};
// 	font-weight: ${({ weight }) => (weight ? weight : '')};
// 	letter-spacing: ${({ spacing }) => (spacing ? spacing : '')};
// 	text-align: ${({ align }) => (align ? align : '')};
// 	padding: ${({ padding }) => (padding ? padding : '')};
// 	margin: ${({ margin }) => (margin ? margin : '')};
// 	margin-bottom: ${({ mb }) => (mb ? mb : '')};
// 	margin-top: ${({ mt }) => (mt ? mt : '')};
// 	width: ${({ width }) => (width ? width : 'auto')};
// 	min-width: ${({ minWidth }) => (minWidth ? minWidth : '')};
// 	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '')};
// 	height: ${({ height }) => (height ? height : '')};
// 	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : '')};
// 	min-height: ${({ minHeight }) => (minHeight ? minHeight : '')};
// 	color: ${({ color }) => (color ? color : '')};
// `;

// export const Button = styled.button`
// 	padding: ${({ padding }) => (padding ? padding : '')};
// 	padding-bottom: ${({ pb }) => (pb ? pb : '')};
// 	padding-top: ${({ pt }) => (pt ? pt : '')};
// 	margin: ${({ margin }) => (margin ? margin : '')};
// 	margin-bottom: ${({ mb }) => (mb ? mb : '')};
// 	margin-top: ${({ mt }) => (mt ? mt : '')};
// 	position: ${({ position }) => (position ? position : '')};
// 	width: ${({ width }) => (width ? width : '')};
// 	min-width: ${({ minWidth }) => (minWidth ? minWidth : '')};
// 	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '')};
// 	height: ${({ height }) => (height ? height : '')};
// 	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : '')};
// 	min-height: ${({ minHeight }) => (minHeight ? minHeight : '')};
// 	border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '5px')};
// 	background: #001bff;
// 	color: #fff;
// 	font-size: ${({ size }) => (size ? size : '16px')};
// 	outline: none;
// 	border: none;
// 	cursor: pointer;
// 	white-space: nowrap;

// 	&:hover {
// 		transition: all 0.3s ease-out;
// 		background-color: #0a1573;
// 	}
// `;

export default GlobalStyle;