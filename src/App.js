import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Index from './Website/Pages/Index';
import Blog from './Website/Pages/Blog';
import About from './Website/Pages/About';
import Contact from './Website/Pages/Contact';
import Service from './Website/Pages/Service';
import Login from './Website/Pages/Login';
import Signup from './Website/Pages/Signup';
import Profile from './Website/Pages/Profile';
import Editprofile from './Website/Pages/Editprofile';
import View_service from './Website/Pages/View_service';
import Review_form from './Website/Pages/Review_form';

import Adminfooter from './Admin/Component/Adminfooter';
import Adminheader from './Admin/Component/Adminheader';
import Admindashboard from './Admin/Pages/Admindashboard';
import Add_categories from './Admin/Pages/Add_categories';
import Add_employee from './Admin/Pages/Add_employee';
import Add_services from './Admin/Pages/Add_services';
import Manage_services from './Admin/Pages/Manage_services';
import Manage_employee from './Admin/Pages/Manage_employee';
import Manage_categories from './Admin/Pages/Manage_categories';
import Manage_user from './Admin/Pages/Manage_user';
import Adminlogin from './Admin/Pages/Adminlogin';
import Manage_contact from './Admin/Pages/Manage_contact';
import Add_blogs from './Admin/Pages/Add_blogs';
import Manage_blogs from './Admin/Pages/Manage_blogs';
import Manage_review from './Admin/Pages/Manage_review';


function App() {
  return (

    <BrowserRouter>
      <ToastContainer></ToastContainer>


    <Routes>
        
        <Route path="/" element={<> <Index/></>}></Route>
        
        <Route path="/about" element={<> <About/></>}></Route>
        <Route path="/service" element={<><Service/></>}></Route>
        <Route path="/view_service/:id" element={<> <View_service/></>}></Route>
        <Route path="/blog" element={<><Blog/></>}></Route>
        <Route path="/contact" element={<><Contact/></>}></Route>
        <Route path="/login" element={<><Login/></>}></Route>
        <Route path="/signup" element={<><Signup/></>}></Route>
        <Route path="/profile" element={<><Profile/></>}></Route>
        <Route path="/editprofile/:id" element={<><Editprofile/></>}></Route>
        <Route path='/review_form' element={<> <Review_form/> </>}></Route>

        <Route path="/admin" element={<>  <Adminlogin/> </>}></Route>
        <Route path="/admindashboard" element={<> <Adminheader/> <Admindashboard/> <Adminfooter/> </>}></Route>
        <Route path="/add_categories" element={<> <Add_categories/>  </>}></Route>
        <Route path="/add_employee" element={<>  <Add_employee/>  </>}></Route>
        <Route path="/add_services" element={<>  <Add_services/>  </>}></Route>
        <Route path="/manage_services" element={<>  <Manage_services/>  </>}></Route>
        <Route path="/manage_employee" element={<> <Manage_employee/>  </>}></Route>
        <Route path="/manage_categories" element={<>  <Manage_categories/>  </>}></Route>
        <Route path="/manage_user" element={<>  <Manage_user/> </>}></Route>
        <Route path="/manage_contact" element={<> <Manage_contact/>  </>}> </Route>
        <Route path="/add_blogs" element={<> <Add_blogs/>  </>}></Route>
        <Route path="/manage_blogs" element={<>  <Manage_blogs/>  </>}></Route>
        <Route path="/manage_review" element={<> <Manage_review/> </> }> </Route>




     </Routes>
    </BrowserRouter>
   
    );
}

export default App;
