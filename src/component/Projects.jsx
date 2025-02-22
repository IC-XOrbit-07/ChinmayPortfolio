import React from 'react'
import '../CSS/Card.css'
import project1_image from '../Images/project1.png'

export default function Projects() {
  return (
    <>
    <div className="container">
        <div className="row">
            {/* Card 1 */}
            <div className="col-md-4 my-3">
                <div className="card">
                    <img src={project1_image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Porwal Travels Website</h5>
                        <p className="card-text align-center">I built a responsive travel website using React with conditional rendering, the useState hook, and React Router for smooth navigation. Styled with Tailwind CSS, it offers a clean, user-friendly interface across all devices. The project follows an organized file structure with industry-level code and integrates Firestore Firebase for efficient form submissions. While working on it, I also explored React Redux to improve my understanding of state management in larger applications.</p>
                        <a href="https://porwal-travels-website.vercel.app/" target="_blank" rel="noopener" className="btn btn-primary">Visit Live Website</a>
                    </div>
                </div>
            </div>
            {/* Card 2 */}
            <div className="col-md-4 my-3">
                <div className="card">
                    <img src={'https://picsum.photos/200'} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Project 2</h5>
                        <p className="card-text fw-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quidem dolor, dolores provident error ullam consectetur eius. Repudiandae, saepe non fugiat debitis delectus deleniti in quia id vel, distinctio neque!</p>
                        <a href="" target="_blank" rel="noopener" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
            {/* Card 2 */}
            <div className="col-md-4 my-3">
                <div className="card">
                    <img src={'https://picsum.photos/200'} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Project 3</h5>
                        <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quidem dolor, dolores provident error ullam consectetur eius. Repudiandae, saepe non fugiat debitis delectus deleniti in quia id vel, distinctio neque!</p>
                        <a href="" target="_blank" rel="noopener" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
            {/* Card 2 */}
            <div className="col-md-4 my-3">
                <div className="card">
                    <img src={'https://picsum.photos/20'} cla0ssName="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title"> Project 4</h5>
                        <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quidem dolor, dolores provident error ullam consectetur eius. Repudiandae, saepe non fugiat debitis delectus deleniti in quia id vel, distinctio neque!</p>
                        <a href="" target="_blank" rel="noopener" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}
