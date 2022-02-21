import React from 'react';

function Events() {
  return (
    <div className="App">
      <br />
      <h2 className="display-6">Welcome to the Events page</h2>
      <br />
      <select
        defaultValue={'DEFAULT'}
        className="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
      >
        <option value="DEFAULT" disabled>
          Choose event
        </option>
        <option value="1">Посетить семейного врача</option>
        <option value="2">Посетить терапевта</option>
      </select>
    </div>
  );
}

export default Events;
