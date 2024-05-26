import useAuth from "../../hooks/useAuth";
import Avatar from "./Avatar"


function Profile() {
    const{user} = useAuth();
  return (
    <>
        {/* The button to open modal */}
<label htmlFor="my_modal_7" >
    <Avatar />
</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_7" className="modal-toggle " />
<div className="modal" role="dialog">
  <div className="modal-box">
    <h3 className="text-lg font-bold">Your Name: {user?.displayName}</h3>
    <p className="py-4">Eamil: {user?.email}</p>
    <button className="btn btn-secondary">Logout</button>
  </div>
  <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
</div>
    </>
  )
}

export default Profile

