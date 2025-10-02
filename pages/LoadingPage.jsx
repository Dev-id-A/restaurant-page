function LoadingPage() {
  return (
    <main className="flex justify-center items-center h-screen w-screen bg-[rgba(122,78,23,1)]">

    <style>{`
    @keyframes loadingAnimation{
      0% {
        transform: scale(1);
        filter: drop-shadow(0 0 30px rgba(0,0,0,1));
        opacity 0.5;
      }       
      50% {
        transform: scale(1.2);
        filter: drop-shadow(0 0 50px rgba(0,0,0,1));
        opacity: 1
      }
      100% {
        transform: scale(1);
        filter: drop-shadow(0 0 30px rgba(0,0,0,1));
        opacity: 0.5;
      }
    }

    .loading-animation {
        animation: loadingAnimation 2s ease-in-out infinite;
      }`}</style>

        <img src="svg/crown.svg" alt="Dev-id-logo" 
        className="size-50 sm:size-100 loading-animation" />
    </main>
  )
}

export default LoadingPage