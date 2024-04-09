import { useState } from "react";
import Index from "./components/Index";

import { useLocalCameraStream } from './chat/video/useLocalCameraStream';
import { VideoFeed } from './chat/video/VideoFeed';


function App() {
  const [isLoggedIn, setLoggedIn ] = useState(false);
  const { localStream } = useLocalCameraStream();
 
  if (!localStream) {
    return null;
  }

  return (
    <>
      <Index isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
    </>

  );
}

export default App;
