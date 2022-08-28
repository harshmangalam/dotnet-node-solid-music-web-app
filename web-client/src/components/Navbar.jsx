import { HStack } from "@hope-ui/solid";
import Logo from "./Logo";

export default function Navbar(){
    return (
        <HStack as="nav">
            <Logo/>
        </HStack>
    )
}