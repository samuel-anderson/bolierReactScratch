import { GlobalStyle } from "./styles/globalstyles";

import Header from "./components/header/header.component";
import { ThemeProvider } from "@mui/material/styles";
import generateTheme from "./theme/theme";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import FirstBody from "./routes/body/first.component";
import SecondBody from "./routes/body/second.component";

import ThirdBody from "./routes/body/third.component";

const App = () => {
  const themeMode = useSelector((state) => state.theme.mode);
  const theme = generateTheme(themeMode);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Header />}>
          {/* Index - Determines if the route is an index route. Index routes render into their 
        parent's Outlet at their parent's URL (like a default child route). */}
          <Route index element={<FirstBody />} />
          <Route path="second" element={<SecondBody />} />
          <Route path="third" element={<ThirdBody />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
