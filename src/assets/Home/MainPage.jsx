import Navbar from "../Navbar/Navbar"

function MainPage({toggleFade}) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video 
      autoPlay
      loop
      muted
      className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/img/home/video.mp4" type="video/mp4"/>
      </video>

      <div className="absolute top-0 left-0 h-full w-full bg-black/50"></div>

      <div className="relative flex flex-col items-center justify-center h-full z-5 lg:p-7">
          <Navbar {...{toggleFade}} />
          <img  className="h-full" src="/svg/the-grand.svg" alt="The grand logo" />
      </div>
    </section>
  )
}

export default MainPage