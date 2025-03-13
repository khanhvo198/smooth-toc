import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";

export const Provider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider
        attribute="class"
        disableTransitionOnChange
        forcedTheme="dark"
      >
        {children}
      </ThemeProvider>
    </ChakraProvider>
  );
};
