import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import FriendsList from "./FriendsList";
import FriendsForm from "./FriendsForm";

const Friends = (props) => {
  const [friends, setFriends] = useState([]);
  const [newGetFriend, setNewGetFriend] = useState();
  const [editFriend, setEditFriend] = useState(false);
  const [newFriend, setNewFriend] = useState({
    id: "",
    name: "",
    age: "",
    email: ""
  });

  useEffect(() => {
    setNewGetFriend(false);
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        console.log("GET", res.data);
        setFriends(res.data);
      })
      .catch(err => console.log(err));
  }, [newGetFriend]);

  return (
    <div className="friends">
      <h1>Add a New Friend!</h1>
      <FriendsList
        friends={friends}
        setNewGetFriend={setNewGetFriend}
        setEditFriend={setEditFriend}
        newFriend={newFriend}
        setNewFriend={setNewFriend}
      />
      <FriendsForm
        friends={friends}
        setNewGetFriend={setNewGetFriend}
        setEditFriend={setEditFriend}
        newFriend={newFriend}
        setNewFriend={setNewFriend}
        edit={editFriend}
      />
    </div>
  );
};

export default Friends;