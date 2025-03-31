import React, { useState, useEffect } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard.jsx";

const DisplayProp = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/v1/property/getproperty")
            .then(res => {
                console.log("Fetched properties:", res.data); // Log data
                setProperties(res.data);
            })
            .catch(error => console.error("Error fetching properties:", error));
    }, []);

    return (
   
        <div className="main-content p-6">
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {properties.length > 0 ? (
                properties.map(property => (
                    <PropertyCard key={property._id} property={property} />
                ))
            ) : (
                <p className="text-gray-600 col-span-full text-center py-12">
                No properties found matching your criteria
              </p>
    
            )}
        </div>
        </div>
   
    );
};

export default DisplayProp;
