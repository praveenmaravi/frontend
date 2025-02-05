import React, { useState } from 'react';
import { Button, Modal, InputField, SelectDropdown, DatePicker } from '../ui'; // Assuming reusable components

const TaskScheduler = () => {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [taskType, setTaskType] = useState('');
  const [taskDate, setTaskDate] = useState(null);
  const [taskTime, setTaskTime] = useState('');
  const [interval, setInterval] = useState('Once'); // e.g., Once, Daily, Weekly
  
  // Handle adding new task
  const addTask = () => {
    if (!taskName || !taskType || !taskDate || !taskTime) {
      alert('Please fill in all the fields!');
      return;
    }

    const newTask = {
      name: taskName,
      type: taskType,
      date: taskDate,
      time: taskTime,
      interval,
    };

    setTasks([...tasks, newTask]);
    resetForm();
    setShowModal(false);
  };

  // Reset form fields
  const resetForm = () => {
    setTaskName('');
    setTaskType('');
    setTaskDate(null);
    setTaskTime('');
    setInterval('Once');
  };

  return (
    <div>
      <h2>Task Scheduler</h2>
      
      <Button onClick={() => setShowModal(true)}>Schedule New Task</Button>

      {/* Task List */}
      <div>
        {tasks.length === 0 ? (
          <p>No tasks scheduled.</p>
        ) : (
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                <strong>{task.name}</strong><br />
                Type: {task.type}<br />
                Date: {task.date} at {task.time} <br />
                Interval: {task.interval}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Modal to add task */}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h3>New Task</h3>
          <InputField 
            label="Task Name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          
          <SelectDropdown 
            label="Task Type"
            options={['Message', 'Reminder', 'Workflow']}
            value={taskType}
            onChange={(e) => setTaskType(e.target.value)}
          />

          <DatePicker 
            label="Task Date"
            selectedDate={taskDate}
            onChange={(date) => setTaskDate(date)}
          />
          
          <InputField 
            label="Time"
            type="time"
            value={taskTime}
            onChange={(e) => setTaskTime(e.target.value)}
          />

          <SelectDropdown 
            label="Repeat Interval"
            options={['Once', 'Daily', 'Weekly']}
            value={interval}
            onChange={(e) => setInterval(e.target.value)}
          />

          <Button onClick={addTask}>Save Task</Button>
          <Button onClick={() => setShowModal(false)}>Cancel</Button>
        </Modal>
      )}
    </div>
  );
};

export default TaskScheduler;
