import {
  Box,
  Heading,
  IconButton,
  Image,
  Stack,
  Tag,
  Text,
  VStack,
} from "@hope-ui/solid";
import { FaSolidPlay } from "solid-icons/fa";
export default function Song(props) {
  return (
    <Box pos={"relative"} rounded={"$md"} bg={"$neutral4"}>
      <Image src={props.thumbnail} w="$full" h={"$60"} roundedTop="$md" />
      <Stack direction={"column"} spacing={"$2"} p={"$4"}>
        <Heading fontSize={"$xl"}>{props.title}</Heading>
        <Text>{props.artist}</Text>
        <Box>
          <Tag variant={"solid"} colorScheme="danger">
            {props.category}
          </Tag>
        </Box>
        <Box right={"$2"} top={"$56"} pos={"absolute"}>
          <IconButton
            colorScheme={"primary"}
            icon={<FaSolidPlay size={24} />}
            onClick={() =>
              props.setCurrentSong({
                title: props.title,
                src: props.src,
                id: props.id,
                thumbnail: props.thumbnail,
                artist: props.artist,
              })
            }
          />
        </Box>
      </Stack>
    </Box>
  );
}
