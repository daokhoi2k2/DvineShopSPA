import ImgFallBack from "designs/ImgFallback";

const Affiliate = () => {
  return (
    <>
      <div className="text-2xl text-center font-bold">
        The system is maintenancing
      </div>
      <ImgFallBack isStaticImg={true} src="maintance.jpg" alt="maintance" />
    </>
  );
};

export default Affiliate;
