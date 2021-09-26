/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Example() {
  return (
    <div class=" min-h-screen flex justify-center items-center">
      <div class="flex-1 mx-auto ">
        <div class="ml-64 grid grid-cols-4 mr-64 gap-2 ">
          <div class="rounded-lg border-4 border-dashed col-span-2 row-span-4 flex flex-col justify-center items-center">
            <div>
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600 justify-center">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500 text-center">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
          <div class="bg-white p-3 rounded">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700"
            >
              NIK
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div class="bg-white p-3 rounded">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700"
            >
              Nama
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div class="bg-white p-3 rounded col-span-2">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700"
            >
              Alamat
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div class="bg-white p-3 rounded col-span-2">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div class="bg-white p-3 rounded col-span-2">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700 "
            >
              Keperluan
            </label>
            <textarea
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div class="bg-white p-3 rounded col-span-2 text-center">
            <button
              class="px-4 py-2 rounded-md text-sm font-medium border-0 focus:outline-none focus:ring transition text-white bg-purple-500 hover:bg-purple-600 active:bg-purple-700 focus:ring-purple-300"
              type="submit"
            >
              Capture
            </button>
          </div>
          <div class="bg-white p-3 rounded text-right">
            <button
              class="px-4 py-2 rounded-md text-sm font-medium border-0 focus:outline-none focus:ring transition text-gray-600 bg-gray-50 border-gray-200 hover:bg-gray-100 active:bg-gray-200 focus:ring-gray-300"
              type="submit"
            >
              Back
            </button>
          </div>
          <div class="bg-white p-3 rounded text-left">
            <button
              class="px-4 py-2 rounded-md text-sm font-medium border-0 focus:outline-none focus:ring transition text-white bg-purple-500 hover:bg-purple-600 active:bg-purple-700 focus:ring-purple-300"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
