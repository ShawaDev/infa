import './Header.css';

function Header() {
  return (
    <header>
        <h1>Zabey.kz</h1>
        <br></br>
        <nav>
            <a href="http://localhost:3000">Home</a>
            <a href="http://localhost:3000/about">About</a>
            <a href="http://localhost:3000/contacts">Contacts</a>
            <a href='http://localhost:3000/sign-up'>Registration</a>
            <a href='http://localhost:3000/sign-in'>Log In</a>
        </nav>
    </header>
    
  );
}

export default Header;