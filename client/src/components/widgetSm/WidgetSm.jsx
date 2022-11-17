import "./widgetSm.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { userReq } from "../../requestMethod";

export default function WidgetSm() {
  const [users,setUsers] = useState([])
  useEffect(()=>{
    const getUsers = async ()=>{
      try{
        const res = await userReq.get("/user/?new=true")
        setUsers(res.data)
      }catch{}
    }
    getUsers()
  },[])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user)=>(

        
        <li className="widgetSmListItem" key={user._id}>
          <img
            src={user.img || "https://i.ibb.co/WtZGmGg/l60Hf.png"}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        ))}
        
      </ul>
    </div>
  );
}
