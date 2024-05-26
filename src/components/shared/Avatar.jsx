import useAuth from "../../hooks/useAuth";


function Avatar() {
    const {user} = useAuth();
  return (
    <div>
        
        <div className="avatar">
  <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={user.photoURL} />
  </div>
</div>
    
    </div>
  )
}

export default Avatar