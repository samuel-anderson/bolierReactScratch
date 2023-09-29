import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// import { firebaseApi } from "../../api/index";
import { fetchUsersStart } from "../../features/user/userSlice";
import { fetchBarbersStart } from "../../features/barber/barberSlice";

function UserList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

  const barbers = useSelector((state) => state.barber.barbers);

  useEffect(() => {
    dispatch(fetchUsersStart());
    dispatch(fetchBarbersStart());
  }, [dispatch]);

  // useEffect(() => {
  //   const getBarbers = async () => {
  //     await firebaseApi.createDocument("barbers", {
  //       name: "Big Man",
  //       contactInfo: {
  //         email: "N/A",
  //         phoneNumber: "(760) 277-4923",
  //       },
  //     });

  //     await firebaseApi.removeDocument("barbers", "hkUJcR6AJjWw3kavdEDt");

  //     const items = await firebaseApi.getCollection("barbers");
  //     console.log(items);
  //   };

  //   getBarbers();
  // }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div>
        <h2>User List</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>

        <h2>Barber List</h2>
        <ul>
          {barbers.map(({ id, data }) => (
            <li key={id}>{data.name}</li>
          ))}
        </ul>
      </div>
      {/* <div>
        <h2>Category List List</h2>
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div> */}
    </>
  );
}

export default UserList;
