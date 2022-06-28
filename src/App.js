import { useEffect, useState } from "react";
import { Navbar, Page, Content, Card } from "./components";
import { fetchFreelancers } from "./api/fetch";
import "./App.css";
import { content1 } from "./text/main_page";

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
          <h1>Find a coding hero</h1>
          <h2>Our heroes, your budget!</h2>
          <p>{content1}</p>
          <div className='card-container'>
            {/* TODO: iterate over users */}
            {/* TODO: For each user return <Card /> */}
            {/* TODO: <Card /> should have all its content dynamically from the user data */}
          </div>
        </Content>
      </Page>
    </div>
  );
}

export default App;
