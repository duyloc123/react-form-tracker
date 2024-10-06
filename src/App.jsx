import React from 'react';

function App() {
  const [trackers, setTrackers] = React.useState([
    {
      id: 1,
      title: 'learn react',
      description: 'lorme ....',
      status: 'new', // new | done
      severity: 'low', // low | medium | hard
      author: 'tony'
    }
  ]);

  function onSubmit(e) {
    e.preventDefault();
    const item = {
      id: Date.now(),
      title: 'learn mock',
      description: 'learn mock ....',
      status: 'new', // new | done
      severity: 'low', // low | medium | hard
      author: 'hao'
    }

    // add item
    // setTrackers(prevState => [...prevState, item])
    setTrackers((prevState) => {
      return [...prevState, item]
    })
  }

  function deleteItem(trackerId) {
    const newTrackers = [...trackers].filter(item => item.id !== trackerId); // shallow clone
    setTrackers(newTrackers);
  }

  return (
    <div className="container mx-auto m-4">
      <h1 className="text-xl font-bold text-center"> React Issue Tracker </h1>

      <form onSubmit={onSubmit}>
        <div className="mb-5">
          <label for="title" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
          <input type="title" id="title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
          focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
        </div>
        <div className="mb-5">
          <label for="author" className="block mb-2 text-sm font-medium text-gray-900">Author</label>
          <select id="author" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
          block w-full p-2.5">
            <option value="tony">Tony</option>
            <option value="hoa">Hoa</option>
            <option value="loc">Loc</option>
          </select>  
        </div>
        <div className="mb-5">
          <label for="severity" className="block mb-2 text-sm font-medium text-gray-900">Severity</label>
          <select id="severity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
          block w-full p-2.5">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select> 
        </div>
        <div className="mb-5">
          <label for="description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
          <textarea id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 
          focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
        </div>
        <div className="text-right">
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
          rounded-lg text-sm px-5 py-2.5 text-center">Add</button>
        </div>
      </form>

      <div className="mt-4">
        {trackers.map(item => {
          return (
            <div key={item.id} className="w-full p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{item.severity}</span>
              <div className="flex items-center mb-2">
                <h5 className="mr-2 text-2xl font-bold tracking-tight text-gray-900">{item.title}</h5>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{item.status}</span>
              </div>
              <p className="mb-5 font-normal text-gray-700">
                {item.description}
              </p>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <img className="w-10 h-10 rounded-full mr-2" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar" />
                  <div>{item.author}</div>
                </div>
                <div>
                  <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 
                  focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Close
                  </button>
                  <button 
                    onClick={() => deleteItem(item.id)}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 
                  focus:ring-4 focus:outline-none focus:ring-red-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )
        })}
       
      </div>
    </div>
  )
}

export default App
