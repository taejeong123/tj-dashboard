"use client";

import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/dashboard", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: "title 1123123",
            context: "adfasdfaf",
          }),
        });
        if (!response.ok) {
          throw new Error("Failed to fetchdata");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  // console.log("@@", dashboardList);

  useEffect(() => {
    console.log("@@", data);
  });

  return (
    <>
      <main>
        {/* {dashboardList?.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.context}</p>
          </div>
        ))} */}
      </main>
    </>
  );
};

export default Home;
