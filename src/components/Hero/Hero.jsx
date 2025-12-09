import "./Hero.css";
export default function Hero() {
    return(
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title">
                    Goldsmith Softwares Ltd
                </h1>
                <p className="hero-subtitle">
                    Crafting digital solutions and precisions
                </p>
                <button
                 className="hero-btn"
                >
                    Get Started
                </button>
            </div>
        </section>
    )
}