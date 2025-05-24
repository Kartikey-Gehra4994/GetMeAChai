import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-white h-[44vh] gap-6 ">
        <div className="font-bold text-4xl md:text-5xl flex gap-2">Buy Me a Chai <span><img className="w-10 mt-2" src="/tea.gif" alt="" /></span> </div>
        <p className="text-center">A croudfunding platform for creator. Get funded by your fans and followers. start now!</p>
        <p className="text-center">A place where your fans can buy you a chai. Unleash the power of your fans and get your projects funded.</p>
        <div >
<Link href={"/login"}>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
</Link>
<Link href={"/about"}>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
</Link>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto md:py-32 py-10">
        <h2 className="text-3xl font-bold text-center mb-10 md:mb-14">Learn more about us</h2>
        <div className="md:flex gap-5 justify-around space-y-10">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full  p-3" width={88} src="/man.gif" alt="" />
            <p className="font-bold">Fans want to help</p>
            <p className="w-[220px] text-center">Your Fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full  p-3" width={88} src="/coin.gif" alt="" />
            <p className="font-bold">Fans want to help</p>
            <p className="w-[220px] text-center">Your Fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full  p-2" width={88} src="/group.gif" alt="" />
            <p className="font-bold">Fans want to help</p>
            <p className="w-[220px] text-center">Your Fans are available for you to help you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto md:py-32 py-10">
        <h2 className="text-3xl font-bold text-center mb-14">your Fans can buy you a Chai</h2>
        <div className="flex justify-center">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/QtaorVNAwbI?si=jauMTF4_2lHSAI7P" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </>
  );
}

