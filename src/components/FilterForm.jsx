import React from 'react'

function FilterForm({ filterIssue, orderBy }) {
  return (
    <>
      <div className="flex items-center mt-6">
        <h3 className="mr-[100px]">Filter:</h3>
        <button 
          onClick={() => filterIssue('ALL')}
          class="mr-3 w-[70px] h-[40px] bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded duration-200 ease-linear"
        >
          All
        </button>
        <button 
          onClick={() => filterIssue('NEW')}
          class="mr-3 bg-[#28A745] hover:bg-[#218838] text-white  py-2 px-4 rounded duration-200 ease-linear"
        >
          Open
        </button>
        <button 
          onClick={() => filterIssue('DONE')}
          class="bg-[#1DA1B8] hover:bg-[#177D8F] text-white py-2 px-4 rounded duration-200 ease-linear"
        >
          Close
        </button>
      </div>
      <div className="flex items-center mt-4">
        <h3 className="mr-[72px]">Order by:</h3>
        <select
          id="issueAuthor"
          defaultValue={orderBy}
          onChange={e => orderBy(e.target.value)}
          class="mt-3 mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5   "
        >
          <option selected>Choose...</option>
          <option value="asc">Asceding</option>
          <option value="desc">Decreasing</option>
        </select>
      </div>
    </>
  )
}

export default FilterForm