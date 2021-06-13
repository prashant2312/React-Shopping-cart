
import React from 'react'
import Fade from 'react-reveal/Fade'


const About = () => {
   

    return (
        <>
            <div className="container emp-profile pro">
            <Fade top cascade>
                <form method="GET">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4fn7GvknBcNKNDGWvVf2_CnvBn2uH-OYGNA&usqp=CAU"
                                 alt="my pic" />

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">
                                <h3>Prashant Joshi</h3>
                                <h6>Web developer</h6>
                                <p className="profile-rating mt-3 mb-5">RANKING : <span>1/10</span></p>

              
                            </div>
                        </div>
                        {/* <div className="col-md-2">
                            <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit-profile" />
                        </div> */}

                    </div>

                    <div className="row">
                        {/* left side url */}
                        <div className="col-md-4">
                            <div className="profile-work">
                                <p>WORK LINK</p>
                                <a href="https://www.youtube.com/watch?v=pN0rmWh6nkE" traget="_blank">youtube</a><br></br>
                                <a href="https://www.instagram.com/" traget="_blank">Instgram</a><br></br>
                                <a href="https://www.facebook.com/" traget="_blank">Main channel</a><br></br>
                                <a href="https://www.github.com/" traget="_blank">website</a><br></br>
                                <a href="https://www.linkedin.com/" traget="_blank">Projects</a><br></br>
                                <a href="https://www.oceanofgames.com/" traget="_blank">Software</a><br></br>

                            </div>
                        </div>
                        {/* right side data toggle */}
                        <div className="col-md-8 pl-5 about-info">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div><h3><strong>About Me:</strong></h3></div><br></br>
                                    <p>This is website created by Prashant Joshi who is presently employeed in Tieto evry organization
                                    at a post of trainee Web developer. </p>
                                </div>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).



                                

                            </div>
                        </div>

                    </div>
                </form></Fade>
            </div>
        </>
    )
}

export default About
