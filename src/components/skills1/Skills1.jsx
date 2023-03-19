import React, { useState} from 'react'
import "./skills1.css"

const Skills1 = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
  return (
    <section className="qualification section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technology Stack</span>
        <div className="qualiication__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                    <i className="uil uil- qualification__icon"></i> {" "}
                    Frontend
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                    <i className="uil uil- qualification__icon"></i> {" "}
                    Backend
                </div>

                <div className={toggleState === 3 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(3)}>
                    <i className="uil uil- qualification__icon"></i> {" "}
                    Software
                </div>
            </div>

            <div className="qualification__sections">

                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>

                    <div className="qualification__data">
                        <div>
                            <i className="bx bx-badge-check"></i>
                            <h3 className="qualification__title">JavaScript</h3>
                            <span className="qualification__subtitle"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <i className="bx bx-badge-check"></i>
                            <h3 className="qualification__title">React</h3>
                            <span className="qualification__subtitle"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <i className="bx bx-badge-check"></i>
                            <h3 className="qualification__title">CSS</h3>
                            <span className="qualification__subtitle"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <i className="bx bx-badge-check"></i>
                            <h3 className="qualification__title">Bootstrap</h3>
                            <span className="qualification__subtitle"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <i className="bx bx-badge-check"></i>
                            <h3 className="qualification__title">Redux</h3>
                            <span className="qualification__subtitle"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <i className="bx bx-badge-check"></i>
                            <h3 className="qualification__title">Git</h3>
                            <span className="qualification__subtitle"></span>
                        </div>
                    </div>

                </div>
                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>

                    <div className="qualification__data">
                        <div>
                            <i className="bx bx-badge-check"></i>
                            <h3 className="qualification__title">Java</h3>
                            <span className="qualification__subtitle"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <i className="bx bx-badge-check"></i>
                            <h3 className="qualification__title">Springboot</h3>
                            <span className="qualification__subtitle"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <i className="bx bx-badge-check"></i>
                            <h3 className="qualification__title">NodeJS</h3>
                            <span className="qualification__subtitle"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <i className="bx bx-badge-check"></i>
                            <h3 className="qualification__title">Express</h3>
                            <span className="qualification__subtitle"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <i className="bx bx-badge-check"></i>
                            <h3 className="qualification__title">Mysql/MongoDB</h3>
                            <span className="qualification__subtitle"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <i className="bx bx-badge-check"></i>
                            <h3 className="qualification__title">Postman</h3>
                            <span className="qualification__subtitle"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <i className="bx bx-badge-check"></i>
                            <h3 className="qualification__title">jUnit</h3>
                            <span className="qualification__subtitle"></span>
                        </div>
                    </div>
                    

                </div>
                <div className={toggleState === 3 ? "qualification__content qualification__content-active" : "qualification__content"}>

                    <div className="qualification__data">
                        <div>
                            <i className="bx bx-badge-check"></i>
                            <h3 className="qualification__title">Python</h3>
                            <span className="qualification__subtitle"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <i className="bx bx-badge-check"></i>
                            <h3 className="qualification__title">Linux</h3>
                            <span className="qualification__subtitle"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <i className="bx bx-badge-check"></i>
                            <h3 className="qualification__title">Shell/Bash</h3>
                            <span className="qualification__subtitle"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <i className="bx bx-badge-check"></i>
                            <h3 className="qualification__title">PyTorch</h3>
                            <span className="qualification__subtitle"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <i className="bx bx-badge-check"></i>
                            <h3 className="qualification__title">Selenium</h3>
                            <span className="qualification__subtitle"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <i className="bx bx-badge-check"></i>
                            <h3 className="qualification__title">AWS</h3>
                            <span className="qualification__subtitle"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <i className="bx bx-badge-check"></i>
                            <h3 className="qualification__title">Docker</h3>
                            <span className="qualification__subtitle"></span>
                        </div>
                    </div>

                </div>
                

            </div>
        </div>
    </section>
  )
}

export default Skills1