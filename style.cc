body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 50px;
}

.wrapper {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  width: 320px;
}

h1 {
  text-align: center;
  margin-bottom: 15px;
}

.task-input {
  display: flex;
  gap: 10px;
}

#new-task {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

#add-btn {
  background: #28a745;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
}

#add-btn:hover {
  background: #218838;
}

ul {
  list-style: none;
  padding: 0;
  margin-top: 15px;
}

li {
  background: #fafafa;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

li.done span {
  text-decoration: line-through;
  color: gray;
}

li button {
  background: red;
  color: white;
  border: none;
  padding: 5px 8px;
  border-radius: 4px;
  cursor: pointer;
}

li button:hover {
  background: darkred;
}
