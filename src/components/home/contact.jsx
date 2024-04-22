import { SvgLocation, SvgMail, SvgPhone } from "@/access/svg";
// import { POST } from "@/app/api/send/route";
import { AnimatedOnScroll } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const w_h_icon = 30;

const contact = [
  {
    icon: <SvgPhone width={w_h_icon} height={w_h_icon} />,
    content: "+84 123 456 789",
    href: "tel:+84123456789",
  },
  {
    icon: <SvgMail width={w_h_icon} height={w_h_icon} />,
    content: "nguyenhoang41911@gmail.com",
    href: "mailto:nguyenhoang41911@gmail.com",
  },
  {
    icon: <SvgLocation width={w_h_icon} height={w_h_icon} />,
    content: "Go Vap, TP. Ho Chi Minh, Viet Nam",
    href: "https://goo.gl/maps/7LzNHJuzeinNxzH36",
  },
];

const inputItems = [
  {
    type: "text",
    placeholder: "Name",
    name: "name",
    inputType: "input",
  },
  {
    type: "email",
    placeholder: "Email",
    name: "email",
    inputType: "input",
  },
  {
    type: "textarea",
    placeholder: "Message",
    name: "message",
    inputType: "textarea",
  },
];

function FormSubmit(handleSubmit) {
  return (
    <form
      className="mt-4 flex flex-col gap-4 p-4"
      action=""
      onSubmit={handleSubmit}
    >
      {inputItems.map((item, index) => (
        <AnimatedOnScroll
          animation={"animate__fadeInRight"}
          className="text-white"
          threshold={0.3}
          key={index}
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <item.inputType
            type={item.type}
            placeholder={item.placeholder}
            name={item.name}
            className="p-4 bg-[var(--primary-color-10)] w-full text-white border-none rounded-lg"
            required
          />
        </AnimatedOnScroll>
      ))}

      <button className="bg-[var(--primary-color)] text-white p-4 rounded-lg w-32 ml-auto hover:bg-[#613382]">
        Send
      </button>
    </form>
  );
}

const EmailTemplate = ({ name, email, message }) => {
  return `
    <h1>${name}</h1>
    <h3>${email}</h3>
    <p>${message}</p>
  `;
};

// import { Resend } from "resend";

// const resend = new Resend("re_Zh5wNuFM_JSo5HFiji9D638oi8vNhxshc");

function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const send = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());

    if (send) {
      alert("Send successfully");
    } else {
      alert("Send failed");
      return;
    }

    e.target.reset();
  };

  return (
    <div
      id="contact"
      className="py-20 w-full m-auto min-h-screen flex flex-col px-3 md:px-10 universe gradient"
    >
      <h1 className="text-4xl font-bold text-white text-center">Contact</h1>
      <span className="text-white text-center mt-4">
        Maybe you want to get in touch?
      </span>

      <div className="mt-10 flex flex-col md:flex-row gap-4">
        <div className="flex-1 bg-[var(--primary-color-10)] w-full rounded-lg shadow-md p-4 overflow-hidden">
          <AnimatedOnScroll
            animation={"animate__bounceInDown"}
            className="text-white"
            threshold={0.3}
          >
            <h1 className="text-2xl font-bold font-mono text-center text-white">
              Social Network
            </h1>
          </AnimatedOnScroll>
          {contact.map((item, index) => (
            <AnimatedOnScroll
              animation={"animate__fadeInRight"}
              className="text-white"
              threshold={0.3}
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Link className="flex items-center gap-2 mt-4" href={item.href}>
                {item.icon}
                <span className="text-white">{item.content}</span>
              </Link>
            </AnimatedOnScroll>
          ))}
          <AnimatedOnScroll
            animation={"animate__fadeInRight"}
            className="text-white"
            threshold={0.3}
          >
            <Image
              src={require(`@/access/img/contacts.png`)}
              alt="contact me"
              className="m-auto w-1/2"
            />
          </AnimatedOnScroll>
        </div>
        <div className="flex-2 bg-[var(--primary-color-10)] w-full p-4 rounded-lg shadow-md">
          <AnimatedOnScroll
            animation={"animate__bounceInDown"}
            className="text-white"
            threshold={0.3}
          >
            <h1 className="text-2xl font-bold font-mono text-center text-white">
              Let&apos;s talk
            </h1>
          </AnimatedOnScroll>

          {FormSubmit(handleSubmit)}
        </div>
      </div>
    </div>
  );
}

export default Contact;
