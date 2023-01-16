import React from "react";
function Homepage() {
  return (
    <div className="">
      <div class="px-6  mx-auto">
        <div class="flex flex-col text-center w-full mb-8">
          <span class="sm:text-3xl font-medium title-font bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            All aboard for fun and learning
          </span>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/3">
            <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div class="flex items-center mb-3">
                <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#B124A3] text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 class="text-[#B124A3] text-lg title-font font-medium">
                  Our Vision
                </h2>
              </div>
              <div class="flex-grow">
                <p class="leading-relaxed text-base">
                  Positive, caring relationships based on trust and respect, are
                  at the heart of our philosophy.
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div class="flex items-center mb-3">
                <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#B124A3] text-white flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                </div>
                <h2 class="text-[#B124A3] text-lg title-font font-medium">
                  Mission
                </h2>
              </div>
              <div class="flex-grow">
                <p class="leading-relaxed text-base">
                  At KinderJoy, we believe that every day is a learning day and
                  that learning is all around us. As well as being a place of
                  learning, we pride ourselves on ensuring that all children are
                  coming in to a loving, caring environment where they are
                  valued and listened to.
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div class="flex items-center mb-3">
                <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#B124A3] text-white flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                    />
                  </svg>
                </div>
                <h2 class="text-[#B124A3] text-lg title-font font-medium">
                  Motto
                </h2>
              </div>
              <div class="flex-grow">
                <p class="leading-relaxed text-base">
                  To transform the lives of the children and families we work
                  with, through creating a nursery which feels like home with an
                  extended and supportive family environment.
                </p>
              </div>
            </div>
          </div>
          {/* comment section */}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
