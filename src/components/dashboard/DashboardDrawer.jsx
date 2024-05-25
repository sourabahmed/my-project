import { Link } from "react-router-dom"


function DashboardDrawer() {
  return (
    <>
    <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><Link to={"/"}>Home</Link></li>
      <li><Link to={"/dashboard/Other"}>Other</Link></li>
      <li><Link to={"/dashboard/Other2"}>Other2</Link></li>
      
      
    </ul>
  </div>
</div>
    </>
  )
}

export default DashboardDrawer