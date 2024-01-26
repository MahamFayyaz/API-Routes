import React from 'react'
async function getData(id) {
    let mydata = await fetch(`http://localhost:3000/api/getapistatic${id}`);
    mydata=await mydata.json();
    return mydata;
  }
export default async function UserDetail({params}) {
    console.log(params);
    const comingdata = await getData(params.usersid);
    console.log(comingdata)
  return (
    <div>
        <h1>This is User Detail Page </h1>
    </div>
  )
}
