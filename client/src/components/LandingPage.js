import React from "react";
import { useForm } from "react-hook-form";
import {StickyNavbar} from "./Narbar";
import { Select, Option, Button, Input } from "@material-tailwind/react";
import img from "../res/landingPage.png"

export const LandingPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <div class="max-h-screen">
      <StickyNavbar/>
      <div class="grid md:grid-cols-2 gap-2 xl:gap-10 md:items-center mt-10">
        <div>
        <h1 class="block text-xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight">
            Find your best match school with{" "}
            <span class="text-blue-600">UniMatch</span>
          </h1>
          <img src={img} alt="landing page" className="w-[30rem] h-[25rem] mx-auto object-cover m-4" />
          <p class="mt-3 text-xl font-body text-gray-800 ">
          Powered by intelligent matching algorithms to help you find the perfect university fit.
          </p>
        </div>

        <div class="relative ms-4">          
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="lg:max-w-lg mx-auto">
              <div class="p-4 sm:p-10 flex flex-col bg-white rounded-2xl shadow-xl drop-shadow-2xl dark:bg-neutral-800">
              <h2 class="text-4xl font-semibold text-gray-800 dark:text-white">Get Instant Recommendations</h2>
                <div class="mt-5">
                  <div class="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <Input
                        label="SAT Verbal Score"
                        color="blue"
                        type="number"
                        {...register("SATV", {
                          required: "Please enter your SAT Verbal Score.",
                          min: 0,
                          max: 800
                        })}
                      />

                      {errors.SATV && (
                        <p className="mt-2 text-sm text-red-500">
                          {errors.SATV.message}
                        </p>
                      )}
                    </div>
                    <div className="col-span-2">
                      <Input
                        label="SAT Math Score"
                        color="blue"
                        type="number"
                        {...register("SATM", {
                          required: "Please enter your SAT Math Score.",
                          min: 0,
                          max: 800
                        })}
                      />
                      {errors.SATM && (
                        <p className="mt-2 text-sm text-red-500">
                          {errors.SATM.message}
                        </p>
                      )}
                    </div>
                    <div className="col-span-2">
                      <Select
                        label="Sports Interest"
                        defaultValue="None"
                        {...register("Sports")}
                        color="blue"
                      >
                        <Option value="Basketball">Basketball</Option>
                        <Option value="Soccer">Soccer</Option>
                        <Option value="Tennis">Tennis</Option>
                      </Select>
                    </div>
                    <div className="col-span-2">
                      <Select
                        label="Career Interest"
                        defaultValue="None"
                        {
                          ...register("Career")
                        }
                        color="blue"
                      >
                        <Option value="ComputerSci">Computer Science</Option>
                        <Option value="Business">Business</Option>
                        <Option value="Engineering">Engineering</Option>
                        <Option value="Nursing">Nursing</Option>
                        <Option value="Finance">Finance</Option>
                        <Option value="Aerospace">Aerospace</Option>
                        <Option value="Economics">Economics</Option>
                        <Option value="Management">Management</Option>
                        <Option value="AI">Artificial Intelligence</Option>
                        <Option value="Marketing">Marketing</Option>
                        <Option value="Psychology">Psychology</Option>
                      </Select>
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
