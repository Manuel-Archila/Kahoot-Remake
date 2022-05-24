import React from 'react'
import './Info.css'

const Info = () => (
    <div className="infocontainer">
      <div className="cuadritoscontainer">
        <div className="cuadrocover">
          <div className="infocuadro-school">
            <div className="titlecont">
              <div className="image-school" />
              <h1 className="titulin">Kahoot! at school</h1>
            </div>
            <div className="textcontainer">
              <div className="descripcion">Enganging group and distance learning for teachers and students.</div>
            </div>
            <p className="classic">Learn more</p>
          </div>
          <div className="infocuadro-work">
            <div className="titlecont">
              <div className="image-work" />
              <h1 className="titulin">Kahoot! at work</h1>
            </div>
            <div className="textcontainer">
              <div className="descripcion">Deliver training, presentations, meetings and events in-person or any video conferencing platform.</div>
            </div>
            <p className="classic">Learn more</p>
          </div>
          <div className="infocuadro-home">
            <div className="titlecont">
              <div className="image-home" />
              <h1 className="titulin">Kahoot! at home</h1>
            </div>
            <div className="textcontainer">
              <div className="descripcion">
                <div className="learnmore">Learning Apps </div>
                and games for family fun or home study.
              </div>
            </div>
            <p className="classic">Learn more</p>
          </div>
          <div className="infocuadro-academy">
            <div className="titlecont">
              <div className="image-academy" />
              <h1 className="titulin">Kahoot! Academy</h1>
            </div>
            <div className="textcontainer">
              <div className="descripcion">Explore content and join one of the world's largest educator communities.</div>
            </div>
            <p className="classic">Learn more</p>
          </div>
        </div>
      </div>
    </div>
)

export default Info
