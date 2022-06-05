import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
      black: "#000000",
      pink: "#FFB6C1",
      whiteSmoke: "#F5F5F5",
      aqua: "#00FFFF",
    },
    fonts: ["sans-serif", "Roboto", "Dancing Script", "Cursive"],
    fontSizes: {
      small: "1rem",
      medium: "2rem",
      large: "3rem"
    } 
  }
  const Theme = ({ children }) => (
      <ThemeProvider theme = { theme } > { children }</ThemeProvider>
  );
  export default Theme;