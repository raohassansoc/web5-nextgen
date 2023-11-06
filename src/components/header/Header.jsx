import Logo from '../../assets/images/logo/logo.png'

import { addRemoveClass } from '@/function';

function Header() {

  const looglenav = () => {
    addRemoveClass('main-nav-mobi', 'active')
  }

  return (
    <header id="header_main" className="header" style={{ background: 'linear-gradient(to bottom, #4FC3F7, #1565C0)' }}>
      <div className="container big">
        <div className="row">
          <div className="col-12">
            <div className="header__body">
              <div className="header__logo">
                <a href="index-2.html">
                  {/* <img
                      id="site-logo"
                      src={Logo}
                      alt="Peson"
                      width={160}
                      height={38}
                      data-retina={Logo}
                      data-width={160}
                      data-height={38}
                    /> */}
                  <img width="200px" height="80px" src="./images/portfolio-logo.png" alt="logo" />
                </a>
              </div>
              <div className="header__right">
                <nav id="main-nav" className="main-nav">
                  <ul id="menu-primary-menu" className="menu">
                    <li className="menu-item menu-item-has-children ">
                      <a href="#">Home</a>
                      <ul className="sub-menu">
                        <li className="menu-item current-item\">
                          <a href="index-2.html">Home v1</a>
                        </li>
                        <li className="menu-item">
                          <a href="home-v2.html">Home v2</a>
                        </li>
                        <li className="menu-item">
                          <a href="home-v3.html">Home v3</a>
                        </li>
                        <li className="menu-item">
                          <a href="cardcarousel.html">Card Carousel</a>
                        </li>
                        <li className="menu-item">
                          <a href="zigzagcarousel.html">Zigzag Carousel</a>
                        </li>
                        <li className="menu-item">
                          <a href="coverflowcarousel.html">Coverflow Carousel</a>
                        </li>
                        <li className="menu-item">
                          <a href="itemcarousel.html">Item Carousel</a>
                        </li>
                        <li className="menu-item">
                          <a href="3dcarousel.html">3D Carousel</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-has-children">
                      <a href="#">Explore</a>
                      <ul className="sub-menu">
                        <li className="menu-item">
                          <a href="nft.html">NFTs</a>
                        </li>
                        <li className="menu-item">
                          <a href="blog.html">Blog List</a>
                        </li>
                        <li className="menu-item">
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                        <li className="menu-item">
                          <a href="vision-mission.html">Visions &amp; Mission</a>
                        </li>
                        <li className="menu-item">
                          <a href="help-center.html">Help Center</a>
                        </li>
                        <li className="menu-item">
                          <a href="parti-asset.html">Participants &amp; Assets</a>
                        </li>
                        <li className="menu-item">
                          <a href="advisor.html">Advisors &amp; Backers</a>
                        </li>
                        <li className="menu-item">
                          <a href="partner.html">Partners &amp; Investors</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item">
                      <a href="about.html">About</a>
                    </li>
                    <li className="menu-item">
                      <a href="roadmap.html">RoadMap</a>
                    </li>
                    <li className="menu-item">
                      <a href="team.html">Team</a>
                    </li>
                    <li className="menu-item">
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
                <div onClick={looglenav} className="mobile-button">
                  <span />
                </div>
              </div>
              <div className="header__action">
                <a href="#" className="search-btn">
                  <svg
                    width={21}
                    height={21}
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="9.7659"
                      cy="9.76639"
                      r="8.98856"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.0176 16.4849L19.5416 19.9997"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a href="contact.html" className="action-btn">
                  <span>Join Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav id="main-nav-mobi" className="main-nav" style={{}}>
        <ul id="menu-primary-menu" className="menu">
          <li onClick={() => { addRemoveClass('sbmnu1', 'active') }} className="menu-item menu-item-has-children menu-current-item">
            <a href="#">Home</a>
            <span className="arrow" />
            <ul id='sbmnu1' className="sub-menu" style={{ display: "none" }}>
              <li className="menu-item current-item">
                <a href="index.html">Home v1</a>
              </li>
              <li className="menu-item">
                <a href="home-v2.html">Home v2</a>
              </li>
              <li className="menu-item">
                <a href="home-v3.html">Home v3</a>
              </li>
              <li className="menu-item">
                <a href="cardcarousel.html">Card Carousel</a>
              </li>
              <li className="menu-item">
                <a href="zigzagcarousel.html">Zigzag Carousel</a>
              </li>
              <li className="menu-item">
                <a href="coverflowcarousel.html">Coverflow Carousel</a>
              </li>
              <li className="menu-item">
                <a href="itemcarousel.html">Item Carousel</a>
              </li>
              <li className="menu-item">
                <a href="3dcarousel.html">3D Carousel</a>
              </li>
            </ul>
          </li>
          <li onClick={() => { addRemoveClass('sbmnu2', 'active') }} className="menu-item menu-item-has-children">
            <a href="#">Explore</a>
            <span className="arrow" />
            <ul id='sbmnu2' className="sub-menu" style={{ display: "none" }}>
              <li className="menu-item">
                <a href="nft.html">NFTs</a>
              </li>
              <li className="menu-item">
                <a href="blog.html">Blog List</a>
              </li>
              <li className="menu-item">
                <a href="blog-details.html">Blog Details</a>
              </li>
              <li className="menu-item">
                <a href="vision-mission.html">Visions &amp; Mission</a>
              </li>
              <li className="menu-item">
                <a href="help-center.html">Help Center</a>
              </li>
              <li className="menu-item">
                <a href="parti-asset.html">Participants &amp; Assets</a>
              </li>
              <li className="menu-item">
                <a href="advisor.html">Advisors &amp; Backers</a>
              </li>
              <li className="menu-item">
                <a href="partner.html">Partners &amp; Investors</a>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <a href="about.html">About</a>
          </li>
          <li className="menu-item">
            <a href="roadmap.html">RoadMap</a>
          </li>
          <li className="menu-item">
            <a href="team.html">Team</a>
          </li>
          <li className="menu-item">
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </nav>

    </header>

  );
}
export default Header;