
const Banner = () => {
    return (
      
            <div className="hero h-[450px] max-w-7xl mx-auto  px-8 py-8  bg-base-200  ">
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <img src="/images/banner.jpg" className="rounded-lg  h-80 ml-36" />
    <div className="mr-12">
      
      <p className="py-6 font-bold text-5xl space-x-5 w-[500px]">Books to freshen <br /> up your bookshelf</p>
      <button className="btn bg-[#23BE0A] text-white">View the list</button>
    </div>
  </div>
</div>
       
    );
};

export default Banner;