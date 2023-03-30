import * as React from "react"
import { navigate } from "gatsby"

export default function Nav() {
  return (
    <nav>
      <h3
        key={`about`}
        onClick={event => { navigate(`/about/`) }}
      >
        About
      </h3>
      <h3
        key={`Github`}
        onClick={event => { navigate(`/Github/`) }}
      >
        Github
      </h3>
      <h3
        key={`Contact`}
        onClick={event => { navigate(`/Contact/`) }}
      >
        Contact
      </h3>
    </nav>
  )
}
