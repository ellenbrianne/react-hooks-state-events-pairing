import { useState } from "react"; 
import video from "../data/video.js";
import Video from "./Video.js";
import Comments from "./Comments.js";
import Buttons from "./Buttons";

function App() {

  const [showComments, setShowComments] = useState(true);

  return (
    <div className="App">
      <Video videoData={video} />
      <h1>{video.title}</h1>
      <p>{video.views} Views | Uploaded {video.createdAt} </p>
      <Buttons 
        videoData={video} 
        showComments={showComments} 
        setShowComments={setShowComments}
      />
      {showComments ? <Comments comments={video.comments} /> : null}
    </div>
  );
}

export default App;
