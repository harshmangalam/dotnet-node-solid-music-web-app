import { Heading, HStack, Icon } from "@hope-ui/solid";
import { RiMediaMusicFill } from "solid-icons/ri";

export default function Logo() {
  return (
    <HStack>
      <Icon as={RiMediaMusicFill} color="$primary10" />
      <Heading>Rockify</Heading>
    </HStack>
  );
}
