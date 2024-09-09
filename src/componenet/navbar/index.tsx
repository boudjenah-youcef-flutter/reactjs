import "./index.scss";

const styl = {
  listStyle: {
    textDecoration: "none",
    fontSize: "19px",
    color: "white",
    margin: "20px",
  },
  navstyl: {
    listStyle: "none",
    display: "flex",
    alignContent: "center",
    justifyContent: "space-between",
    borderRadius: "10px",
    background: "purple",
    padding: "10px",
  },
};

const Navbar = (props: {
  companynam: string;
  islogdin: boolean;
  setlogin: (val: boolean) => void;
}) => {
  return (
    <ul style={styl.navstyl}>
      <li>
        <a href="/" style={styl.listStyle}>
          {props.companynam.toUpperCase()}
        </a>
      </li>
      <li>
        <a href="/" style={styl.listStyle}>
          about us
        </a>
      </li>
      <li>
        <a href="/" style={styl.listStyle}>
          work
        </a>
      </li>
      <li>
        {" "}
        <button 
          onClick={() => props.setlogin(false)} 
          disabled={!props.islogdin}  // Disable the button when logged in
        >
          {props.islogdin ? 'Logout' : 'Login'}
        </button>
      </li>
    </ul>
  );
};

export default Navbar;
