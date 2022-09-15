import './App.css';
import {Route, Routes} from 'react-router-dom';
import VideoRecorder from 'react-video-recorder'
import VideoPreview from './Components/VideoPreview';
function App({push}) {
  return (
    <>
   
  {/* <VideoRecorder
  isFlipped={false}
  constraints={{
    audio: true,
    video: true
  }}
  countdownTime={3000}
  dataAvailableTimeout={500}
  showReplayControls
    onRecordingComplete={(videoBlob) => {
      // Do something with the video...
      console.log('videoBlob', videoBlob)
      push('/preview',{videoBlob})
    }}
  /> */}

<h1>Video Recorder App</h1>
    <VideoRecorder
      isFlipped={false}
      // isOnInitially
      countdownTime={0}
      mimeType="video/webm;codecs=vp8,opus"
      constraints={{
        audio: true,
        video: {
          width: { exact: 480, ideal: 480 },
          height: { exact: 640, ideal: 640 },
          aspectRatio: { exact: 0.7500000001, ideal: 0.7500000001 },
          resizeMode: "crop-and-scale"
        }
      }}
      onRecordingComplete={(videoBlob) => {
        // Do something with the video...
        console.log("videoBlob", videoBlob);
        push("/preview", { videoBlob });
      }}
    />
 
<Routes>
<Route path='/preview' element={<VideoPreview/>} />
</Routes>


    </>
  );
}

export default App;
