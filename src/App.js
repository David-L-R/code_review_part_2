import { useEffect, useState } from "react";
import { Navbar, Page, Content, Card } from "./components";
import { fetchFreelancers } from "./api/fetch";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      setUsers(await fetchFreelancers());
      try {
      } catch (err) {
        console.log(err);
      }
    };

    fetch();
  }, []);
  return (
    <div className='App'>
      <Page>
        <Navbar />
        <Content>
          <h1>Hello world</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui libero
            totam blanditiis saepe alias at iste nam voluptatum vel magni
            similique aut, et corporis, nulla sint eveniet. Laudantium, eveniet
            incidunt?
          </p>
          <div className='card-container'>
            {users.map((user) => (
              <Card />
            ))}
          </div>
        </Content>
      </Page>
    </div>
  );
}

export default App;
