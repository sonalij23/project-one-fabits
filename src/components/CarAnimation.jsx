import sceneryImg from "../assets/scenery.svg";
import car from "../assets/car.svg";




const CarAnimation = () => {
  return (
    <div className="relative overflow-hidden md:h-screen " >
      <div className="absolute top-10 left-5 text-bay-of-many">
        <h1 className="text-2xl font-semibold">Get started with Fabits</h1>
        <p className="py-1 text-sm">
          Answer a few questions to begin onboarding
        </p>
      </div>
      <img
        className="w-full h-full rounded-t-3xl md:rounded-t-none md:object-cover"
        src={sceneryImg}
        alt="scenery"
      />

      <img
        className={`absolute car-move w-24 h-auto top-[65%] md:top-[75%] `}
        src={car}
        alt="car"
      />
    </div>
  );
};

export default CarAnimation;
