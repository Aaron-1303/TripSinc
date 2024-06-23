import Spline from '@splinetool/react-spline/next';
import Link from 'next/link';
export default function LandingPage() {
  return (<>
    <main>
      <Spline
        scene="https://prod.spline.design/HxA26fXB3KHlLdD6/scene.splinecode" 
      />
    </main>
<Link href="/users">
    <footer className='flex flex-col items-center justify-center bg-blue-400 w-full '>
  <button className='p-4 text-4xl font-bold'>Let's plan your trip!!</button>
</footer>
</Link>
    </>
  );
}
