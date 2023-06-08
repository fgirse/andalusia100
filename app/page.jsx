import Feed from "@components/Feed";

const Home = () => (
 
 <>
  
 <section className='bg-[url("assets/images/andalusiaHero.png")] bg-cover bg-non-repeatw-full flex-center flex-col'>
  <div className='bg-black/20 rounded-xl'>
    <h1 className='head_text text-center'>
      
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Andalusien  </span>
    </h1>
    <p className='desc text-center'>
      erfülle ihn Dir
    </p>

    </div>
  </section>
  <Feed />
  </>
);

export default Home;
