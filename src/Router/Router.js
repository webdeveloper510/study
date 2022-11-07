import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
 import HomePage from '../Components/Home';
import Mcast from '../Components/Mcast';
import Manipal from '../Components/ManipalU';
import Vishalscc from '../Components/Vishalscc';
import Universityob from '../Components/Universityob';
 import Omnix from '../Components/Omnix';
 import Fdp from '../Components/Fdp';
 import Anglia from '../Components/Anglia';
import British from '../Components/British';
import BusinessD from '../Components/Business';
import News from '../Components/news';
import BusinessPage1 from '../Components/business/innovation';
import BusinessPage2 from '../Components/business/Brand';
import Desk1 from '../Components/business/desk';
import IT from '../Components/business/it_info';
import IT_learn from '../Components/business/it_learning';
import STRATEGY from '../Components/business/strategy';
import STRATEGY_learn from '../Components/business/strategy_learning';
import ENTERPRENEOUR from '../Components/business/enterpreneour';
import ENTERPRENEOUR_Learn from '../Components/business/enterpreneour_learn';
import INTERNATIONAL_MARKET from '../Components/business/international_marketing';
import Market_learn from '../Components/business/marketing_learn';
import SUCCESSFUL from '../Components/business/successful';
import SUCCESSFUL_learn from '../Components/business/success_learn';
import SALES_INFO from '../Components/business/sales_info';
import SALES_CONTENT from '../Components/business/sales_content';
import AGILE_TRANS from '../Components/IT/agile_transform';
import AGILE_CONTENT from '../Components/IT/agile_content';
import ARTIFICIAL_INFO from '../Components/IT/artificial_info';
import ARTIFICIAL_CONTENT from '../Components/IT/agile_content';
import COMPUTER_INFO from '../Components/IT/computer_info';
import COMPUTER_CONTENT from '../Components/IT/computer_content';
import ANALYSIS_INFO from '../Components/IT/data_analysis_info';
import CYBER_INFO from '../Components/IT/cyber_info';
import ANALYSIS_CONTENT from '../Components/IT/analysis_content';
import ENTERPRISES_INFO from '../Components/IT/enterprises_info';
import ENTERPRISES_CONTENT from '../Components/IT/enterprises_content';
import CYBER_CONTENT from '../Components/IT/cyber_content';
import IOT_INFO from '../Components/IT/iot_info';
import IOT_CONTENT from '../Components/IT/iot_content';
import MobileApp_content from '../Components/IT/MobileApp_content';
import MobileApp_info from '../Components/IT/MobileApp_info';
import Managing_content from '../Components/IT/Managing_content';
import Managing_info from '../Components/IT/Managing_info';
import Networking_content from '../Components/IT/Networking_content';
import Networking_info from '../Components/IT/Networking_info';
import System_development_content from '../Components/IT/System_development_content';
import System_development_info from '../Components/IT/System_development_info';

const Routers = () => {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/university/Anglia" element={<Anglia/>} />
          <Route path="/iot_info" element={<IOT_INFO/>} />
          <Route path="/iot_content" element={<IOT_CONTENT/>} />
          <Route path="/business" element={<BusinessD/>} />
          <Route path="/university/Mcast" element={<Mcast/>} />
          <Route path="/university/Manipal" element={<Manipal/>} />
          <Route path="/university/Vishalscc" element={<Vishalscc/>} />
          <Route path="/university/Universityob" element={<Universityob/>} />
          <Route path="/university/Omnix" element={<Omnix/>} />
          <Route path="/university/Fdp" element={<Fdp/>} />
          <Route path="/university/British" element={<British/>} />
          <Route path="/cyber_content" element={<CYBER_CONTENT/>} />
          <Route path="/businessPage" element={<BusinessPage1/>} />
          <Route path="/businessPage1" element={<BusinessPage2/>} />
          <Route path="/desk" element={<Desk1/>} />
          <Route path="/it" element={<IT/>} />
          <Route path="/strategy" element={<STRATEGY/>} />
          <Route path="/it_learn" element={<IT_learn/>} />
          <Route path="/strategy_learn" element={<STRATEGY_learn/>} />
          <Route path="/enterpreneour_info" element={<ENTERPRENEOUR/>} />
          <Route path="/enterpreneour_content" element={<ENTERPRENEOUR_Learn/>} />
          <Route path="/marketing" element={<INTERNATIONAL_MARKET/>} />
          <Route path="/sales_info" element={<SALES_INFO/>} />
          <Route path="/marketing_content" element={<Market_learn/>} />
          <Route path="/artificial_info" element={<ARTIFICIAL_INFO/>} />
          <Route path="/agile_info" element={<AGILE_TRANS/>} />
          <Route path="/agile_content" element={<AGILE_CONTENT/>} />
          <Route path="/business_manage" element={<SUCCESSFUL/>} />
          <Route path="/business_manage" element={<SUCCESSFUL/>} />
          <Route path="/analysis_info" element={<ANALYSIS_INFO/>} />
          <Route path="/artificial_content" element={<ARTIFICIAL_CONTENT/>} />
          <Route path="/success_content" element={<SUCCESSFUL_learn/>} />
          <Route path="/sales_content" element={<SALES_CONTENT/>} />
          <Route path="/cyber_info" element={<CYBER_INFO/>} />
          <Route path="/computer_info" element={<COMPUTER_INFO/>} />
          <Route path="/computer_content" element={<COMPUTER_CONTENT/>} />
          <Route path="/enterprises_info" element={<ENTERPRISES_INFO/>} />
          <Route path="/analysis_content" element={<ANALYSIS_CONTENT/>} />
          <Route path="/enterprises_content" element={<ENTERPRISES_CONTENT/>} />
          <Route path="/mobileapp_content" element={<MobileApp_content/>} />
          <Route path="/mobileapp_info" element={<MobileApp_info/>} />         
          <Route path="/managing_contant" element={<Managing_content/>} />         
          <Route path="/managing_info" element={<Managing_info/>} />         
          <Route path="/networking_content" element={<Networking_content/>} />         
          <Route path="/networking_info" element={<Networking_info/>} />         
          <Route path="/system_development_content" element={<System_development_content/>} /> 
          <Route path="/system_development_info" element={<System_development_info/>} />         
        </Routes>
      </Router>
  )
}

export default Routers;