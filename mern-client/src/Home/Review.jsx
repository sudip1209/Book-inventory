import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// react iconsfrom ""
import { FaStar } from "react-icons/fa";
import { Avatar } from "flowbite-react";
import proPicture from "../assets/profile.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

const Review = () => {
  return (
    <div className="my-12 px-4 lg:px-24">
      <h2 className="text-5xl font-bold  text-center mb-10 leading-snug">
        {" "}
        Our Customers
      </h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="shadow-3xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber flex gap-2">
                <FaStar className="text-amber-500 flex gap-2" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
              {/* text */}
              <div className="mt-7">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
                  alias ipsam eos debitis? Harum temporibus accusantium vero
                  nemo, consequuntur eligendi velit tempore, nesciunt dolor odio
                  aut exercitationem, doloremque cumque ab.
                </p>
                <Avatar
                  img={proPicture}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg "> Mark Ping </h5>
                <p> CEO ABC</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-3xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber flex gap-2">
                <FaStar className="text-amber-500 flex gap-2" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
              {/* text */}
              <div className="mt-7">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
                  alias ipsam eos debitis? Harum temporibus accusantium vero
                  nemo, consequuntur eligendi velit tempore, nesciunt dolor odio
                  aut exercitationem, doloremque cumque ab.
                </p>
                <Avatar
                  img={proPicture}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg "> Mark Ping </h5>
                <p> CEO ABC</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-3xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber flex gap-2">
                <FaStar className="text-amber-500 flex gap-2" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
              {/* text */}
              <div className="mt-7">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
                  alias ipsam eos debitis? Harum temporibus accusantium vero
                  nemo, consequuntur eligendi velit tempore, nesciunt dolor odio
                  aut exercitationem, doloremque cumque ab.
                </p>
                <Avatar
                  img={proPicture}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg "> Mark Ping </h5>
                <p> CEO ABC</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-3xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber flex gap-2">
                <FaStar className="text-amber-500 flex gap-2" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
              {/* text */}
              <div className="mt-7">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
                  alias ipsam eos debitis? Harum temporibus accusantium vero
                  nemo, consequuntur eligendi velit tempore, nesciunt dolor odio
                  aut exercitationem, doloremque cumque ab.
                </p>
                <Avatar
                  img={proPicture}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg "> Mark Ping </h5>
                <p> CEO ABC</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-3xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber flex gap-2">
                <FaStar className="text-amber-500 flex gap-2" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
              {/* text */}
              <div className="mt-7">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
                  alias ipsam eos debitis? Harum temporibus accusantium vero
                  nemo, consequuntur eligendi velit tempore, nesciunt dolor odio
                  aut exercitationem, doloremque cumque ab.
                </p>
                <Avatar
                  img={proPicture}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg "> Mark Ping </h5>
                <p> CEO ABC</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-3xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber flex gap-2">
                <FaStar className="text-amber-500 flex gap-2" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
              {/* text */}
              <div className="mt-7">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
                  alias ipsam eos debitis? Harum temporibus accusantium vero
                  nemo, consequuntur eligendi velit tempore, nesciunt dolor odio
                  aut exercitationem, doloremque cumque ab.
                </p>
                <Avatar
                  img={proPicture}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg "> Mark Ping </h5>
                <p> CEO ABC</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
