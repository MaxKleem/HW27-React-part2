import React from 'react';

function Doctors() {
  return (
    <div className="App">
      <br />
      <h2 className="display-6">Welcome to the Doctors page</h2>
      <br />
      <div className="row">
        <select
          defaultValue={'DEFAULT'}
          className="form-select form-select-lg mb-3"
          aria-label=".form-select-lg example"
        >
          <option value="DEFAULT" disabled>
            Choose a doctor
          </option>
          <option value="1">Семейный врач</option>
          <option value="2">Терапевт</option>n>
        </select>
      </div>
    </div>
  );
}

export default Doctors;
