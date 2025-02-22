import React from 'react'
import '../CSS/AboutMe.css'
import man_logo from '../Images/man.png'
export default function Aboutme() {
  return (
    <>
        <div className='parent_div'>
            {/* <div className='image'> */}
            <img className='image' src={man_logo} alt="" />
            
            <div className='about_me_section'>
                <div className="name mt-5">Chinmay Porwal</div>
                <div className="role">Web developer & Figma designer</div>
                <div className="description">I'm a passionate web developer with 1 years of experience in creating beautiful, functional, and user-centered digital experiences. With a strong foundation in front-end technologies and a keen eye for design, I strive to craft elegant solutions that bring ideas to life.</div>
                <div className="container text-center my-5">
                    <div className="mb-4 container text-center" style={{fontWeight:'bold', fontSize:'30px'}}>My Tech Stack</div>
        
                    <div className="row g-3 skills_styler">
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="techstack p-2 rounded bg-light">HTML</div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="techstack p-2 rounded bg-light">CSS</div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="techstack p-2 rounded bg-light">JavaScript</div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="techstack p-2 rounded bg-light">React.js</div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="techstack p-2 rounded bg-light">Figma</div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="techstack p-2 rounded bg-light">Python</div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="techstack p-2 rounded bg-light">Java</div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="techstack p-2 rounded bg-light">Tailwind</div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="techstack p-2 rounded bg-light">Bootstrap</div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="techstack p-2 rounded bg-light">Node.js</div>
                        </div>
                    </div>

                </div>
                <div className="download_resume_button conatiner text-center">
                    <button type="button" class="resume_download btn btn-warning">Download Resume</button>
                </div>
            </div>
        </div>
    </>
  )
}
