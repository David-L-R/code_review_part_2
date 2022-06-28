import "./card.css";

export const Card = (props) => {
  return (
    <div className='card'>
      <img src='https://www.w3schools.com/howto/img_avatar2.png' alt='Avatar' />
      <div className='container'>
        <h4>User Name</h4>
        <p>User job</p>
        <p>Seniority level: SENIORITY</p>
        <p>Hourly rate: RATE</p>
        <p>Languages:</p>
        {/* {props.tags.map((tag) => (
          <div className='tag'>{tag}</div>
        ))} */}
        <footer>
          <button className='primary-button'>Book Now</button>
          <button className='secondary-button'>Full profile</button>
        </footer>
      </div>
    </div>
  );
};
