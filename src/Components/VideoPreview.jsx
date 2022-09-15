import React from 'react'

const VideoPreview = (props) => {
  return (
    <>
<h1>Preview</h1>
<video
            src={window.URL.createObjectURL(props.location.state.videoBlob)}
            width={550}
            height={550}
            autoPlay
            loop
            controls
          />

    </>
  )
}

export default VideoPreview