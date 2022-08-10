import React from "react";

import UserData from "./UserData";

import "./UserDataList.css";

const UserDataList = (props) => {

  console.log(props.userInfo);

  const onDeleteHandler = (id) => {
    props.onDeleteItem(id);
  }

  return (
    <div>
      {props.userInfo.length !== 0 && <div className="user-list">
        {props.userInfo.map((userData) => {
          return (
            <UserData
              name={userData.name}
              age={userData.age}
              id={userData.id}
              key={userData.id}
              onDelete={onDeleteHandler}
            ></UserData>
          );
        })}
        {/* <UserData
        name={props.userInfo[0].name}
        age={props.userInfo[0].age}
      ></UserData>
      <UserData
        name={props.userInfo[1].name}
        age={props.userInfo[1].age}
      ></UserData> */}
      </div>}
    </div>
  );
};

export default UserDataList;
