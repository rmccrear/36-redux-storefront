import './Header.scss'

const Header = (props) => {
  return (
    <div className="header">
      <h1>{ props.shopName }</h1>
    </div>
  );
}

export default Header;