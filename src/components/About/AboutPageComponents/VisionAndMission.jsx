import MissionIcon from "../../../assets/mission.svg";
import "./VisionAndMission.css";
export default function VisionAndMission(){
    return(
        <section className="VaM-main-container">
          <div className="VaM-content-ct">
              <span className="VaM-head">Vision & Mission</span>
              <div className="VaM-content">
                <div className="VaM-card">
                    <img src={MissionIcon} alt="" />
                    <span className="VaM-title">Vision</span>
                   <p className="VaM-paragraph">
                      To become Africa’s most trusted software
                      innovation company delivering world-class
                      digital solutions that
                      transform businesses and communities.
                   </p>
                </div>
                <div className="VaM-card">
                    <img src={MissionIcon} alt="" />
                    <span className="VaM-title">Mission</span>
                   <p className="VaM-paragraph">
                      To become Africa’s most trusted software
                      innovation company delivering world-class
                      digital solutions that
                      transform businesses and communities.
                   </p>
                </div>
              </div>
          </div>
        </section>
    )
}