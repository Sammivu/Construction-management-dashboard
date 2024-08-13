  import IncomeBreakdown from "./IncomeBreakdown"
// import IncomeDetails from "./IncomeDetails"
// import LatestEvents from "./LatestEvents"
 import Sales from "./Sales"
import TopNav from "./TopNav"
import Search from "./Search"
import ProjectOverview from './ProjectOverview';
import ResourceManagement from './ResourceManagement';
import BudgetTracking from './BudgetTracking';
import CostWidget from './CostWidget';
import { useProjectData, useResourceData } from '../data';
import { budgetData, costData } from '../data';
import NewProject from "./NewProject";


function DashboardLayout() {
// Use custom hooks to get the data
const { project } = useProjectData();
const { resourceData } = useResourceData();
// const { budgetData } = useBudgetData();
// const { costData } = useCostData();


  return (
    <div className='flex h-screen w-full flex-col transition-all 
    duration-500 ease-in-out md:px-[2%] lg:px-[0%]'>
    <div className="bg-[#F7F7F8]  w-full h-[100vh] overflow-auto">
        <TopNav />
         <div className="flex-1  px-6 pt-4 pb-8 rounded-tl-3xl">
        <Search />
        <NewProject/>
       </div>
       
        <div className="grid lg:grid-cols-2 gap-6 pb-8 px-6 py-4 ">
        <ProjectOverview  />
             <IncomeBreakdown/>
           {/* <LatestEvents />
            
            <IncomeDetails /> */}
           <ResourceManagement resourceData={resourceData} />
            <Sales/>
        
            <BudgetTracking budgetData={budgetData} costData={costData} /> 
        <CostWidget costData={costData} />
        
     
        </div>
    </div>
    </div>
  )
}

export default DashboardLayout