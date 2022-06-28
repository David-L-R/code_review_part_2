import { useEffect, useState } from "react";
import { Navbar, Page, Content, Card } from "./components";
import { fetchFreelancers } from "./api/fetch";
import "./App.css";
import { content1, content2 } from "./text/main_page";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        setUsers(await fetchFreelancers());
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
          <div className='text'>
            <h1>Find a coding hero</h1>
            <h2>Our heroes, your budget!</h2>
            <p>{content1}</p>
          </div>
          <div className='card-container'>
            {users.map((user) => {
              const {
                id,
                avatar,
                name,
                title,
                description,
                seniority,
                hourlyRate,
                tags,
              } = user;
              return (
                <Card
                  id={id}
                  avatar={avatar}
                  name={name}
                  title={title}
                  description={description}
                  seniority={seniority}
                  hourlyRate={hourlyRate}
                  tags={tags}
                />
              );
            })}
          </div>
        </Content>
      </Page>
    </div>
  );
}

export default App;
