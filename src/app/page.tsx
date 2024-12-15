import { Container, Flex, Heading, Text, Box } from '@radix-ui/themes';
import { CheckIcon } from '@radix-ui/react-icons';

export default function HomePage() {
  return (
    <Box asChild>
      <main>
        <Container size="3">
          <Flex direction="column" align="center" justify="center" py="9" gap="5">
            <Heading size="8" align="center">
              Welcome to the App Template!
            </Heading>

            <Text size="5">
              This is a robust starting point for building applications quickly. It includes:
            </Text>

            <Box mt="4">
              <Flex direction="column" gap="3">
                <Flex align="center" gap="2">
                  <CheckIcon className="text-green-500" width={20} height={20} />
                  <Text>Authentication functionality</Text>
                </Flex>
                <Flex align="center" gap="2">
                  <CheckIcon className="text-green-500" width={20} height={20} />
                  <Text>Profile management</Text>
                </Flex>
                <Flex align="center" gap="2">
                  <CheckIcon className="text-green-500" width={20} height={20} />
                  <Text>Admin panel for advanced control</Text>
                </Flex>
              </Flex>
            </Box>

            <Text size="4">
              Use this template to kickstart your next project and save time on setup!
            </Text>

            <Text size="2" color="gray">
              Built with Next.js, Radix, TailwindCSS, and modern best practices.
            </Text>
          </Flex>
        </Container>
      </main>
    </Box>
  );
}