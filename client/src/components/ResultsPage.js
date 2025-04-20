import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

export const ResultsPage = () => {

   const navigate = useNavigate();
  
    const {
      register,
      handleSubmit,
      formState: { errors },setValue
    } = useForm();
  
    const onSubmit = (data) => {
      console.log(data);
      navigate('/results', { state: { query: data.query } });
    };
  // const [unis, setUnis] = useState([
  //   {
  //     name: "University of Alaska--Fairbanks",
  //     public: true,
  //     location: "Fairbanks, AK",
  //     rank: "#389",
  //     rankNumber: 389,
  //     isLiberal: false,
  //     avg_annual_cost: null,
  //     degree_types: ["Bachelor's Degree", "Master's Degree", "Doctoral Degree"],
  //     graduation_rate: 0.4,
  //     median_earnings: 0,
  //     school_size: 0,
  //     school_type: null,
  //     urbanicity: null,
  //     computerScienceRank: 265,
  //     engineeringRank: 68,
  //     businessRank: 244,
  //     graduation_rate_display: "N/A",
  //     images: {
  //       medium:
  //         "https://www.usnews.com/dims4/USNEWS/5c77d5a/17177859217/thumbnail/196x196/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2F3a%2F7d27c65e9b048bc5df00a8b252c85e%2Fcrop-g-UCM_Campus_2020_DB_057_e.jpg",
  //     },
  //     preference_vector: [389, 0, 0, 68, 244, 265, 999, 999, 999, 999, 0, 0.4],
  //   },
  //   {
  //     name: "Tennessee Tech University",
  //     public: true,
  //     location: "Cookeville, TN",
  //     rank: "#249",
  //     rankNumber: 249,
  //     isLiberal: false,
  //     avg_annual_cost: 24500,
  //     degree_types: ["Bachelor's Degree", "Master's Degree", "Doctoral Degree"],
  //     graduation_rate: 0.4,
  //     median_earnings: 0,
  //     school_size: 0,
  //     school_type: null,
  //     urbanicity: null,
  //     computerScienceRank: 229,
  //     engineeringRank: 53,
  //     businessRank: 310,
  //     nursingRank: 228,
  //     graduation_rate_display: "N/A",
  //     images: {
  //       medium:
  //         "https://www.usnews.com/dims4/USNEWS/c9c9473/17177859217/thumbnail/336x336/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2F73%2F572381fc3b005a0cc3313798904bbf%2FStock_Campus_Drone_23AUG19_00008.jpg",
  //     },
  //     preference_vector: [249, 0, 0, 53, 310, 229, 228, 999, 999, 999, 0, 0.4],
  //   },
  // ]);
  const location = useLocation();
  const query = location.state?.query;
  const [unis, setUnis] = useState([]);
  
  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://unimatch-backend.onrender.com/api/universities",
        query
      );
      setUnis(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    if (query) {
      Object.entries(query).forEach(([key, value]) => {
        setValue(key, value);
      });
    }
    fetchData();
  }, [query, setValue]);
  
  return (
    <div>
      <div class="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 lg:px-8 lg:hidden dark:bg-neutral-800 dark:border-neutral-700">
        <div class="flex items-center py-2">
          <button
            type="button"
            class="size-8 flex justify-center items-center gap-x-2 border border-gray-200 text-gray-800 hover:text-gray-500 rounded-lg focus:outline-none focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="hs-application-sidebar"
            aria-label="Toggle navigation"
            data-hs-overlay="#hs-application-sidebar"
          >
            <span class="sr-only">Toggle Navigation</span>
            <svg
              class="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M15 3v18" />
              <path d="m8 9 3 3-3 3" />
            </svg>
          </button>
          <ol class="ms-3 flex items-center whitespace-nowrap">
            <li class="flex items-center text-sm text-gray-800 dark:text-neutral-400">
              Application Layout
              <svg
                class="shrink-0 mx-3 overflow-visible size-2.5 text-gray-400 dark:text-neutral-500"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </li>
            <li
              class="text-sm font-semibold text-gray-800 truncate dark:text-neutral-400"
              aria-current="page"
            >
              Dashboard
            </li>
          </ol>
        </div>
      </div>
      <div
        id="hs-application-sidebar"
        class="hs-overlay  [--auto-close:lg]
  hs-overlay-open:translate-x-0
  -translate-x-full transition-all duration-300 transform
  w-[260px] h-full
  hidden
  fixed inset-y-0 start-0 z-[60]
  bg-white border-e border-gray-200
  lg:block lg:translate-x-0 lg:end-auto lg:bottom-0
  dark:bg-neutral-800 dark:border-neutral-700"
        role="dialog"
        tabindex="-1"
        aria-label="Sidebar"
      >
        <div class="relative bg-blue-700 flex flex-col h-full max-h-full">
          <div class="px-6 pt-4 mt-14">
            <a
              class="flex-none text-white rounded-xl text-2xl inline-block font-bold focus:outline-none focus:opacity-80"
              href="#"
              aria-label="Preline"
            >
              Parameters
            </a>
          </div>
          <div class="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <nav
              class="hs-accordion-group p-3 w-full flex flex-col flex-wrap"
              data-hs-accordion-always-open
            >
              
                        <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="grid grid-cols-2 gap-4">
                                  <div className="col-span-2">
                                    <input
                                      label="SAT Verbal Score"
                                      color="blue"
                                      type="number"
                                      aria-describedby="helper-text-explanation"
                                      class="bg-gray-50  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      placeholder="SAT Verbal Score"
                                      {...register("SATV", {
                                        required: "Please enter your SAT Verbal Score.",
                                        min: 0,
                                        max: 800,
                                      })}
                                    />
              
                                    {errors.SATV && (
                                      <p className="mt-2 text-sm text-red-500">
                                        {errors.SATV.message}
                                      </p>
                                    )}
                                  </div>
                                  <div className="col-span-2">
                                    <input
                                      label="SAT Math Score"
                                      aria-describedby="helper-text-explanation"
                                      class="bg-gray-50  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      placeholder="SAT Math Score"
                                      color="blue"
                                      type="number"
                                      {...register("SATM", {
                                        required: "Please enter your SAT Math Score.",
                                        min: 0,
                                        max: 800,
                                      })}
                                    />
                                    {errors.SATM && (
                                      <p className="mt-2 text-sm text-red-500">
                                        {errors.SATM.message}
                                      </p>
                                    )}
                                  </div>
                                  <div className="col-span-2">
                                    <select
                                      label="Sports Interest"
                                      defaultValue="None"
                                      {...register("Sports")}
                                      color="blue"
                                      class="bg-gray-50  text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                      <option selected value="">Enter your sports Interest</option>
                                      <option value="Basketball">Basketball</option>
                                      <option value="Soccer">Soccer</option>
                                      <option value="Tennis">Tennis</option>
                                    </select>
                                  </div>
                                  <div className="col-span-2">
                                    <select
                                      label="Career Interest"
                                      defaultValue="None"
                                      class="bg-gray-50  text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    
                                      {...register("Career")}
                                      color="blue"
                                    >
                                      <option selected value="">Enter your career Interest</option>
                                      <option value="ComputerSci">Computer Science</option>
                                      <option value="Business">Business</option>
                                      <option value="Engineering">Engineering</option>
                                      <option value="Nursing">Nursing</option>
                                      <option value="Finance">Finance</option>
                                      <option value="Aerospace">Aerospace</option>
                                      <option value="Economics">Economics</option>
                                      <option value="Management">Management</option>
                                      <option value="AI">Artificial Intelligence</option>
                                      <option value="Marketing">Marketing</option>
                                      <option value="Psychology">Psychology</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="mt-5 mx-10">
                                  <button
                                    type="submit"
                                    class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-md font-semibold rounded-lg border border-blue-600 text-blue-600 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                                  >
                                    Submit
                                  </button>
                                </div>
                        </form>
            </nav>
          </div>
        </div>
      </div>

      <div class="w-full bg-white lg:ps-[260px] 2xl:pe-[200px]">
        <h1 class="text-3xl font-semibold border-b mb-4 text-gray-800 p-4">
          Rankings
        </h1>
        <div className="mt-5 ms-2 flex flex-col gap-5">
          {unis.map((uni, idx) => (
            <a
              key={idx}
              href="#"
              className="flex relative overflow-visible min-w-[800px] mx-4 h-fit items-center bg-white border border-gray-200 rounded-lg shadow flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <span className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 bg-white m-1 text-blue-600 ring ring-blue-600 rounded-full text-lg items-start font-medium w-8 h-8">
                {uni.rankNumber ?? "?"}
              </span>

              <img
                className="object-cover block w-auto lg:h-[15rem] md:h-[180px] h-[160px] rounded-t-lg md:rounded-none md:rounded-s-lg"
                src={
                  uni.images?.medium ||
                  uni.images?.thumb ||
                  "https://via.placeholder.com/150"
                }
                alt={uni.name}
              />

              <div className="flex flex-1 flex-col text-start p-4 pt-0 leading-normal min-w-[31rem] overflow-x-scroll tablet:overflow-x-auto">
                <div className="w-full flex justify-between items-center">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {uni.name}
                  </h5>
                  <span className="text-sm text-blue-600 dark:text-gray-200">
                    {uni.public ? "Public" : "Private"}
                  </span>
                </div>
                <h6 className="mb-4 text-base font-semibold text-gray-800 dark:text-gray-200">
                  {uni.location}
                </h6>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate">
                  Graduation Rate: {uni.graduation_rate_display || "N/A"}
                </p>
                <div className="w-full border-t p-2 grid grid-cols-2 justify-between items-center gap-x-2">
                  {[
                    {
                      label: "Tuition",
                      value: uni.avg_annual_cost
                        ? `$${uni.avg_annual_cost}`
                        : "N/A",
                    },
                    {
                      label: "CS Rank",
                      value:
                        uni.computerScienceRank !== null
                          ? `#${uni.computerScienceRank}`
                          : "N/A",
                    },
                    {
                      label: "Business Rank",
                      value:
                        uni.engineeringRank !== null
                          ? `#${uni.engineeringRank}`
                          : "N/A",
                    },
                    {
                      label: "Engineering Rank",
                      value:
                        uni.businessRank !== null
                          ? `#${uni.businessRank}`
                          : "N/A",
                    },
                    { label: "School Type", value: uni.school_type ?? "N/A" },
                    { label: "Urbanicity", value: uni.urbanicity ?? "N/A" },
                    {
                      label: "Median Earnings",
                      value: uni.median_earnings
                        ? `$${uni.median_earnings.toLocaleString()}`
                        : "N/A",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-2 items-center justify-between p-1 rounded-lg drop-shadow-md"
                    >
                      <div className="flex items-center justify-center rounded-s-md bg-blue-700">
                        <span className="text-base mx-auto tracking-tight text-center text-white rounded-lg py-1 px-2.5">
                          {item.label}
                        </span>
                      </div>
                      <div className=" flex text-sm h-full pe-2 items-center rounded-e-md justify-end font-semibold tracking-tight text-gray-900 bg-blue-100">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
