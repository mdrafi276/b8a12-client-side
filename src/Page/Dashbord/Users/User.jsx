import { useEffect, useState } from "react";
import UserMap from "./UserMap";
import { GrList } from "react-icons/gr";
import Swal from "sweetalert2";


const User = () => {

  const [deleteData, setdeleteData] = useState(null);
   const [userData, setUserData] = useState();

   
   useEffect(() => {
     fetch("http://localhost:5000/users")
       .then((res) => res.json())
       .then((data) => setUserData(data));
   }, []);

    const handleDelete = (_id) => {
      console.log(_id);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/deleteUser/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire(
                  "Deleted!",
                  "Your product has been deleted.",
                  "success"
                );
                const filteredData = deleteData.filter(
                  (dataUser) => dataUser._id !== _id
                );
                setdeleteData(filteredData);
              }
            })
            .catch((error) => {
              console.error(error);
            });
        }
      });
    };
    
    return (
      <div>
        <div className="z-10 md:w-full   absolute left-0 top-10   mt-0 md:relative w-[100vw] md:bg-transparent bg-balck">
          <div className="wrap w-full   ">
            <div className="circ-1 md:block hidden"></div>
            <div className="circ-2 md:block hidden"></div>
            <div className="carde md:min-h-full min-h-[100vh]">
              <div className="tops w-full flex items-center ">
                <GrList />
                <span className="u-l">User list:</span>
              </div>
              <hr />

              <div>
                {userData?.map((dataUser) => (
                  <UserMap
                    dataUser={dataUser}
                    handleDelete={handleDelete}
                    key={dataUser._id}
                  ></UserMap>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default User;