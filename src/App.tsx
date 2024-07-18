import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Button } from "./Button";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    // Fragment:
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="success" />
      <Button variant="danger" />
      <Button />
    </ThemeProvider>
  );
}
