import "./App.css";
import { useState } from "react";
import contactData from "./contacts.json";

// const contactsData = [
//   {
//     name: "Idris Elba",
//     pictureUrl:
//       "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
//     popularity: 11.622713,
//     id: "11731993-0604-4bee-80d5-67ad845d0a38",
//     wonOscar: false,
//     wonEmmy: false,
//   },
//   {
//     name: "Johnny Depp",
//     pictureUrl:
//       "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
//     popularity: 15.656534,
//     id: "7dad00f7-3949-477d-a7e2-1467fd2cfc06",
//     wonOscar: false,
//     wonEmmy: false,
//   },
//   {
//     name: "Monica Bellucci",
//     pictureUrl:
//       "https://image.tmdb.org/t/p/w500/qlT4904d8oi2NIs28RrgnIZDFZB.jpg",
//     popularity: 16.096436,
//     id: "0ad5e441-3084-47a1-9e9b-b917539bba71",
//     wonOscar: false,
//     wonEmmy: false,
//   },
//   {
//     name: "Gal Gadot",
//     pictureUrl:
//       "https://image.tmdb.org/t/p/w500/34kHAyBaBhq2kUrmhM15paEBuuI.jpg",
//     popularity: 10.049256,
//     id: "b497e3c4-50bb-4ae2-912f-eb36802c5bc2",
//     wonOscar: false,
//     wonEmmy: false,
//   },
//   {
//     name: "Ian McKellen",
//     pictureUrl:
//       "https://image.tmdb.org/t/p/w500/coWjgMEYJjk2OrNddlXCBm8EIr3.jpg",
//     popularity: 10.070132,
//     id: "0067ae32-97b6-4431-898e-eb1c10150abb",
//     wonOscar: false,
//     wonEmmy: false,
//   },
// ];

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
              <th>popularity</th>
              <th>Won an Oscar</th>
              <th>Won an Emmy</th>
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
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default App;
