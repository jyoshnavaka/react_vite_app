import { useState } from "react";
import "./form.css";

export const TableFormUpdate = () => {
  const [data, setData] = useState([]);
  const obj = {
    update: false,
    home: false,
    editIndex: null, // Track the index of the item being edited
  };
  const [display, setDisplay] = useState(obj);
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target)
    console.log(name,value)
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (display.update) {
      const updatedData = data.map((item, index) =>
        index === display.editIndex ? formData : item
      );
      setData(updatedData);
      setDisplay({ ...display, update: false, editIndex: null });
    } else {
      setData([...data, formData]);
    }
    setFormData({ id: "", username: "", password: "" });
    toggleModal();
  };

  const OnDisplay = () => {
    setDisplay((prevDisplay) => ({
      ...prevDisplay,
      home: true,
    }));
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const update = (index) => {
    const item = data[index];
    setFormData(item);
    setDisplay({ ...display, update: true, editIndex: index });
    toggleModal();
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column", width: "20%" }}>
          <h3>Logo</h3>
          <h4>
            <button onClick={OnDisplay}>Homes</button>
          </h4>
          <h4>
            <button>About</button>
          </h4>
          <h4>
            <button>Contacts</button>
          </h4>
        </div>

        <div style={{ width: "80%" }}>
          <p>Display</p>
          <div style={{ width: 300, height: 400 }}>
            <button onClick={toggleModal} className="btn-modal">
              Add
            </button>
            {display.home && (
              <table>
                <thead>
                  <tr>
                    <td>ID</td>
                    <td>Username</td>
                    <td>Password</td>
                    <td>Actions</td>
                  </tr>
                </thead>
                <tbody>
                  {data.map((each, index) => (
                    <tr key={index}>
                      <td>{each.id}</td>
                      <td>{each.username}</td>
                      <td>{each.password}</td>
                      <td>
                        <button onClick={() => update(index)}>Update</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <label>Enter ID:</label>
              <input
                type="text"
                name="id"
                value={formData.id}
                onChange={handleInputChange}
              />
              <br />
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
              <br />
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <br />
              <input type="submit" />
              <button className="close-modal" onClick={toggleModal}>
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
