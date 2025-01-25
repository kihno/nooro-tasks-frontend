import RocketIcon from "@mui/icons-material/Rocket"

const Header = () => {
  return (
    <header className="w-full bg-[#0d0d0d]">
      <h1 className="font-sans text-5xl font-black text-center p-20">
        <RocketIcon className="text-4xl text-[--text]" />
      {/* <span className="material-symbols-outlined font-lg">
        rocket
      </span> */}
        <span className="text-[color:--text]"> Todo </span>
        <span className="text-[color:--altText]">App</span>
      </h1>
    </header>
  );
}

export default Header;
