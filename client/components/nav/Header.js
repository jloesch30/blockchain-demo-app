import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const redirectToLanding = () => {
    router.push("/");
  };
  return (
    <div className="fixed top-0 w-full bg-primaryFont py-5 shadow-lg z-10">
      <div className="flex flex-row justify-center items-center">
        <h1
          onClick={redirectToLanding}
          className="text-white text-2xl font-extrabold cursor-pointer"
        >
          BlockedIn
        </h1>
      </div>
    </div>
  );
};

export default Header;
