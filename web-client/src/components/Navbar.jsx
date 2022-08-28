import { Box, Container, HStack, IconButton, Tooltip } from "@hope-ui/solid";
import Logo from "./Logo";
import { AiOutlineGithub } from "solid-icons/ai";
export default function Navbar() {
  return (
    <Container
      as="nav"
      pos="fixed"
      top={0}
      left={0}
      right={0}
      h={"$20"}
      zIndex={"$sticky"}
      bg={"$accent1"}
    >
      <HStack w="$full" h="$full" justifyContent={"space-between"}>
        <Logo />
        <Tooltip withArrow label="Github Source Code">
          <IconButton
            as="a"
            href="https://github.com/harshmangalam/dotnet-node-solid-music-web-app"
            icon={<AiOutlineGithub size={24} />}
            target="_blank"
            colorScheme={"neutral"}
          />
        </Tooltip>
      </HStack>
    </Container>
  );
}
