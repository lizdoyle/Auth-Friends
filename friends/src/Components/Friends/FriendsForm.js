import React, {useState} from "react";



const FriendsForm = (props) => {

    const [friend, setFriend] = useState("");

    console.log(friend)

    const friendChangeHandler = e => {
        setFriend(...friend, [e.target.name]: e.target.value)
    }

    const submitFriendForm = e => {
        e.preventDefault();

        const newFriend = {
            ...friend,
            id: Date.now()
        }

        props.addFriend(newFriend);
         
    }


    return (
        <form onSubmit={submitFriendForm} >


        </form>
    )
}

export default FriendsForm