"use client"
import React, { useState, useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { addRemoveClass } from '@/function';



export const cryptocurrencyFAQ = [
    {
        question: "What is cryptocurrency?",
        answer: "Cryptocurrency is a type of digital or virtual currency that uses cryptography for security and operates independently of a central authority or government."
    },
    {
        question: "How do cryptocurrencies work?",
        answer: "Cryptocurrencies leverage blockchain technology to gain decentralization, transparency, and immutability. Transactions are verified by network nodes through cryptography and recorded on a public ledger called a blockchain."
    },
    {
        question: "Are cryptocurrencies legal?",
        answer: "The legality of cryptocurrency depends on each individual country. Some have embraced it, while others have imposed restrictions or outright bans."
    },
    {
        question: "What are the most popular cryptocurrencies?",
        answer: "Popular cryptocurrencies include Bitcoin, Ethereum, Ripple, Litecoin, and Cardano, among others."
    },
    {
        question: "How do I store my cryptocurrency?",
        answer: "Cryptocurrencies can be stored in digital wallets, which can be hardware-based or software-based."
    },
    {
        question: "Are cryptocurrencies a good investment?",
        answer: "The value of cryptocurrencies can be volatile. Potential investors should do their research and possibly consult with financial advisors before making decisions."
    },
    {
        question: "How are new cryptocurrencies created?",
        answer: "New cryptocurrencies can be created through a process called 'mining', or they can be forked from existing projects or developed from scratch."
    },
    {
        question: "Can I use cryptocurrency for daily transactions?",
        answer: "Yes, some businesses accept cryptocurrency as a form of payment, but its acceptance is not universal."
    },
    {
        question: "What are the risks associated with cryptocurrencies?",
        answer: "Risks include market volatility, potential loss of investment, hacking, fraud, and regulatory changes."
    },
    {
        question: "How do I convert cryptocurrency to fiat currency?",
        answer: "You can convert cryptocurrencies to fiat currencies through crypto exchanges or specialized financial service providers."
    },
    {
        question: "Are all cryptocurrencies decentralized?",
        answer: "While many cryptocurrencies are decentralized, some are centralized or have centralized features."
    },
    {
        question: "Do cryptocurrencies have transaction fees?",
        answer: "Most cryptocurrencies have transaction fees, but the fee structures and amounts can vary widely between different currencies."
    }
];
export const nftTokenFAQ = [
    {
        question: "What is an NFT?",
        answer: "NFT stands for Non-Fungible Token. It represents a unique digital item on the blockchain, such as art, music, videos, collectibles, and more."
    },
    {
        question: "How do I purchase an NFT?",
        answer: "NFTs can be purchased on various online platforms and marketplaces using cryptocurrency, usually Ethereum."
    },
    {
        question: "Why are NFTs valuable?",
        answer: "The value of NFTs comes from their uniqueness and proof of authenticity. They can't be replaced or exchanged on a 1:1 basis with anything else."
    },
    {
        question: "How do I sell my NFT?",
        answer: "You can list and sell your NFT on various NFT marketplaces. Once a buyer purchases it, the ownership is transferred on the blockchain."
    },
    {
        question: "Can I reproduce an NFT?",
        answer: "While the digital file associated with an NFT can be copied, the NFT itself, which proves authenticity and ownership, cannot."
    },
    {
        question: "How are NFTs different from cryptocurrencies?",
        answer: "Cryptocurrencies like Bitcoin or Ethereum are fungible and can be exchanged on a 1:1 basis. NFTs are unique and cannot be exchanged on a like-for-like basis."
    },
    {
        question: "Can anyone create an NFT?",
        answer: "Yes, artists and creators can mint their digital works as NFTs on various platforms and offer them for sale."
    },
    {
        question: "Are there any legal issues surrounding NFTs?",
        answer: "NFTs are still a relatively new concept, and legal standards and regulations are evolving. Issues can arise around copyright, ownership, and more."
    },
    {
        question: "How do I store my NFT?",
        answer: "NFTs are stored in digital wallets, similar to cryptocurrencies, but with added functionalities to view the associated digital art or media."
    },
    {
        question: "What are the environmental concerns regarding NFTs?",
        answer: "Concerns have been raised about the carbon footprint of blockchain networks, particularly Ethereum, which powers many NFT transactions. Efforts are being made to transition to more eco-friendly consensus mechanisms."
    },
    {
        question: "Do all NFTs appreciate in value?",
        answer: "Not necessarily. The value of NFTs can be highly speculative. Some may appreciate, while others may not."
    },
    {
        question: "Can I display my NFT in a physical space?",
        answer: "Yes, there are various technologies and platforms that allow you to showcase your NFTs in physical locations using digital displays."
    }
];
export const collectionFAQ = [
    {
        question: "Can anyone create an NFT?",
        answer: "Yes, artists and creators can mint their digital works as NFTs on various platforms and offer them for sale."
    },
    {
        question: "Are there any legal issues surrounding NFTs?",
        answer: "NFTs are still a relatively new concept, and legal standards and regulations are evolving. Issues can arise around copyright, ownership, and more."
    },
    {
        question: "How do I store my NFT?",
        answer: "NFTs are stored in digital wallets, similar to cryptocurrencies, but with added functionalities to view the associated digital art or media."
    },
    {
        question: "What are the environmental concerns regarding NFTs?",
        answer: "Concerns have been raised about the carbon footprint of blockchain networks, particularly Ethereum, which powers many NFT transactions. Efforts are being made to transition to more eco-friendly consensus mechanisms."
    },
    {
        question: "Do all NFTs appreciate in value?",
        answer: "Not necessarily. The value of NFTs can be highly speculative. Some may appreciate, while others may not."
    },
    {
        question: "Can I use cryptocurrency for daily transactions?",
        answer: "Yes, some businesses accept cryptocurrency as a form of payment, but its acceptance is not universal."
    },
    {
        question: "What are the risks associated with cryptocurrencies?",
        answer: "Risks include market volatility, potential loss of investment, hacking, fraud, and regulatory changes."
    },
    {
        question: "How do I convert cryptocurrency to fiat currency?",
        answer: "You can convert cryptocurrencies to fiat currencies through crypto exchanges or specialized financial service providers."
    },
    {
        question: "Are all cryptocurrencies decentralized?",
        answer: "While many cryptocurrencies are decentralized, some are centralized or have centralized features."
    },
    {
        question: "Do cryptocurrencies have transaction fees?",
        answer: "Most cryptocurrencies have transaction fees, but the fee structures and amounts can vary widely between different currencies."
    }
];
export const cryptoTradingFAQ = [
    {
        question: "What is cryptocurrency?",
        answer: "Cryptocurrency is a type of digital or virtual currency that uses cryptography for security and operates independently of a central authority or government."
    },
    {
        question: "How do cryptocurrencies work?",
        answer: "Cryptocurrencies leverage blockchain technology to gain decentralization, transparency, and immutability. Transactions are verified by network nodes through cryptography and recorded on a public ledger called a blockchain."
    },
    {
        question: "Are cryptocurrencies legal?",
        answer: "The legality of cryptocurrency depends on each individual country. Some have embraced it, while others have imposed restrictions or outright bans."
    },
    {
        question: "What are the most popular cryptocurrencies?",
        answer: "Popular cryptocurrencies include Bitcoin, Ethereum, Ripple, Litecoin, and Cardano, among others."
    },
    {
        question: "How do I store my cryptocurrency?",
        answer: "Cryptocurrencies can be stored in digital wallets, which can be hardware-based or software-based."
    },
    {
        question: "Are cryptocurrencies a good investment?",
        answer: "The value of cryptocurrencies can be volatile. Potential investors should do their research and possibly consult with financial advisors before making decisions."
    },
    {
        question: "How are new cryptocurrencies created?",
        answer: "New cryptocurrencies can be created through a process called 'mining', or they can be forked from existing projects or developed from scratch."
    },
    {
        question: "What are the environmental concerns regarding NFTs?",
        answer: "Concerns have been raised about the carbon footprint of blockchain networks, particularly Ethereum, which powers many NFT transactions. Efforts are being made to transition to more eco-friendly consensus mechanisms."
    },
    {
        question: "Do all NFTs appreciate in value?",
        answer: "Not necessarily. The value of NFTs can be highly speculative. Some may appreciate, while others may not."
    },
    {
        question: "Can I use cryptocurrency for daily transactions?",
        answer: "Yes, some businesses accept cryptocurrency as a form of payment, but its acceptance is not universal."
    },
    {
        question: "What are the risks associated with cryptocurrencies?",
        answer: "Risks include market volatility, potential loss of investment, hacking, fraud, and regulatory changes."
    },
    {
        question: "How do I convert cryptocurrency to fiat currency?",
        answer: "You can convert cryptocurrencies to fiat currencies through crypto exchanges or specialized financial service providers."
    },
];
function Faq() {
    
    
    const [faq, setFaq] = useState(cryptocurrencyFAQ);
    const [firstHalf, setFirstHalf] = useState();
    const [secondHalf, setSecondHalf] = useState();
    useEffect(() => {
        const halfLength = Math.ceil(faq.length / 2);
        setFirstHalf(faq.slice(0, halfLength));
        setSecondHalf(faq.slice(halfLength));
        console.log(faq)
    }, [faq]);

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);
    return (
        <>
            <section className="faq" style={{ backgroundColor: "#0e8388",backdropFilter: 'blur(10px)'}}>
                <div className="shape right" />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div
                                className="block-text center"
                                data-aos="fade-down"
                                data-aos-duration={3000}
                            >
                                <h6 className="sub-heading">
                                    <span>FAQs</span>
                                </h6>
                                <h3 className="heading">
                                    Frequently
                                    <br />
                                    Aksed Questions
                                </h3>
                                <p className="mb-17">
                                    Below is a list of frequently asked questions and answers from
                                    partners and 3D artist
                                </p>
                                <p>Please check this FAQ first before contacting us.</p>
                            </div>
                            <div className="faq__main flat-tabs">
                                <ul className="menu-tab">
                                {/* onClick={()=>{setFaq(cryptocurrencyFAQ),addRemoveClass('Cryptocurrency' , 'active')}}  */}
                                    <li id='Cryptocurrency' onClick={()=>{setFaq(cryptocurrencyFAQ)}}>
                                        <h6 className="fs-14">Cryptocurrency</h6>
                                    </li>
                                    <li id='NFT' onClick={()=>{setFaq(nftTokenFAQ)}}>
                                        <h6 className="fs-14">NFT Token</h6>
                                    </li>
                                    <li id='Collection' onClick={()=>{setFaq(collectionFAQ)}}>
                                        <h6 className="fs-14">Collection</h6>
                                    </li>
                                    <li id='Trading' onClick={()=>{setFaq(cryptoTradingFAQ)}}>
                                        <h6 className="fs-14">Crypto Trading</h6>
                                    </li>
                                </ul>
                                <div className="content-tab">
                                    <div className="content-inner">
                                        <div className="flat-accordion row">
                                            <div className="col-md-6 col-sm-12">
                                                {firstHalf?.map((item, index) => (
                                                    <div key={index} className="flat-toggle">
                                                        <h6 onClick={()=>{addRemoveClass(index+'first' , 'active')}} className="toggle-title">
                                                            <span>0{index+1}.</span> {item.question}{" "}
                                                            <span className="icon-plus" />
                                                        </h6>
                                                        <div id={index+'first'} className="toggle-content">
                                                            <p>
                                                                {item.answer}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                              

                                            </div>
                                            <div className="col-md-6 col-sm-12">

                                                {secondHalf?.map((item, index) => (
                                                    <div key={index} className="flat-toggle">
                                                        <h6  onClick={()=>{addRemoveClass(index+'second' , 'active')}} className="toggle-title">
                                                            <span>0{index+1}.</span> {item.question}{" "}
                                                            <span className="icon-plus" />
                                                        </h6>
                                                        <div id={index+'second'} className="toggle-content">
                                                            <p>
                                                                {item.answer}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Faq;