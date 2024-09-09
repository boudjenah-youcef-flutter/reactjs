import { IUserData } from "../interface";

interface IProps {
  user: IUserData;
}
const Userdatails = ({ user }: IProps) => {
  return (
    <div>
      <h1>wellcom {user.name} </h1>
      <h3> your Email : {user.email} </h3>
      <h3>your password : {user.password} </h3>
    </div>
  );
};

export default Userdatails;
