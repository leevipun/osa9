interface HeaderProps {
  name: string;
}

const Header = (header: HeaderProps): JSX.Element => {
  return <h1>{header.name}</h1>;
};

export default Header;
