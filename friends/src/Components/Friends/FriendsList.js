import React from "react";
import {axiosWithAuth} from "../../utils/axiosWithAuth";

const FriendsList = (props) => {

    
  const editFriend = id => {
    axiosWithAuth()
      .get("/friends/" + id)
      .then(res => {
        console.log("EDIT", res.data);
        props.setNewFriend({
          id: res.data.id,
          name: res.data.name,
          age: res.data.age,
          email: res.data.email
        });
      })
      .catch(err => console.log(err));
    props.setEditFriend(true);
  };

  const deleteFriend = id => {
    // console.log("ID", id);
    axiosWithAuth()
      .delete("/friends/" + id)
      .then(res => {
        console.log("ADD", res.data);
        props.setNewGetFriend(true);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="friendsList">
      {props.friends.map(item => {
        return (
          <div className="card" key={item.id}>
            <div className="buttonBox">
              <button onClick={() => editFriend(item.id)} className="button">
                &#9998;
              </button>
              <button onClick={() => deleteFriend(item.id)} className="button">
                &#10006;
              </button>
            </div>
            <h3>{item.name}</h3>
            <p>Age {item.age}</p>
            <p>Email {item.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FriendsList;

