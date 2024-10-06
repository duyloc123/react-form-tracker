function App() {

  return (
    <>
      <div className="container m-4 mx-auto">
      <h1 className="font-bold text-[30px] text-center uppercase">
        Issue Tracker
      </h1>
      {/* Form Issue */}
      <form action="" className="mt-[50px]" id="issueTracker">
        <label htmlFor="issueTitle">Title</label>
        <input
          type="text"
          id="issueTitle"
          className="mt-3 mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Title..."
          required
        />
        <label htmlFor="issueAuthor">Author</label>
        <select
          id="issueAuthor"
          class="mt-3 mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected className="text-gray-300">
            Choose author...
          </option>
          <option value="tony">Tony</option>
          <option value="loc">Loc</option>
          <option value="hoa">Hoa</option>
        </select>
        <label htmlFor="issueSeverity">Severity</label>
        <select
          id="issueSeverity"
          class="mt-3 mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Choose severity...</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="Hight">Hight</option>
        </select>
        <label htmlFor="issueDescription">Description</label>
        <textarea
          id="issueDescription"
          rows="4"
          class="block mt-3 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
        <div className=" w-full inline-block mb-4 mt-4 ">
          <button class=" float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-300 ease-linear">
            Add
          </button>
        </div>
      </form>
      {/* Select List */}
      <div className="border-t">
        <div>
          <h2 className="mt-5 text-[20px] font-bold">List Issue</h2>
          <div className="flex items-center mt-6">
            <h3 className="mr-[100px]">Filter:</h3>
            <button class="mr-3 w-[70px] h-[40px] bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded duration-200 ease-linear">
              All
            </button>
            <button class="mr-3 bg-[#28A745] hover:bg-[#218838] text-white  py-2 px-4 rounded duration-200 ease-linear">
              Open
            </button>
            <button class="bg-[#1DA1B8] hover:bg-[#177D8F] text-white py-2 px-4 rounded duration-200 ease-linear">
              Close
            </button>
          </div>
          <div className="flex items-center mt-4">
            <h3 className="mr-[72px]">Order by:</h3>
            <select
              id="issueAuthor"
              class="mt-3 mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose...</option>
              <option value="asc">Asceding</option>
              <option value="desc">Decreasing</option>
            </select>
          </div>
        </div>
        <div></div>
      </div>
      {/* Card Items */}
      <div className="max-w-full mt-3 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <span className=" bg-blue-600 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
          Low
        </span>
        <div className="flex gap-3 items-center mb-2">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <span className="bg-green-100 text-green-800 text-xs font-bold me-2 px-2 py-0.5 rounded dark:bg-green-900 dark:text-green-300">New</span>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <div className="flex justify-between ">
          <div className="flex items-center gap-4">
            <img
              className="w-10 h-10 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="Rounded avatar"
            ></img>
            <p className="text-xl">Loc</p>
          </div>
          <div>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 duration-300 ease-linear"
            >
              Close
            </button>
            <button
              type="button"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 duration-300 ease-linear"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default App
