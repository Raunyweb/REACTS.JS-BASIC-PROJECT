import React, { useState } from 'react';

function StudentManager() {
  const [students, setStudents] = useState([]); // The list of students
  const [name, setName] = useState("");          // The name you are typing

  const addStudent = () => {
    if (name.trim() !== "") {
      setStudents([...students, name]); // Adds the new name to the array
      setName("");                      // Clears the input box
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Student List</h2>
      
      {/* 1. The Input Field */}
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter student name"
      />

      {/* 2. The Add Button */}
      <button onClick={addStudent}>Add Student</button>

      {/* 3. The Output List */}
      <ul>
        {students.map((s, index) => (
          <li key={index}>{s}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentManager;