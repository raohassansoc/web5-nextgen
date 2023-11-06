import Image from "next/image";
import img from '../../assets/images/layouts/create.png'

function Create(){
    return(
        <>
        <section className="create" style={{marginTop: "20px"}}>
            <div className="container">
                <div className="row">
                <div className="col-12">
                    <div className="create__main">
                    <div className="content">
                        <h4 className="heading">Create your NFT portfolio</h4>
                        <p>Get udpated with news, tips &amp; tricks</p>
                        <a href="contact.html" className="action-btn">
                        <span>Join Now</span>
                        </a>
                    </div>
                    <Image src={img} alt="" />
                    </div>
                </div>
                </div>
            </div>
            </section>
        </>
    )
}
export default Create;