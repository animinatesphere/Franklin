// import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logos.svg";

const Home = () => {
  const jugde = [
    {
      img: "https://probate.franklincountyohio.gov/files/assets/probatecourt/v/2/images/probate-court-seal2.jpg?dimension=homepagelisting&w=380&h=200",
      te: "Probate  Court on April 29,2026 from 8:45am to 11:15am",
      time: "Published on April 20, 2026",
      time2: "Probate Court Closed on April 29, 2026 from 8:45am to 11:15am",
    },
    {
      img: "https://probate.franklincountyohio.gov/files/assets/probatecourt/v/1/test-content/hero-1.jpg?dimension=homepagelisting&w=380&h=200",
      te: "Changes to Franklin County Probate Court Forms",
      time: "Published on February 23, 2026",
      time2:
        "The Franklin County Probate Court is actively working to revise and simplify a number of its forms. As of the time of writing, several forms have already been replaced, and more changes are still to come.",
    },
    {
      img: "https://probate.franklincountyohio.gov/files/assets/probatecourt/v/1/test-content/news-1.jpg?dimension=homepagelisting&w=380&h=200",
      te: "Changes to Estates Procedure - Notices of Compliance",
      time: "Published on February 23, 2026",
      time2:
        "Beginning 2/23/2026, the court will no longer be issuing a Notice of Compliance.",
    },
  ];
  return (
    <>
      {/* container */}
      <div className="w-full overflow-x-hidden">
        {/* nav1 */}
        <div>
          <p className="p-4 sm:p-6 text-[18px] sm:text-[22px] bg-[#A3BDDB] text-[#1f1f1f] font-bold leading-snug">
            The Probate Court will be closed 04/29/2026 from 8:45am to 11:15am.
          </p>
          <p className="px-4 sm:pl-6 text-[14px] sm:text-[16px] bg-[#A3BDDB] text-[#1f1f1f] pb-4">
            The Probate Court will be closed Wednesday, April 29, 2026 for an
            all staff meeting from 8:45am to 11:15am. e-Filing will still be
            available.
          </p>
        </div>
        {/* nav1 */}

        {/* nav2 */}
        <div className="flex flex-wrap items-center justify-end gap-3 px-4 sm:pr-6 bg-[#014481] py-3">
          <p className="text-[13px] sm:text-[16px] text-[#ffff] font-bold">
            Contact
          </p>
          <p className="text-[13px] sm:text-[16px] text-[#ffff]">
            English (United States)
          </p>
        </div>
        {/* nav2 */}

        {/* navbar */}
        <div className="me border-b-[#4DCC78] border-10 mb-5">
          <div className="flex flex-col md:flex-row items-center justify-between p-4 sm:p-5 gap-4">
            <div className="h-10 sm:h-12">
              <img src={logo} alt="" className="h-full w-auto" />
            </div>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
              <Link
                to="#"
                className="text-[14px] sm:text-[20px] font-bold text-white"
              >
                About
              </Link>
              <Link
                to="#"
                className="text-[14px] sm:text-[20px] font-bold text-white"
              >
                Departments
              </Link>
              <Link
                to="#"
                className="text-[14px] sm:text-[20px] font-bold text-white"
              >
                Forums
              </Link>
              <Link
                to="#"
                className="text-[14px] sm:text-[20px] font-bold text-white"
              >
                Local Rules & Adminstrative Orders
              </Link>
            </div>
          </div>

          {/* search bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center mt-8 sm:mt-20 gap-2 px-4">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-[#ffff] h-12 outline-none text-[#5C5C5C] rounded-[5px] p-3 w-full sm:flex-1 sm:max-w-lg"
            />
            <button className="bg-[#4DCC78] text-[#014481] text-[18px] sm:text-[20px] text-center p-3 w-full sm:w-28 h-12 font-extrabold rounded-[5px]">
              Search
            </button>
          </div>
          {/* search bar */}

          {/* boxs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 px-4 mt-6 sm:mt-10">
            <div className="bg-white h-20 sm:h-28 rounded-[5px] flex items-center justify-center p-2">
              <p className="text-[#014481] text-sm sm:text-xl text-center font-medium">
                Certified Records
              </p>
            </div>
            <div className="bg-white h-20 sm:h-28 rounded-[5px] flex items-center justify-center p-2">
              <p className="text-[#014481] text-sm sm:text-xl text-center font-medium">
                Community Resources
              </p>
            </div>
            <div className="bg-white h-20 sm:h-28 rounded-[5px] flex items-center justify-center p-2">
              <p className="text-[#014481] text-sm sm:text-xl text-center font-medium">
                e-Filling
              </p>
            </div>
            <div className="bg-white h-20 sm:h-28 rounded-[5px] flex items-center justify-center p-2">
              <p className="text-[#014481] text-sm sm:text-xl text-center font-medium">
                Estates (Small)
              </p>
            </div>
            <div className="bg-white h-20 sm:h-28 rounded-[5px] flex items-center justify-center p-2">
              <p className="text-[#014481] text-sm sm:text-xl text-center font-medium">
                Forms
              </p>
            </div>
            <div className="bg-white h-20 sm:h-28 rounded-[5px] flex items-center justify-center p-2">
              <p className="text-[#014481] text-sm sm:text-xl text-center font-medium">
                Guardianship
              </p>
            </div>
            <div className="bg-white h-20 sm:h-28 rounded-[5px] flex items-center justify-center p-2">
              <p className="text-[#014481] text-sm sm:text-xl text-center font-medium">
                Marriage
              </p>
            </div>
            <div className="bg-white h-20 sm:h-28 rounded-[5px] flex items-center justify-center p-2">
              <p className="text-[#014481] text-sm sm:text-xl text-center font-medium">
                Name Change
              </p>
            </div>
          </div>
          {/* boxs */}

          {/* goat */}
          <div className="flex flex-wrap items-center gap-3 px-4 sm:ml-10 mt-8 sm:mt-16 pb-6">
            <button className="bg-[#4DCC78] text-[#014481] text-[16px] sm:text-[24px] text-center p-3 w-24 sm:w-40 h-12 sm:h-20 font-extrabold rounded-[5px]">
              News
            </button>
            <button className="bg-[#1959A6] text-white text-[16px] sm:text-[24px] text-center p-3 w-24 sm:w-40 h-12 sm:h-20 font-extrabold rounded-[5px]">
              Events
            </button>
            <button className="bg-[#1959A6] text-white text-[16px] sm:text-[24px] text-center p-3 w-24 sm:w-40 h-12 sm:h-20 font-extrabold rounded-[5px]">
              Login
            </button>
          </div>
          {/* end  goat */}
        </div>
        {/* end of  navbar */}

        {/* news */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4 sm:px-10">
          {jugde.map((item) => (
            <div key={item.te} className="flex flex-col">
              <img
                src={item.img}
                alt=""
                className="w-full h-44 object-cover rounded-[5px]"
              />
              <p className="text-[#014481] text-[18px] sm:text-[24px] font-bold w-full mt-3">
                {item.te}
              </p>
              <p className="text-[#5c5c5c] text-[14px] sm:text-[18px] mt-2">
                {item.time}
              </p>
              <p className="text-[#5c5c5c] text-[14px] sm:text-[18px] mt-3">
                {item.time2}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-10">
          <button className="bg-[#1959A6] text-white text-[16px] sm:text-[24px] text-center p-3 w-40 sm:w-60 h-14 sm:h-20 font-extrabold rounded-[5px]">
            View More News
          </button>
        </div>

        {/* last */}
        <div className="flex flex-col md:flex-row items-center p-4 sm:p-10 gap-6 mt-6">
          <img
            src="https://probate.franklincountyohio.gov/files/assets/probatecourt/v/1/test-content/featured-1.jpg?dimension=homepagelistingwide&w=760&h=636"
            alt=""
            className="w-full md:w-1/2 rounded-[5px] object-cover"
          />
          <div className="flex flex-col items-start justify-center gap-4 w-full md:w-1/2">
            <p className="text-[#014481] text-[20px] sm:text-[24px] font-bold">
              Meet the Judge
            </p>
            <p className="text-[#5c5c5c] text-[14px] sm:text-[18px]">
              Judge Jeffrey D. Mackey, a graduate of The Ohio State University
              College of Law, spent 38 years in private practice focusing on
              estate planning and probate law. Elected in 2020, he took office
              in 2021 and is committed to ensuring equal access to justice while
              promoting diversity, equity, and inclusion in the community he
              serves.
            </p>
            <button className="bg-[#1959A6] text-white text-[16px] sm:text-[24px] text-center p-3 w-40 sm:w-60 h-14 sm:h-20 font-extrabold rounded-[5px]">
              Learn More
            </button>
          </div>
        </div>
        {/* last */}

        {/* footer */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 p-4 sm:p-3 mt-6 border-t border-gray-200">
          <p className="text-[12px] sm:text-[14px] text-[#5c5c5c]">
            Disclaimer & Privacy Statement | Sitemap | Accessibility Statement
          </p>
          <p className="text-[12px] sm:text-[14px] text-[#5c5c5c]">
            © 2026 Franklin County Court of Common Pleas, Probate Division, Ohio
            | Powered by Granicus
          </p>
        </div>
        {/* footer */}
      </div>
      {/* container */}
    </>
  );
};

export default Home;
