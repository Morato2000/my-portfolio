function HeroGradient() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-40 bg-green-500 blur-3xl opacity-60 animate-pulse z-[-1]"></div>
      <div className="absolute top-[150px] md:top-[250px] lg:top-[300px]  left-[100px] md:left-0 w-1/2 h-50 bg-yellow-500 blur-3xl opacity-60 animate-pulse z-[-1]"></div>
    </>
  );
}

export default HeroGradient;
