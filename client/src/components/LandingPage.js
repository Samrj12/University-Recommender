import React from "react";
import { useForm } from "react-hook-form";
import { StickyNavbar } from "./Narbar";
import { select, option, Button, input } from "@material-tailwind/react";
import img from "../res/landingPage.png";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    navigate('/results', { state: { query: data } });
  };
  return (
    <div class="max-h-screen">
      <StickyNavbar />
      <div class="grid md:grid-cols-2 gap-2 xl:gap-10 md:items-center mt-10">
        <div>
          <h1 class="block text-xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight">
            Find your best match school with{" "}
            <span class="text-blue-600">UniMatch</span>
          </h1>
          <img
            src={img}
            alt="landing page"
            className="w-[30rem] h-[25rem] mx-auto object-cover m-4"
          />
          <p class="mt-3 text-xl font-body text-gray-800 ">
            Powered by intelligent matching algorithms to help you find the
            perfect university fit.
          </p>
        </div>

        <div class="relative ms-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="lg:max-w-lg mx-auto">
              <div class="p-4 sm:p-10 flex flex-col bg-white rounded-2xl shadow-xl drop-shadow-2xl dark:bg-neutral-800">
                <h2 class="text-4xl font-semibold text-gray-800 dark:text-white">
                  Get Instant Recommendations
                </h2>
                <div class="mt-5">
                  <div class="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <input
                        label="SAT Verbal Score"
                        color="blue"
                        type="number"
                        aria-describedby="helper-text-explanation"
                        class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                        class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                        class="bg-gray-50 border-2 border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                        class="bg-gray-50 border-2 border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      
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
                  <div class="mt-5 flex items-center">
                    <div class="ms-3">
                      <div class="flex items-center">
                        <input
                          type="checkbox"
                          value=""
                          {...register("Agreement", {
                            required: "Please accept the terms and conditions.",
                          })}
                          class="w-4 h-4 text-blue-600 border rounded-md focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-1 dark:bg-gray-700"
                        />
                        <label
                          for="link-checkbox"
                          class="ms-2 text-sm font-medium text-gray-800 dark:text-gray-300"
                        >
                          I agree with the{" "}
                          <a
                            href="#"
                            class="text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            terms and conditions
                          </a>
                          .
                        </label>
                      </div>
                    </div>
                  </div>

                  {errors.Agreement && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.Agreement.message}
                    </p>
                  )}
                  <div class="mt-5 mx-10">
                    <button
                      type="submit"
                      class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-md font-semibold rounded-lg border border-blue-600 text-blue-600 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      Match!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
