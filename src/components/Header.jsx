import { MenuIcon } from "@heroicons/react/outline";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";

function Header() {
    const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithPopup(provider)
      .then(() => navigate("/channels"))
      .catch((error) => alert(error.message));
  };

  return (
    <header className="bg-discord_blue flex items-center justify-between py-4 px-6">
      <a href="/">
        <h2 className="text-white text-2xl font-bold">DISCORD</h2>
      </a>
      <div className="hidden lg:flex space-x-6 ">
        <a className="link">Download</a>
        <a className="link">Why Discord?</a>
        <a className="link">Nitro</a>
        <a className="link">Safety</a>
        <a className="link">Support</a>
      </div>
      <div className="flex space-x-4">
        <button
          className="bg-white p-2 rounded-full text-xs md:text-sm px-4 focus:outline-none hover:shadow-2xl hover:text-discord_blurple transition duration-200 ease-in-out whitespace-nowrap font-medium"
        onClick={!user ? signIn : () => navigate("/channels")}
        >
          {!user ? "Login" : "Open Discord"}
        </button>
        <MenuIcon className="h-9 text-white cursor-pointer lg:hidden" />
      </div>
    </header>
  );
}

export default Header;
