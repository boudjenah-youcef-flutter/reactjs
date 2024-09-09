import { IUserData } from "../../interface";
import "./login.scss";
import { ChangeEvent } from "react";

interface IProps {
  userdata: IUserData;

  setlogin: (val: boolean) => void;
  islogdin: boolean;
  setuserdata: (userData: IUserData) => void;
}

const LoginForm = ({ userdata, setuserdata, setlogin, islogdin }: IProps) => {
  const onchangehandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setuserdata({
      ...userdata,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form Submitted:", userdata);
    setlogin(!islogdin);
  };

  return (
    <form className="wrapp-form" onSubmit={handleSubmit}>
      <div className="wrapp-input">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={userdata.name}
          onChange={onchangehandler}
          required
        />
      </div>
      <div className="wrapp-input">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={userdata.email}
          onChange={onchangehandler}
          required
        />
      </div>

      <div className="wrapp-input">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={userdata.password}
          onChange={onchangehandler}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
