import React from 'react'
import sceneryImg from "../assets/scenery.svg";
import person from "../assets/person.svg";
import home from "../assets/home.svg";
import fingerprint from "../assets/fingerprint.svg";

const details = [
  {
    id: 1,
    icon: person,
    title: "CMRPMXXXXF",
    name: "ASHAR RAI MUJEEB",
    fetched: "NSDL",
    date: "24/04/2024",
  },
  {
    id: 2,
    icon: fingerprint,
    title: "Address",
    name: "Aadhaar UID",
    fetched: "Digio",
    date: "18/10/1994",
  },
  {
    id: 3,
    icon: home,
    title: "Address",
    name: "16/2, 8 Jat Regiment, c/o 56 APO",
    fetched: "Digio",
    date: "Correspondence",
  },
];

const backgroundImg = {
  backgroundImage: `url('${sceneryImg}')`,
  backgroundSize: "cover",
};

const UserDetails = () => {

  const openLinkedInProfile = () => {
    const linkedInProfileUrl = "https://shorturl.at/qKY69";

    window.open(linkedInProfileUrl, "_blank");
  };


  return (
    <div className="h-screen mx-auto rounded-t-3xl md:w-1/2" style={backgroundImg}>
    <div className='glass rounded-t-3xl'>
      <div className="pt-12 pl-5 left-5 text-bay-of-many">
        <h1 className="text-2xl font-semibold">Fetching your PAN Details</h1>
        <p className="py-1 text-sm">
          Getting your PAN details by your chosen method
        </p>
      </div>
     
      <div className="flex flex-col flex-1 w-3/4 gap-2 mx-auto text-bay-of-many "  onClick={openLinkedInProfile}>
       
       {details.map((item) => (
         <div key={item.id} className="px-4 py-2 my-5 bg-white shadow-md rounded-xl ">
           <div className="flex gap-5 ">
             <img className="h-auto w-18" src={item.icon} alt={item.title} />
             <div>
               <h1 className="text-xl">{item.title}</h1>
               <p className="text-sm">{item.name}</p>
             </div>
           </div>
           <div className="flex gap-5 pt-2"> 
             <div>
               <p className="text-xs">Fetched Via</p>
               <p className="text-xl font-semibold">{item.fetched}</p>
             </div>
             <div>
               <p className="text-xs">Fetched Via</p>
               <p className="text-xl font-semibold">{item.date}</p>{" "}
             </div>
           </div>
         </div>
       ))}
     </div>
 
    </div>
  </div>
  )
}

export default UserDetails