// 1. import `HopeProvider` component
import { HopeProvider } from "@hope-ui/solid";

// 2. Wrap HopeProvider at the root of your app
export default function App() {
  const [data] = createResource(fetchSongs);

  async function fetchSongs(){
    const songs = await fetch("http://localhost")
  }

  return (
    <HopeProvider config={{ initialColorMode: "dark" }}>
      
    </HopeProvider>
  );
}
