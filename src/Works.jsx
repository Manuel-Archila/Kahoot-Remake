import React, { useEffect } from 'react'
import './Works.css'

const Works = () => {
  useEffect(() => {
    const vid1 = document.getElementById('videin1')
    vid1.loop = true
    vid1.playsinline = true
    vid1.addEventListener('mouseover', (e) => {
      vid1.play()
    })
    vid1.addEventListener('mouseout', (e) => {
      vid1.pause()
    })
    const vid2 = document.getElementById('videin2')
    vid2.loop = true
    vid2.playsinline = true
    vid2.addEventListener('mouseover', (e) => {
      vid2.play()
    })
    vid2.addEventListener('mouseout', (e) => {
      vid2.pause()
    })
    const vid3 = document.getElementById('videin3')
    vid3.loop = true
    vid3.playsinline = true
    vid3.addEventListener('mouseover', (e) => {
      vid3.play()
    })
    vid3.addEventListener('mouseout', (e) => {
      vid3.pause()
    })
  })
  return (
    <div className="workscontainer">
      <div className="space">
        <div className="titler">
          <div className="titular">How does Kahoot! work?</div>
          <div className="videocontainer">
            <div className="videobox-orientator-create">
              <div className="videobox">
                <video className="videin" id="videin1">
                  <source src="https://kahoot.com/files/2019/07/kc_1.webm" />
                </video>
                <div className="imagenvid-create">
                </div>
                <div className="textovid">
                  <div className="titulito">Create</div>
                  <div className="descript">It only takes minutes to create a learning game or trivia quiz on any topic, in any language.</div>
                </div>
              </div>
            </div>
            <div className="videobox-orientator-host">
              <div className="videobox">
                <video className="videin" id="videin2">
                  <source src="https://kahoot.com/files/2019/07/kc2_2b.webm" />
                </video>
                <div className="imagenvid-host">
                </div>
                <div className="textovid">
                  <div className="titulito">Host or share</div>
                  <div className="descript">Host a live game with questions on a big screen or share a game with remote players.</div>
                </div>
              </div>
            </div>
            <div className="videobox-orientator-play">
              <div className="videobox">
                <video className="videin" id="videin3">
                  <source src="https://kahoot.com/files/2019/07/kc_3.webm" />
                </video>
                <div className="imagenvid-play">
                </div>
                <div className="textovid">
                  <div className="titulito">Play</div>
                  <div className="descript">Game on! Join a kahoot with a PIN provided by the host and answer questions on your device.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works
