import React,{useState} from "react";

import UserDataItems from "./components/AddUser/UserDataItems";
import UserDataList from "./components/UserData/UserDataList";


const dummyUserData = [
  // {
  //   id: "U1",
  //   name: "Avinash",
  //   age: 22,
  // },
  // {
  //   id: "U2",
  //   name: "Anu",
  //   age: 25,
  // }
];

function App() {

  const [userData,setUserData] = useState(dummyUserData);
  const onAddUserDataHandler =(newUserData) => {
    console.log(newUserData);
    setUserData((previousUserData) => {
      return ([...previousUserData,newUserData]);
    });
    // console.log(userData);
  }
  const onDeleteItemHandler = (id) => {
    console.log(id);
    setUserData((previousUserData) => {
      const updatedUserData = previousUserData.filter(users => users.id !== id);
      return updatedUserData;
    });
  }

  return (
    <div>
      <UserDataItems addUserData={onAddUserDataHandler}></UserDataItems>
      <UserDataList userInfo={userData} onDeleteItem={onDeleteItemHandler}></UserDataList>
    </div>
  );
}

export default App;
