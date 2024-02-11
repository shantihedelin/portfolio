import React from "react";
import Image from "next/image";
import headshotImg from '../images/headshot.jpg'

export default function HeroSection() {
  return (
    <div className="w-screen flex-col pb-12">
      <div className="flex justify-center pt-6">
        <Image src={headshotImg} alt="headshot of Shanti Hedelin" height="300" className="rounded-lg" />
      </div>
      <h3 className="flex justify-center">
        Hello! My name is Shanti Hedelin
      </h3>
      <div className="flex justify-center flex-col items-center"> {/* Uppdaterad rad här */}
        <h1>Front-end developer</h1>
        <p>
          Here is my description about me and a bit of my relation with
          developing websites.
        </p>
        <button className="w-28">View Resume</button>
      </div>
      <h2 className="flex justify-center pt-8">I work with</h2>
      <div className="flex justify-center flex-row space-x-6">
        <div>React</div>
        <div>Next.js</div>
        <div>Vite</div>
        <div>HTML</div>
        <div>CSS</div>
      </div>
    </div>
  );
}

