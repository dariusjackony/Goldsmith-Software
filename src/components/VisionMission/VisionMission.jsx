import VisionMissionImg from "../../assets/white.gif";
import "./VisionMission.css";
export default function VisionMission(){
    return(
        <section className="vm-main-container">
            <div className="vm-content-container">
              <div className="about-content1"></div>
                <div className="vm-img">
                    <img src={VisionMissionImg} className="vm-image"/>
                </div>
                <div className="vm-content">
                    <div className="vision-content">
                       <button className="num-btn">1</button>
                       <p className="vm-title">Our Vision</p>
                       <p className="vm-para">
                         To become Africa's most trusted software innovation company shaping
                         smarter businesses through intelligent technology.
                       </p>
                    </div>
                    <div className="vision-content2">
                       <button className="num-btn">2</button>
                       <p className="vm-title">Our Mission</p>
                       <p className="vm-para">
                         Deliver high-quality, scalable, and secure systems.
                       </p>
                       <p className="vm-para">
                         Empower organization with automation and data-driven tools.
                       </p>
                       <p className="vm-para">
                         Provide affordable digital solutions for African businesses.
                       </p>
                       <p className="vm-para">
                         Integrate AI, IoT, and cloud into modern digital infrastructure.
                       </p>
                    </div>
                   
                </div>
            </div>
        </section>
    )
}