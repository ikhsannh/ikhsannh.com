import BaseLayout from "../components/BaseLayout";
import LeftComponent from "../components/LeftComponent";
import RightComponent from '../components/RightComponent';

const Index = () => {
  return (
    <BaseLayout>    
      <div className='flex-col sm:flex justify-around'>
        <LeftComponent />
        <br />
        <RightComponent />
      </div>
    </BaseLayout>
  )
}

export default Index;