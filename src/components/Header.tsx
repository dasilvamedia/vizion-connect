import logo from "@/assets/logo.png";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        <img 
          src={logo} 
          alt="Lead Connect by DaSilvamedia" 
          className="h-12 sm:h-16 w-auto"
        />
      </div>
    </header>
  );
};
