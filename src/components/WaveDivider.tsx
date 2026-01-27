const WaveDivider = () => {
  return (
    <div className="w-full py-8 flex justify-center">
      <svg 
        viewBox="0 0 800 20" 
        className="w-full max-w-4xl h-5 text-border"
        preserveAspectRatio="none"
      >
        <path 
          d="M0,10 Q25,0 50,10 T100,10 T150,10 T200,10 T250,10 T300,10 T350,10 T400,10 T450,10 T500,10 T550,10 T600,10 T650,10 T700,10 T750,10 T800,10" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
