// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
        <div className="nav">
            <div className="title">
                <img src="image/Logo.png" alt=""/>
                <h4>Takris Crochet</h4>
            </div>
            <div className="link">
                <a href="/">About</a>
                <a href="/">Store</a>
            </div>
        </div>

        <section className="second-section">
            <div className="intoduction">
                <div className="text">
                    <h2>Crocheted With Love</h2>
                    <p>Explore it and customize it to your interests.</p>
                    <div className="btn">Shop</div>
                </div>
            </div>
        </section>
        <section className="section-categories">
            <div className="categories-main">
                <div className="image-main">
                    <div className="first-image">
                        <div className="first-img-text">
                            Bouqet
                        </div>
                    </div>
                    <div className="second-image">
                        <div className="second-img-text">
                            Keychain
                        </div>
                    </div>
                    <div className="third-image">
                        <div className="third-img-text">
                            Mood Octupos
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section-posts">
            <div className="posts-main">
                <h1>Latest posts</h1>
                <div className="posts">
                    <div className="post-first">
                        <img src="image/Screenshot from 2024-01-30 15-09-06.png" alt=""/>
                        <h3>The Art of Connection</h3>
                        <p>In the ever-evolving world, the art of forging genuine connections remains timeless. Whether it’s
                            with colleagues, clients, or partners, establishing a genuine rapport paves the way for
                            collaborative success. <span>Read more</span>
                        </p>
                    </div>
                    <div className="post-second">
                        <img src="image/Screenshot from 2024-01-30 15-09-30.png" alt=""/>
                        <h3>Beyond the Obstacle</h3>
                        <p>Challenges in business are a given, but it’s our response to them that defines our trajectory.
                            Looking beyond the immediate obstacle, there lies a realm of opportunity and learning.
                            <span>Read more</span>
                        </p>
                    </div>
                    <div className="post-third">
                        <img src="image/Screenshot from 2024-01-30 15-09-45.png" alt=""/>
                        <h3>Growth Unlocked</h3>
                        <p>Every business has a unique potential waiting to be tapped. Recognizing the keys to unlock this
                            growth can set an enterprise on the path to unprecedented success. <span>Read more</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="section-photo">
            <div className="main-photos">
                <img src="image/951233AA-F75C-4972-93C9-57A186069A87.JPG" alt="" height="600px" width="800px"/>
                <div className="four-photo">
                    <img src="image/IMG_6825.jpg" alt="" height="285px" width="285px"/>
                    <img src="image/IMG_7329.jpg" alt="" height="285px" width="285px"/>
                    <img src="image/IMG_6697.jpg" alt="" height="285px" width="285px"/>
                    <img src="image/IMG_7150.jpg" alt="" height="285px" width="285px"/>
                </div>
            </div>
        </section>
        <footer>
            <div className="main-footer">
                <div className="footer-title">
                    Takris Chrochet
                </div>
                <div className="love">
                    Made With Love
                </div>
                <div className="icon">
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-tiktok"></i>
                </div>
                <div className="name">
                    Krita Byanjankar
                </div>
            </div>
        </footer>
    </>
  );
}

export default App;
