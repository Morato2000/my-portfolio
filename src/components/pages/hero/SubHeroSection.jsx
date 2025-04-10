function SubHeroSection() {
  return (
    <>
      <div
        className="w-full border-y border-green-400 text-dark_text 
flex flex-col md:flex-row justify-around uppercase text-4xl md:text-2xl lg:text-4xl 
py-8 items-center gap-y-4 md:gap-x-12"
      >
        <p className="hidden md:block">Team Player</p>
        <p className="hidden md:block">Problem Solver</p>
        <p className="">Creative Thinker</p>
      </div>
    </>
  );
}
export default SubHeroSection;
