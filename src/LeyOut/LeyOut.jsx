import { Outlet } from 'react-router-dom';

const LeyOut = () => {
    return (
      <div className="bg-[#010313] min-h-[100vh]">
        <Outlet></Outlet>
      </div>
    );
};

export default LeyOut;