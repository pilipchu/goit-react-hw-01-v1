import { HiUser } from "react-icons/hi";

export const UserMenu = ({ name }) => {
  return (
    <div>
      <p className="pege"><HiUser className="my-icon" size="150" color="red"/> {name}</p>
    </div>
  );
};