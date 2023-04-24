import React from "react";
import Card from "../UI/Card";
import classes from './UsersList.module.css'
const UserList = props =>{
    return (
        <Card className={classes.users}>
            <ul>
        {props.user.map(user =>{
            <li>{user.name} ({user.age}Year's old)</li>
        })}
       </ul>
        </Card>
       
    )
}
export default UserList;