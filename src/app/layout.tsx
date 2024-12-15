import { ThemeProvider } from 'next-themes';
import { Theme, Box, Flex } from "@radix-ui/themes";

import Header from '../components/header/Header';
import './globals.css';
import "@radix-ui/themes/styles.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Theme accentColor="gray" grayColor="auto" >
            <Flex direction="column" height="100vh">
              <Header />
              <Box flexGrow="1">
                {children}
              </Box>
            </Flex>
          </Theme>
        </ThemeProvider>
      </body>
    </html >
  );
}
