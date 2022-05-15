import { HashtagIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setChannelInfo } from "../features/channelSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { useSelector } from "react-redux";
import { selectChannelId } from "../features/channelSlice";
import { TrashIcon } from "@heroicons/react/solid";
import { useCollection } from "react-firebase-hooks/firestore";

function Channel({ id, channelName }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  var Useremail;
  const channelId = useSelector(selectChannelId);

 const trashChannel = () =>{
    db
    .collection("channels")
    .doc(id)
    .delete()

    navigateToChannel();
 }
 const navigateToChannel = () =>{
    dispatch(
        setChannelInfo({
          channelId: null,
          channelName: null,
        })
      );
    navigate(`/channels`);
 }

  const setChannel = () => {
    dispatch(
      setChannelInfo({
        channelId: id,
        channelName: channelName,
      })
    );

    navigate(`/channels/${id}`);
  };

  return (
    <div
      className="font-medium flex items-center cursor-pointer hover:bg-[#3A3C43] p-1 rounded-md  hover:text-white group"
      
    >
        <div className="flex items-center" onClick={setChannel}><HashtagIcon className="h-5 mr-2" /> {channelName}</div>
      
      {user?.email && (
        <div
          className=" hover:bg-[#ed4245] p-1 ml-auto rounded-sm text-[#ed4245] hover:text-white cursor-pointer"
          onClick={trashChannel}
        >
          <TrashIcon className="h-5 hidden group-hover:inline" />
        </div>
      )}
    </div>
  );
}

export default Channel;