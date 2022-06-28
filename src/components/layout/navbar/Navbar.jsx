import "./navbar.css";

export const Navbar = ({}) => {
  return (
    <div className='navbar'>
      <div className='logo'>CodeLancers</div>
      <ul className='links'>
        <li className='active'>
          <a href='#'>home</a>
        </li>
        <li>
          <a href='#'>filter</a>
        </li>
        <li>
          <a href='#'>login</a>
        </li>
      </ul>
    </div>
  );
};
