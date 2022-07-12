import "./App.css";
import { useState } from "react";
import contactData from "./contacts.json";

function App() {
  const size = 45;
  // const contactList = contactData.slice(0, size);
  const [contacts, setContacts] = useState(contactData.slice(15, size));

  const addContact = () => {
    const newContact =
      contactData[Math.floor(Math.random() * contactData.length)];
    setContacts([newContact, ...contacts]);
  };

  const sortByPopularity = () => {
    let sortedByPopularity = contacts.slice().sort((a, b) => {
      return a.popularity - b.popularity;
    });
    setContacts([...sortedByPopularity]);
  };

  const sortByName = () => {
    let sortedByName = contacts.slice().sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setContacts([...sortedByName]);
  };

  const deleteHandler = (id) => {
    console.log(id);
    //write the code here
  };

  return (
    <>
      <div className="btn">
        <button onClick={addContact}>ADD Random Contact</button>
        <button onClick={sortByName}>Sort by name</button>
        <button onClick={sortByPopularity}>Sort by popularity</button>
      </div>

      <div className="App">
        <table>
          <thead>
            <tr>
              <th>picture</th>
              <th>name</th>
              <th>_popularity_</th>
              <th>-Won an Oscar-</th>
              <th>_Won an Emmy_</th>
              <th>DELETE</th>
            </tr>
          </thead>

          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    width="100px"
                    height="150px"
                  ></img>
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar ? "🏆" : ""}</td>
                <td>{contact.wonEmmy ? "🏆" : ""}</td>
                <button onClick={() => deleteHandler(contact.id)}>
                  Delete
                </button>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default App;
