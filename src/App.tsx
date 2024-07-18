import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Button } from "./Button";

export function App() {
  return (
    // Fragment:
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="success" />
      <Button variant="danger" />
      <Button />
    </ThemeProvider>
  );
}
