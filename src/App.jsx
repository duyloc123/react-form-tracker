import React, { useRef } from "react";

function App() {
  const titleRef = React.useRef(null);
  const authorRef = React.useRef(null);
  const severityRef = React.useRef(null);
  const descriptionRef = React.useRef(null);
  const selectAuthorRef = React.useRef(null);
  const searchRef = React.useRef(null);

  const [issueTracker, setIssueTracker] = React.useState([
    {
      id: 1,
      title: "Aop",
      author: "Loc",
      description: "Lorem tracker....",
      severity: "low",
      status: "new",
    },
    {
      id: 2,
      title: "Cew",
      author: "Loc",
      description: "Lorem tracker....",
      severity: "medium",
      status: "new",
    },
    {
      id: 3,
      title: "Bop",
      author: "Loc",
      description: "Lorem tracker....",
      severity: "high",
      status: "new",
    },
  ]);
  const [filterIssue, setFilterIssue] = React.useState([]);

  function addIssueTracker(e) {
    e.preventDefault();
    const items = {
      id: issueTracker.length + 1,
      title: titleRef.current.value,
      author: authorRef.current.value,
      severity: severityRef.current.value,
      description: descriptionRef.current.value,
      status: "new",
    };
    setIssueTracker((prevState) => {
      return [...prevState, items];
    });
    setFilterIssue((prevState) => {
      return [...prevState,items]
    })
  }

  function deleteIssueTracker(idIssue) {
    const newIssue = [...issueTracker].filter((items) => items.id !== idIssue);
    setIssueTracker(newIssue);
    setFilterIssue(newIssue);
  }

  function closeIssueTracker(idIssue) {
    const updateIssue = issueTracker.map((items) =>
      items.id === idIssue ? { ...items, status: "done" } : items
    );
    setIssueTracker(updateIssue);
    setFilterIssue(updateIssue);
  }

  function selectAuthor() {
    if (selectAuthorRef.current.value === "asc") {
      const ascIssue = [...issueTracker].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setIssueTracker(ascIssue);
      setFilterIssue(ascIssue);
    }
    if (selectAuthorRef.current.value === "desc") {
      const descIssue = [...issueTracker].sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      setIssueTracker(descIssue);
      setFilterIssue(descIssue);
    }
  }

  function searchIssue() {
    const searchValue = searchRef.current.value.toLowerCase();
    const searchResults = issueTracker.filter((items) =>
        items.title.toLowerCase().includes(searchValue)
      );
      setFilterIssue(searchResults);
  }

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
            ref={titleRef}
            className="mt-3 mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
            placeholder="Title..."
            required
          />
          <label htmlFor="issueAuthor">Author</label>
          <select
            id="issueAuthor"
            ref={authorRef}
            class="mt-3 mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
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
            ref={severityRef}
            className="mt-3 mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
          >
            <option selected>Choose severity...</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <label htmlFor="issueDescription">Description</label>
          <textarea
            id="issueDescription"
            rows="4"
            ref={descriptionRef}
            class="block mt-3 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500   "
            placeholder="Write your thoughts here..."
          ></textarea>
          <div className=" w-full inline-block mb-4 mt-4 ">
            <button
              className=" float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-300 ease-linear"
              onClick={addIssueTracker}
            >
              Add
            </button>
          </div>
        </form>
        {/* Select List */}
        <div className="border-t">
          <div>
            <div className="flex justify-between items-center mt-5">
              <h2 className="text-[20px] font-bold">List Issue</h2>
              <div class="flex px-4 py-3 rounded-md border-2 border-blue-500 overflow-hidden max-w-md font-[sans-serif]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 192.904 192.904"
                  width="16px"
                  class="fill-gray-600 mr-3 rotate-90"
                >
                  <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                </svg>
                <input
                  type="email"
                  placeholder="Search Something..."
                  className="w-full outline-none bg-transparent text-gray-600 text-sm"
                  ref={searchRef}
                  onChange={searchIssue}
                />
              </div>
            </div>
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
                ref={selectAuthorRef}
                onChange={selectAuthor}
                class="mt-3 mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5   "
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
        {(filterIssue.length > 0 ? filterIssue : issueTracker).map((items) => {
          return (
            <div
              className="max-w-full mt-3 p-6 bg-white border border-gray-200 rounded-lg shadow  "
              key={items.id}
            >
              <span
                className={`
              ${
                items.severity === "low"
                  ? "bg-blue-500"
                  : items.severity === "medium"
                  ? "bg-yellow-300"
                  : "bg-red-500"
              }
              text-xs font-medium me-2 px-2.5 py-0.5 rounded
                `}
              >
                {items.severity}
              </span>
              <div className="flex gap-3 items-center mb-2 mt-1">
                <h5 className="text-2xl font-bold tracking-tight ">
                  {items.title}
                </h5>
                <span
                  className={`${
                    items.status === "new"
                      ? "bg-green-300 text-green-800"
                      : "bg-gray-300 text-gray-800"
                  }
                text-xs font-bold me-2 px-2 py-0.5 rounded`}
                >
                  {items.status}
                </span>
              </div>
              <p className="mb-3 font-normal ">{items.description}</p>
              <div className="flex justify-between ">
                <div className="flex items-center gap-4">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="Rounded avatar"
                  ></img>
                  <p className="text-xl">{items.author}</p>
                </div>
                <div>
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 duration-300 ease-linear"
                    onClick={() => closeIssueTracker(items.id)}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  duration-300 ease-linear"
                    onClick={() => deleteIssueTracker(items.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
