import React from "react"

const Video = ({ src, title, ...props }) => {
  return (
    <div className="iframeVideoWrapper">
      <div className="video">
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        />
      </div>
    </div>
  )
}

Video.defaultProps = {
  src: "https://www.youtube.com/embed/FmYRa66PyTo",
  title: "vicine - Thorsten Thordendal Page 14",
}

export default Video
