"use client";
import React from "react";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import gsap from "gsap";
import Seo from "@/app/components/seo";

const playFairDisplay = Playfair_Display({
  weight: "500",
  subsets: ["latin"],
});

const About = () => {
  React.useEffect(() => {
    gsap.fromTo(
      ".content-section",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="my-4 content-section">
      <Seo
        title="About Me"
        description="About Jason Osikoya - CS, Software Engineer"
      />
      <br />
      <h1
        className={cn(
          playFairDisplay.className,
          "lg:text-[50px] text-3xl text-center"
        )}
      >
        Jason Osikoya
      </h1>
      <br />

      <div className="mx-auto flex items-center justify-center">
        <span className="text-gray-600 mx-1">CS Major </span> @{" "}
        <Link
          href={"http://babcock.edu.ng/ "}
          className="underline flex items-end text-center mx-1"
        >
          {" "}
          Babcock University <ArrowUpRight className="h-5 w-5" />
        </Link>
      </div>

      <div className="flex items-center justify-center my-4">
        <div className="lg:flex items-start justify-center lg:gap-6 lg:w-[900px] my-5">
          <img
            src={"/jason.jpg"}
            alt="Jason Osikoya"
            width={400}
            height={600}
            className="rounded-lg mx-auto lg:my-0 my-4"
          />

          <div className="lg:my-0 my-3">
            <p>
              I am a Software Engineer with over 1.5 years of experience n full-stack development, financial technology, and AI-driven systems.
              Currently pursuing roles where I can deepen my backend and distributed systems expertise, especially in the financial technology space.
            </p>

            <Separator className="my-5" />

            <p>
              Presently, I mainly work on Backend Systems
              (API/Mirco-Services/DB), with a growing interest for Distributed systems.
            </p>

            <br />

            <p>
              I also build fullstack applications (Web Apps, PWAs). I build
              fast, seamless and scalable user interfaces along with scaleable
              backend systems.
            </p>

            <br />

            <p>
              I am passionate about open source which is why I make most of my side
              projects publicly available. My goal is to help others learn from
              and use the tools I create. You can find all my projects on
              GitHub.{" "}
              <Link
                href="https://github.com/jasonnawa"
                className="underline text-blue-500"
              >
                Github - @jason-osikoya
              </Link>{" "}
            </p>

            <Separator className="my-5" />

            <p>
              In my free time, I enjoy playing Call Of Duty and Racing Games.{" "}
            </p>

            <Link href={"/projects"}>
              <button className="rounded-[30px] my-4 border hover:bg-black transition-all duration-400 ease-in hover:text-white border-black p-2 w-32 flex items-center justify-center">
                Projects <ArrowUpRight strokeWidth={1.5} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
