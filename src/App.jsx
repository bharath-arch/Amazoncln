import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from './components/Layout/User/UserLayout.jsx';
import AdminLayout from './components/Layout/Admin/AdminLayout.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout/>}>
            {/* <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
          </Route>
          <Route path="/admin" element={<AdminLayout/>}>
            {/* <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
