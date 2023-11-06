import Image from "next/image";

//img
import img1 from '../../assets/images/layouts/about-01.png'
import img2 from '../../assets/images/layouts/about-02.png'
import img3 from '../../assets/images/layouts/about-03.png'
import img4 from '../../assets/images/layouts/about-04.png'
import img5 from '../../assets/images/layouts/about-05.png'

function About(){
return(
<>
<section className="about">
  <div className="shape" />
  <div className="container">
    <div className="row rev">
      <div className="col-xl-6 col-md-12">
        <div className="about__right">
          <div className="images">
            <Image
              className="img1"
              src={img1}
              alt=""
            />
            <Image
              className="img2"
              src={img2}
              alt=""
            />
            <Image
              className="img3"
              src={img3}
              alt=""
            />
            <Image
              className="img4"
              src={img4}
              alt=""
            />
            <Image
              className="img5"
              src={img5}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-md-12">
        <div className="block-text">
          <h6 className="sub-heading">
            <span>About us</span>
          </h6>
          <h3 className="heading wow" data-splitting="">
            Hight Quality NFT Collections
          </h3>
          <p className="mb-17">
            Cyfonii is the premier marketplace for nifties, which are digital
            items you can truly own for yourself
          </p>
          <p className="mb-26">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat
            cupidatat non proident, sunt in culpa qui officia dese runt mollit
            anim id est laborum velit esse cillum dolore eu fugiat nulla pariatu
            epteur sint occaecat
          </p>
          <a href="about.html" className="action-btn">
            <span>More About Us</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

</>
);
}
export default About;