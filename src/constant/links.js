import React from "react"
import { GoMarkGithub } from "react-icons/go"
import { IoLogoYoutube } from "react-icons/io"
import { SiBandcamp, SiInstagram } from "react-icons/si"
import { GrSoundcloud } from "react-icons/gr"
import { CgShapeHexagon } from "react-icons/cg"

const links = [
  {
    id: 0,
    icon: <GoMarkGithub />,
    url: (
      <a
        href="https://github.com/PaoloCatalano"
        target="_blank"
        rel="noopener noreferrer"
      >
        github
      </a>
    ),
  },
  {
    id: 1,
    icon: <IoLogoYoutube />,
    url: (
      <a
        href="https://www.youtube.com/user/page14x4frames/videos"
        target="_blank"
        rel="noopener noreferrer"
      >
        youtube
      </a>
    ),
  },
  {
    id: 2,
    icon: <SiBandcamp />,
    url: (
      <a
        href="https://page14.bandcamp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        bandcamp
      </a>
    ),
  },
  {
    id: 3,
    icon: <GrSoundcloud />,
    url: (
      <a
        href="https://soundcloud.com/tt-fourteen"
        target="_blank"
        rel="noopener noreferrer"
      >
        soundcloud
      </a>
    ),
  },
  {
    id: 4,
    icon: <CgShapeHexagon />,
    url: (
      <a
        href="https://www.jamendo.com/artist/368230/page-14"
        target="_blank"
        rel="noopener noreferrer"
      >
        jamendo
      </a>
    ),
  },
  {
    id: 5,
    icon: <SiInstagram />,
    url: (
      <a
        href="https://www.instagram.com/paolo12587/"
        target="_blank"
        rel="noopener noreferrer"
      >
        instagram
      </a>
    ),
  },
]

export default links
