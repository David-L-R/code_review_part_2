import "./card.css";

export const Card = ({
  avatar,
  name,
  title,
  description,
  seniority,
  hourlyRate,
  tags,
}) => {
  return (
    <div className='card'>
      <img src={avatar} alt='Avatar' />
      <div className='container'>
        <h3>{name}</h3>
        <h4>{title}</h4>
        <p>{description.slice(0, 50)}...</p>
        <p>
          <b>Seniority level</b>: {seniority}
        </p>
        <p>
          <b>Hourly rate</b>: {hourlyRate}$
        </p>
        <p>
          <b>Languages</b>:
        </p>
        <div className='tags'>
          {tags.map((tag) => (
            <div className='tag'>{tag}</div>
          ))}
        </div>
        <footer>
          <button className='primary-button'>Book Now</button>
          <button className='secondary-button'>Full profile</button>
        </footer>
      </div>
    </div>
  );
};
