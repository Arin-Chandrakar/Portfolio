import { GithubContributions } from "../components/githubcomp.jsx"
import { Football } from '../components/FootballModel.jsx'

export function Home(){
  return(
    <div>
      {/* <GridBackgroundDemo/> */}
      <NameIntro/>
      <AboutMe/>
      <Projects/>
      <GithubContributions/>
      <Skills/>
      <Footer/>
      {/* <ChessBoard/> */}
    </div>
  )
}

function NameIntro(){
  return(
    <div className='h-46 w-[900px] font-sans font-bold mx-auto mt-20 flex flex-row justify-between'>
      <div className='pl-5 mt-7 h-1.5'>
        <h1 className='text-5xl text-white'>Hi,I'm Arin</h1>
        <h2 className='text-white pt-1.5'>Learner, Dev and Culer.</h2>
      </div>
      {/* <FaceCircle/> */}
      <Football/>
    </div>
  )
}


function AboutMe(){
  
  return(
    <div className='w-[900px] mb-8  mx-auto group pl-5'>
      <h1 className='font-sans font-bold text-3xl text-white'>About</h1>
      <div className='prose font-sans font-medium text-base text-white opacity-80 text-pretty'>
        <p className='pt-2'>Things that I love: technology, books, football and barcelona.</p>
        <p className='pt-2'>Currently experimenting with web2 and web3</p>
        <p className='pt-2'>I love to learning. Currently trying to unclog my brain from all the brainrot.</p>
        <p className='pt-2'>Major chess enthusiast</p>
      </div>
    </div>
  )
}


function Projects(){
  return <div className='w-[900px] mx-auto pl-5 mb-8'>
    <div className='font-sans font-bold text-3xl text-white'>
      <h2>Projects</h2>
      <div className='pt-2 flex justify-between'>
        <div className='font-medium text-2xl'>
          <h2 id='ProjectH2'>WanderLust</h2>
          <div className='font-medium text-sm opacity-80 text-pretty'>
            <p>Airbnb reimagined into the indian culture</p>
          </div>
        </div>
        <div className='flex'>
          <a href="https://www.google.com/" target='_blank'>
            <img src="/internet.png" alt="" className='mx-2 w-8 h-8 rounded-full filter invert hover:cursor-pointer'/>
          </a>
          <a href="https://github.com/Arin-Chandrakar/wanderlust-main" target='_blank'>
            <img src="/github.png" alt="" className='mx-2 w-8 h-8 rounded-full brightness-1500 hover:cursor-pointer'/>
          </a>
        </div>
      </div>

      <div className='pt-2 flex justify-between'>
        <div className='font-medium text-2xl'>
          <h2 id='ProjectH2'>Flappy Bird</h2>
          <div className='font-medium text-sm opacity-80 text-pretty'>
            <p>Do i really need to describe this? Just play and enjoy the nostalgia</p>
          </div>
        </div>
        <div className='flex'>
          <a href="https://flappy-bird-six-steel.vercel.app/" target='_blank'>
            <img src="/internet.png" alt="" className='mx-2 w-8 h-8 rounded-full filter invert hover:cursor-pointer'/>
          </a>
          <a href="https://github.com/Arin-Chandrakar/Flappy-Bird" target='_blank'>
            <img src="/github.png" alt="" className='mx-2 w-8 h-8 rounded-full brightness-1500 hover:cursor-pointer'/>
          </a>
        </div>
      </div>

    </div>
  </div>
}

function Skills(){
  return <div>
    <div className='w-[900px] flex mx-auto pl-5 font-bold text-3xl text-white pb-2'>
      Skills
    </div>
    <div className='w-[900px] flex mx-auto pl-5 space-x-1'>
      <button  className="px-4 py-1 rounded-xl border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(255,255,255)] transition duration- font-bold">React</button>
      <button  className="px-4 py-1 rounded-xl border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(255,255,255)] transition duration- font-bold">Next.js</button>
      <button  className="px-4 py-1 rounded-xl border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(255,255,255)] transition duration- font-bold">TypeScript</button>
      <button  className="px-4 py-1 rounded-xl border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(255,255,255)] transition duration- font-bold">Postgres</button>
      <button  className="px-4 py-1 rounded-xl border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(255,255,255)] transition duration- font-bold">Figma</button>
      <button  className="px-4 py-1 rounded-xl border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(255,255,255)] transition duration- font-bold">C++</button>
    </div>
  </div>
  
}


function Footer(){
  return <div>
    <hr className="border-t border-white my-10 w-[900px] mx-auto "/>
    <div className='text-white font-bold w-[900px] text-2xl mx-auto flex pl-5 justify-center h-80 items-center gap-2'>
    <div>Say Hi on</div>
     <div className='w-5 h-5 '>
      <a alt="My X link ain't loading, try again some other time" href="https://x.com/arinntwt" className='filter invert h-5 w-5'>
      <img src="/twitter.png"  alt="My X link ain't loading, try again some other time" />
      </a>
     </div>
  </div>
  </div>
  
}

