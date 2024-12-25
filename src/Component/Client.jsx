import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import img4 from "../assets/image 133.png";
import img1 from "../assets/profile1.png";
import img2 from "../assets/profile2.png";
import img3 from "../assets/profile3.png";

const Client = () => {
  const clientData = [
    {
      name: "Gautam Chowdhary",
      image: img1,
      testimonial:
        "Customer Centric, right level of technical expertise, real value for money. A number of things which immensely adds to Binmile's portfolio.",
      link: "/client1",
    },
    {
      name: "Amit Sharma",
      image: img2,
      testimonial:
        "Outstanding service! The team is highly professional and delivers exceptional results with a customer-first approach.",
      link: "/client2",
    },
    {
      name: "Priya Kapoor",
      image: img3,
      testimonial:
        "Binmile exceeded our expectations by delivering top-notch solutions tailored to our needs. Highly recommended!",
      link: "/client3",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "-50px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <ul className="custom-dots">{dots}</ul>
      </div>
    ),
    customPaging: (i) => <Dot index={i} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  const Dot = ({ index }) => (
    <div
      style={{
        width: "8px",
        height: "8px",
        background: "#ccc",
        borderRadius: "50%",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
      }}
      aria-label={`Dot ${index + 1}`}
    />
  );

  const handleDotClick = (index) => {
    const client = clientData[index];
    if (client?.link) {
      window.location.href = client.link;
    }
  };

  return (
    <div className="bg-white min-h-screen overflow-hidden flex flex-col">
      <div className="text-center py-10 px-4">
        <h1 className="font-bold text-customBodyColor text-3xl">
          Hear Directly from our Satisfied Clients
        </h1>
        <p className="font-medium text-2xl mt-4">
          We've served more than 300 clients globally in the last 8 years and
          retained 95% of them.
        </p>
      </div>
      <div className="flex-grow p-4 md:p-10">
        <Slider {...settings}>
          {clientData.map((client, index) => (
            <div key={index} className="flex justify-center items-center p-4">
              <div className="max-w-xs sm:max-w-sm h-[25rem] border rounded-lg flex flex-col items-center justify-center bg-whiteShade shadow-lg">
                <img
                  src={client.image}
                  alt={`Client ${index + 1}`}
                  className="w-28 h-28 border-4 border-white rounded-full relative bottom-12 transform transition-transform duration-300"
                />
                <h2 className="text-xl font-semibold relative bottom-12">
                  {client.name}
                </h2>
                <p className="text-center px-4 mt-2 relative bottom-12">
                  {client.testimonial}
                </p>
                <img
                  src={img4}
                  alt="Decoration"
                  className="relative bottom-5 w-28"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Client;
