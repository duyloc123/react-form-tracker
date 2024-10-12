import React from 'react'

function TodoForm({ addIssueTracker }) {
  const [form, setForm] = React.useState({
    title: '',
    author: '',
    severity: '',
    description: '',
    orderyBy: '',
    searchBy: ''
  })

  function onChangeForm(e) {
    const { name, value } = e.target;
    setForm(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  function submit(e) {
    e.preventDefault();
    const { title, author, severity, description } = form;
    const item = {
      // id: issueTracker.length + 1,
      id: Date.now(),
      title,
      author,
      severity,
      description,
      status: "new",
    };
    addIssueTracker(item);
  }

  return (
    <form className="mt-[50px]" id="issueTracker">
      <label htmlFor="issueTitle">Title</label>
      <input
        type="text"
        id="issueTitle"
        name="title"
        value={form.title}
        className="mt-3 mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
        placeholder="Title..."
        required
        onChange={onChangeForm}
      />

      <label htmlFor="issueAuthor">Author</label>
      <select
        id="issueAuthor"
        name="author"
        value={form.author}
        onChange={onChangeForm}
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
        name="severity"
        value={form.severity}
        onChange={onChangeForm}
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
        name="description"
        value={form.description}
        onChange={onChangeForm}
        class="block mt-3 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500   "
        placeholder="Write your thoughts here..."
      />

      <div className=" w-full inline-block mb-4 mt-4 ">
        <button
          className=" float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-300 ease-linear"
          onClick={submit}
        >
          Add
        </button>
      </div>
    </form>
  )
}

export default TodoForm