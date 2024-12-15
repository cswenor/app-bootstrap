'use client';

import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useState, useEffect } from 'react';
import { Heading, IconButton, Link, Container, Box, Flex } from '@radix-ui/themes';
import NextLink from 'next/link';

export default function Header() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    return (
        <Box asChild>
            <header>
                <Container size="4">
                    <Flex justify="between" align="center" p="4">
                        <Heading asChild>
                            <NextLink href="/">
                                Your App Name
                            </NextLink>
                        </Heading>

                        <IconButton
                            size="3"
                            variant="ghost"
                            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                            aria-label="Toggle theme"
                        >
                            {mounted ? (
                                theme === 'light' ? <MoonIcon /> : <SunIcon />
                            ) : (
                                <MoonIcon />
                            )}
                        </IconButton>
                    </Flex>
                </Container>
            </header>
        </Box>
    );
}