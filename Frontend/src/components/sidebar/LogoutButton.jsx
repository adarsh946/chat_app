import { BiLogOut } from "react-icons/bi";
import { useLogOut } from "../../hooks/useLogOut";

const LogoutButton = () => {
  const { loading, logOut } = useLogOut();
  return (
    <div className="mt-auto">
      {!loading ? (
        <BiLogOut
          className="w-6 h-6 text-white cursor-pointer"
          onClick={logOut}
        />
      ) : (
        <span className="loading loading-spinner "> </span>
      )}
    </div>
  );
};

export default LogoutButton;
