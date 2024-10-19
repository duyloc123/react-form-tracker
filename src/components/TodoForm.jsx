import React from 'react';
import { getFieldError, hasErrors } from '../utils/getFieldError';

function TodoForm({ addIssueTracker }) {
  const [form, setForm] = React.useState({
    title: '',
    author: '',
    severity: '',
    description: '',
    orderyBy: '',
    searchBy: ''
  })
  const [showError, setShowError] = React.useState(false);

  function onChangeForm(e) {
    const { name, value } = e.target;
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  function submit(e) {
    e.preventDefault();

    if(hasErrors()) {
      setShowError(true);
      return;
    }

    const { title, author, severity, description } = form;
    const item = {
      id: Date.now(),
      title,
      author,
      severity,
      description,
      status: "new",
    };
    addIssueTracker(item);
    
    setForm({
      title: '',
      author: '',
      severity: '',
      description: '',
      orderyBy: '',
      searchBy: ''
    });
    setShowError(false);
  }

  return (
    <form className="mt-[50px]" id="issueTracker">
      <label htmlFor="issueTitle">Title</label>
      <input
        type="text"
        id="issueTitle"
        name="title"
        value={form.title}
        className="mt-3 mb-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Title..."
        required
        onChange={onChangeForm}
      />
      {showError && getFieldError('title', form.title) && 
        <p className="text-red-500 text-xs mb-3">{getFieldError('title', form.title)}</p>}

      <label htmlFor="issueAuthor">Author</label>
      <select
        id="issueAuthor"
        name="author"
        value={form.author}
        onChange={onChangeForm}
        className="mt-3 mb-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="">Choose author...</option>
        <option value="tony">Tony</option>
        <option value="loc">Loc</option>
        <option value="hoa">Hoa</option>
      </select>
      {showError && getFieldError('author', form.author) && 
        <p className="text-red-500 text-xs mb-3">{getFieldError('author', form.author)}</p>}

      <label htmlFor="issueSeverity">Severity</label>
      <select
        id="issueSeverity"
        name="severity"
        value={form.severity}
        onChange={onChangeForm}
        className="mt-3 mb-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="">Choose severity...</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      {showError && getFieldError('severity', form.severity) && 
        <p className="text-red-500 text-xs mb-3">{getFieldError('severity', form.severity)}</p>}

      <label htmlFor="issueDescription">Description</label>
      <textarea
        id="issueDescription"
        rows="4"
        name="description"
        value={form.description}
        onChange={onChangeForm}
        className="block mt-3 mb-1 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Write your thoughts here..."
      />
      {showError && getFieldError('description', form.description) && 
        <p className="text-red-500 text-xs mb-3">{getFieldError('description', form.description)}</p>}

      <div className="w-full inline-block mb-4 mt-4">
        <button
          className="float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-300 ease-linear"
          onClick={submit}
        >
          Add
        </button>
      </div>
    </form>
  )
}

export default TodoForm