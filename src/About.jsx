import React, { useEffect, useRef, useState } from 'react'
import './About.scss'

const About = () => {
  const [finished, setFinished] = useState(false)
  const containerRef = useRef(null)
  const cont = useRef(0)
  const [Visible, setVisible] = useState(false)

  const callbackFunction = (entries, observer) => {
    if (cont.current >= 1) {
      observer.unobserve(containerRef.current)
    }
    const [entry] = entries
    setVisible(entry.isIntersecting)
    cont.current += 1
  }

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)
    if (containerRef.current) observer.observe(containerRef.current)
  }, [containerRef, options])

  return (
    <div className="aboutcontainer">
      <div className="creatorcontainer">
        <div className="morethan">
          <div className="textin">More than</div>
          <div className={Visible ? 'mill' : ''} id="millon" onAnimationEnd={() => setFinished(true)} ref={containerRef}>{finished && '1,000,000,00'}</div>
          <div className="textin">players a year</div>
        </div>
        <div className="buttones">
          <div className="triang">
            <div className="triang-image" />
            <div className="texter">More than 50% of US teachers use Kahoot!</div>
          </div>
          <div className="romb">
            <div className="romb-image" />
            <div className="texter">Players in more than 200 countries</div>
          </div>
          <div className="circle">
            <div className="circle-image" />
            <div className="texter">Over 50 million public games available</div>
          </div>
          <div className="square">
            <div className="square-image" />
            <div className="texter">97% of the Fortune 500 use Kahoot!</div>
          </div>
        </div>
        <div className="creators-field">
          <div className="creator">
            <div className="head1" />
            <div className="quote1">
              <div className="frase">“Kahoot! has become one of our "flagship training tools". I believe Kahoot! is irreplaceable, as it involves learners throughout sessions and also helps employees retain important information more effectively."
              </div>
              <div className="auth">Arnaud Jay, SNCF</div>
            </div>
            <div className="romber" />
          </div>
          <div className="creator">
            <div className="head2" />
            <div className="quote2">
              <div className="frase">“Kahoot! is a fantastic way to engage every single student - even remotely."</div>
              <div className="auth">Gustavo Lovato, AP Spanish and literature teacher</div>
            </div>
            <div className="romber" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
