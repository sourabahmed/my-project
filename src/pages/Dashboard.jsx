import useAuth from "../hooks/useAuth"


function Dashboard() {
    const {user} = useAuth();
  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={user.photoURL} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{user.displayName}</div>
            </div>
          </div>
        </td>
        <td>
          {user.email}
        </td>
        <td>{user?.phone}</td>
        <th>
          <button className="btn btn-ghost btn-xs disabled">details</button>
        </th>
      </tr>
      {/* row 2 */}
    </tbody>
    
    
  </table>
</div>
  )
}

export default Dashboard