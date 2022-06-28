import "./card.css";

export const Card = (props) => {
  return (
    <div className='card'>
      {/* TODO: repalce hard coded avatar with user's avatar */}
      <img src='https://www.w3schools.com/howto/img_avatar2.png' alt='Avatar' />
      <div className='container'>
        {/* TODO: replace user name with the actual user name */}
        <h4>User Name</h4>
        {/* TODO: replace user job with the user's title */}
        <p>User job</p>
        {/* TODO: replace SENIORITY with user's seniority */}
        <p>Seniority level: SENIORITY</p>
        {/* TODO: replace RATE with user's hourlyRate */}
        <p>Hourly rate: RATE</p>
        <p>Languages:</p>
        {/* TODO: iterate over tags to show all of them */}
        {/* TODO: each tag should have a tag class */}
        <footer>
          <button className='primary-button'>Book Now</button>
          <button className='secondary-button'>Full profile</button>
        </footer>
      </div>
    </div>
  );
};
