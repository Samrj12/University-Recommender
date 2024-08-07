import React from "react";
import { useForm } from "react-hook-form";
import { Select, Option, Button, Input } from "@material-tailwind/react";
import img from "../res/landingPage.jpeg"

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
    <div class="max-h-screen max-w-[85rem] mx-auto px-4 sm:px-6 py-8">
      <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div>
          <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight">
            Find your best match school with{" "}
            <span class="text-blue-600">UniMatch</span>
          </h1>
          <p class="mt-3 text-lg text-gray-800 ">
            Hand-picked professionals and expertly crafted components, designed
            for any kind of entrepreneur.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="lg:max-w-lg mx-auto">
              <div class="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg dark:bg-neutral-900">
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
                          max: 800,
                        })}
                        error={errors.SATV == null}
                      />

                      {errors.SATV && (
                        <p className="mt-2 text-red-500">
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
                          max: 800,
                        })}
                        error={errors.SATM !== null}
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
                        {...register("SATM", {
                          required: "Please enter your SAT Math Score.",
                          min: 0,
                          max: 800,
                        })}
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
                          class="w-4 h-4 text-blue-600 border rounded-md focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-1 dark:bg-gray-700"
                        />
                        <label
                          for="link-checkbox"
                          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
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

        <div class="relative ms-4">
          <img
            class="w-full h-[50%] rounded-md"
            src={img}
             alt="Image Description"
          />
          <div class="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>

          <div class="absolute bottom-0 start-0">
            <svg
              class="w-2/3 ms-auto h-auto text-white"
              width="630"
              height="451"
              viewBox="0 0 630 451"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="531"
                y="352"
                width="99"
                height="99"
                fill="currentColor"
              />
              <rect
                x="140"
                y="352"
                width="106"
                height="99"
                fill="currentColor"
              />
              <rect
                x="482"
                y="402"
                width="64"
                height="49"
                fill="currentColor"
              />
              <rect
                x="433"
                y="402"
                width="63"
                height="49"
                fill="currentColor"
              />
              <rect
                x="384"
                y="352"
                width="49"
                height="50"
                fill="currentColor"
              />
              <rect
                x="531"
                y="328"
                width="50"
                height="50"
                fill="currentColor"
              />
              <rect x="99" y="303" width="49" height="58" fill="currentColor" />
              <rect x="99" y="352" width="49" height="50" fill="currentColor" />
              <rect x="99" y="392" width="49" height="59" fill="currentColor" />
              <rect x="44" y="402" width="66" height="49" fill="currentColor" />
              <rect
                x="234"
                y="402"
                width="62"
                height="49"
                fill="currentColor"
              />
              <rect
                x="334"
                y="303"
                width="50"
                height="49"
                fill="currentColor"
              />
              <rect x="581" width="49" height="49" fill="currentColor" />
              <rect x="581" width="49" height="64" fill="currentColor" />
              <rect
                x="482"
                y="123"
                width="49"
                height="49"
                fill="currentColor"
              />
              <rect
                x="507"
                y="124"
                width="49"
                height="24"
                fill="currentColor"
              />
              <rect x="531" y="49" width="99" height="99" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
