// 1. import `HopeProvider` component
import {
  Box,
  Container,
  HopeProvider,
  SimpleGrid,
  Stack,
} from "@hope-ui/solid";
import { createResource, createSignal, For, Show } from "solid-js";
import ActiveSong from "./components/ActiveSong";
import Navbar from "./components/Navbar";
import Song from "./components/Song";

// 2. Wrap HopeProvider at the root of your app
export default function App() {
  const [currentSong, setCurrentSong] = createSignal(null);
  const [data] = createResource(fetchSongs);
  async function fetchSongs() {
    try {
      const res = await fetch("http://localhost:5145/api/songs");
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Error while fetching songs");
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  return (
    <HopeProvider config={{ initialColorMode: "dark" }}>
      <Stack
        direction={"column"}
        minH={"$screenH"}
        justifyContent="space-between"
      >
        <Navbar />
        <Box as="main" flexGrow={1} py={"$28"}>
          <Container>
            <SimpleGrid
              columns={{ "@sm": 1, "@md": 2, "@lg": 3, "@xl": 4 }}
              gap={"$6"}
            >
              <For each={data()}>
                {(song, i) => (
                  <Song {...song} setCurrentSong={setCurrentSong} />
                )}
              </For>
            </SimpleGrid>
          </Container>
        </Box>
        <Show when={currentSong()}>
          <ActiveSong {...currentSong()} />
        </Show>
      </Stack>
    </HopeProvider>
  );
}
