import banner from './../../assets/images/layouts/banner.png'
import icon1 from '../../assets/images/icon/icon-01.png'
import avt2 from '../../assets/images/layouts/avt-01.png'
import Image from 'next/image';

function Hero() {
    return (<>
        <section className="banner">
            <div className="shape right" />
            <div className="container big" style={{ backgroundColor: "#0e8388" }}>
                <div className="row container-fluid">
                    <div className="col-xl-6 col-md-12">
                        <div className="banner__left">
                            <div className="block-text">
                                <h2 className="heading">
                                    Collect Next Generation{" "}
                                    Today
                                    <span className="s1 arlo_tm_animation_text_word" >Web5 Doamin</span> <br />
                                </h2>
                                <p className="desc">
                                    Cyfonii is the premier marketplace for nifties, which are digital
                                    items you can truly own for yourself
                                </p>
                                <a 
                                // href="contact.html"
                                 className="action-btn">
                                    <span>Get Connected</span>
                                </a>
                            </div>
                            <div className="pay">
                                <h6>We are Monteno NFT</h6>
                                <div className="list">
                                    <p>We accept:</p>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <span className="icon-logo-01" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="icon-logo-02" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="icon-logo-03" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="icon-logo-04" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="icon-logo-05">
                                                    <span className="path1" />
                                                    <span className="path2" />
                                                    <span className="path3" />
                                                    <span className="path4" />
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="icon-logo-06" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="banner__right">
                            <div className="image">
                                <Image src={banner} alt="" />
                            </div>
                            <div className="price">
                                <div className="icon">
                                    <Image src={icon1} alt="" />
                                </div>
                                <div className="content">
                                    <p>Current Bid</p>
                                    <h5>2.26 ETH</h5>
                                </div>
                            </div>
                            <div className="owner">
                                <div className="image">
                                    <Image src={avt2} alt="" />
                                </div>
                                <div className="content">
                                    <h5>Leslie Alexander</h5>
                                    <p>@leslie754</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>);
}
export default Hero;