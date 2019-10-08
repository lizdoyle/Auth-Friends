import React from "react";
import {axiosWithAuth} from "../../utils/axiosWithAuth";



const FriendsForm = (props) => {


    const friendChangeHandler = e => {
        props.setNewFriend({...props.newFriend, [e.target.name]: e.target.value})
    }

    const addFriend = e => {
        if (props.edit) {
        e.preventDefault();
            console.log("AddFriend", props);
            axiosWithAuth().put("/friends" + props.newFriend.id, {
                name: props.newFriend.name,
                age: props.newFriend.age,
                email: props.newFriend.email
            })
            .then(res => {
                console.log("editFriend", res.data)
                props.setNewFriend({
                    id: "",
                    name: "",
                    age: "",
                    email: ""
                  });
                  props.setNewGetFriend(true);
                })
                .catch(err => console.log(err));
            } else {
              e.preventDefault();
              axiosWithAuth()
                .post("/friends", props.newFriend)
                .then(res => {
                  console.log("ADD", res.data);
                  props.setNewFriend({
                    name: "",
                    age: "",
                    email: ""
                  });
                  props.setNewGetFriends(true);
                })
                .catch(err => console.log(err));
            }
          };
         
    
        return (

          <div>
          <form onSubmit={addFriend}>
            <input type="hidden" name="id" value={props.newFriend.id} />
            <input
              type="text"
              name="name"
              value={props.newFriend.name}
              onChange={friendChangeHandler}
              placeholder="name"
            />
            <input
              type="text"
              name="age"
              value={props.newFriend.age}
              onChange={friendChangeHandler}
              placeholder="age"
            />
            <input
              type="email"
              name="email"
              value={props.newFriend.email}
              onChange={friendChangeHandler}
              placeholder="email"
            />
            {props.edit ? (
              <button>Edit Friend</button>
            ) : (
              <button>Add Friend</button>
            )}
          </form>
        </div>
      )
    };

export default FriendsForm