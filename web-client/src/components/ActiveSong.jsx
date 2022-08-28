import {
  Avatar,
  Box,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from "@hope-ui/solid";

export default function ActiveSong(props) {
  return (
    <Box
      pos={"fixed"}
      left={0}
      right={0}
      bottom={0}
      py={"$2"}
      zIndex={"$sticky"}
      bg={"$neutral5"}
    >
      <Container>
        <HStack spacing={"$4"}>
          <Avatar src={props.thumbnail} size={"lg"} flex="none" />
          <VStack alignItems={"start"} flexGrow={1} w="$full">
            <Heading fontSize={"$xl"}>{props.title}</Heading>
            <Text>{props.artist}</Text>
          </VStack>
          <Box w="$full" as="audio" controls src={props.src} />
        </HStack>
      </Container>
    </Box>
  );
}
