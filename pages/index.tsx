import LeftComponent from "@/components/LeftComponent";
import RightComponent from "@/components/RightComponent";

export default function Home() {
  return (
   <main>
      <div className='flex-col sm:flex justify-around'>
        <LeftComponent />
         <br />     
        <RightComponent />
      </div>
   </main>
  )
}
