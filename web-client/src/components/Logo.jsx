import { Heading, HStack, Icon } from "@hope-ui/solid";
import { SiApplemusic } from 'solid-icons/si'

export default function Logo() {
  return (
    <HStack spacing={"$2"}>
      <Icon as={SiApplemusic} color="$primary10" fontSize={"$4xl"} />
      <Heading fontSize={"$3xl"}>Rockify</Heading>
    </HStack>
  );
}
