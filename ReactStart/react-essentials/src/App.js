import React, { useEffect, useState } from "react";
import "./App.css";
import { Checkbox } from "./checkbox";
import { Routes, Route } from "react-router-dom";
import { Home, About, Events, Contact, Opps404, Services, CompanyHistory, Location } from "./pages";

function AppOne() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />}>
          <Route path="/services" element={<Services />} />
          <Route path="/history" element={<CompanyHistory />} />
          <Route path="/location" element={<Location />} />
        </Route>

        <Route path="/events" element={<Events />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<Opps404 />} />
      </Routes>
    </div>
  );
}

// https://api.github.com/users/SohaibCr7

// function App({ login }) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     console.log("Mount");
//     if (!login) return;
//     setLoading(true);
//     fetch(`https://api.github.com/users/${login}`)
//       .then(async (response) => {
//         // console.log(await response.json());
//         setData(await response.json());
//       })
//       // .then((response) => response.json())
//       // .then(setData)
//       .then(() => setLoading(false))
//       // .catch(setError);
//     return () => {
//       console.log("UnMount");
//     };
//   }, [login]);

//   if (loading) return <h1>Loading.....!</h1>;
//   if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
//   if (!data) return null;

//   return (
//     <div>
//       <Checkbox />
//       <h1>{data.name}</h1>
//       <p>{data.location}</p>
//       <img
//         alt={data.login}
//         src={data.avatar_url}
//         width={250}
//         height={200}
//       ></img>
//     </div>
//   );
// }

export default AppOne;
