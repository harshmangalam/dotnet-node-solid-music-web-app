// 1. import `HopeProvider` component
import {  HopeProvider, Stack } from "@hope-ui/solid";
import Navbar from "./components/Navbar";

// 2. Wrap HopeProvider at the root of your app
export default function App() {
  // const [data] = createResource(fetchSongs);

  

  return (
    <HopeProvider config={{ initialColorMode: "dark" }}>
      
      <Stack minH={"$screenH"}>
        <Navbar/>
      </Stack>
    </HopeProvider>
  );
}
