import logo from "@/assets/logo.png";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-2 sm:p-3">
      <div className="max-w-7xl mx-auto">
        <img 
          src={logo} 
          alt="Lead Connect by DaSilvamedia" 
          className="h-48 sm:h-64 w-auto"
        />
      </div>
    </header>
  );
};
