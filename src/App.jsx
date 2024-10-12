import React, { useRef } from "react";
import { dataTodos } from "./mocks/dataTodos";
import { sortByTitle } from "./utils/sortByTitle";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import FilterForm from "./components/FilterForm";

function App() {
  const searchRef = React.useRef(null);
  const [issueTracker, setIssueTracker] = React.useState(dataTodos);
  const [filterIssues, setFilterIssues] = React.useState([]);

  function addIssueTracker(item) {
    setIssueTracker((prevState) => {
      return [...prevState, item];
    });
  }

  function deleteIssueTracker(idIssue) {
    const newIssue = issueTracker.filter((items) => items.id !== idIssue);
    setIssueTracker(newIssue);
  }

  function closeIssueTracker(idIssue) {
    // const updateIssue = issueTracker.map((items) =>
    //   items.id === idIssue ? { ...items, status: "done" } : items
    // );
    // setIssueTracker(updateIssue);
    const newTrackers =  [...issueTracker];
    const indexTracker = newTrackers.findIndex(item => item.id === idIssue);

    if(indexTracker === -1) return;
    newTrackers[indexTracker].status = 'done';
    setIssueTracker(newTrackers);
  }

  function orderBy(value) {
    // if (orderByValueRef.current.value === "asc") {
    //   const ascIssue = [...issueTracker].sort((a, b) =>
    //     a.title.localeCompare(b.title)
    //   );
    //   setIssueTracker(ascIssue);
    // }
    // if (orderByValueRef.current.value === "desc") {
    //   const descIssue = [...issueTracker].sort((a, b) =>
    //     b.title.localeCompare(a.title)
    //   );
    //   setIssueTracker(descIssue);
    // }
    const newIssues = sortByTitle(issueTracker, value);
    setIssueTracker(newIssues);
  }

  function searchIssue() {
    const searchValue = searchRef.current.value.toLowerCase();
    const searchResults = issueTracker.filter((items) =>
        items.title.toLowerCase().includes(searchValue)
      );
    setIssueTracker(searchResults);
  }
  
  function filterIssue(type) {
    const issuesFiltered = [...issueTracker].filter((items) =>
      items.status.toLowerCase().includes(type.toLowerCase())
    );
    setFilterIssues(issuesFiltered);
  }

  return (
    <>
      <div className="container m-4 mx-auto">
        <h1 className="font-bold text-[30px] text-center uppercase">
          Issue Tracker
        </h1>
        {/* Form Issue */}
        
        <TodoForm 
          addIssueTracker={addIssueTracker}
        />

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
            
            <FilterForm 
              filterIssue={filterIssue}
              orderBy={orderBy}
            />
          </div>
          <div></div>
        </div>
        {/* Card Items */}

        <TodoList
          issueTracker={issueTracker}
          filterIssues={filterIssues}
          closeIssueTracker={closeIssueTracker}
          deleteIssueTracker={deleteIssueTracker}
        />
      
      </div>
    </>
  );
}

export default App;
