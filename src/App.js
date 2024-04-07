import React, { useEffect, useState } from "react";
import ObjectList from "./components/ObjectList";
import ObjectDetails from "./components/ObjectDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import fetchData from "./components/api";

const App = () => {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const data = await fetchData();
      setObjects(data);
    };
    fetchDataFromApi();
  }, []);

  return (
    <BrowserRouter>
      <div className="container">
        <div className="content">
          <Routes>
            <Route path="/" element={<ObjectList object={objects} />} />
            <Route
              path="/object/:id"
              element={<ObjectDetails object={objects} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
