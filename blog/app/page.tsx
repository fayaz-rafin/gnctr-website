import Image from "next/image";
import logo from '../public/kermit.jpeg'

export default function Page() {
  return (
    <section>
      <div className="flex justify-center w-full">
        <Image className="mb-4" src={logo} alt="Logo" width={120} height={120} />
      </div>
      <h1 className="mb-8 text-center text-2xl font-semibold tracking-tighter">
        York University's GNCTR Team
      </h1>
      <p className="mb-4">
        {`York University's Great Northern Concrete Toboggan Race (GNCTR) team is a student-run 
        organization that participates in the annual GNCTR competition, the longest-running 
        engineering competition in Canada. The competition challenges teams to design, construct, 
        and race a toboggan with a running surface made entirely of concrete.`}
      </p>
      <p className="mb-4">
        {`York's team is composed of passionate engineering students from various disciplines, 
        including civil, mechanical, and electrical engineering, working together to push the 
        boundaries of design, creativity, and sustainability. The team focuses on developing 
        innovative solutions in concrete mix design, steering, and braking systems, 
        and integrating cutting-edge technology into their designs.`}
      </p>
      <div className="my-8">
        
      </div>
    </section>
  )
}
