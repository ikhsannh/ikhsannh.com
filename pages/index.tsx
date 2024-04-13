import LeftComponent from "@/components/miniComponents/LeftComponent";
import RightComponent from "@/components/miniComponents/RightComponent";

export default function Home() {
  return (
    <main>
      <div className='flex-col lg:flex justify-around'>
        <LeftComponent />
        <br />
        <RightComponent />
      </div>
    </main>
  )
}















