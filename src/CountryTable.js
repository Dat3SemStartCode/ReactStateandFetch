import React, { Component } from "react";

const CountryTable = () => {
  
    return (
      <table className="table">
        <thead>
          <tr><th>This is the header. Replace with a row generated from the Labels endpoint</th></tr>
        </thead>
        
        <tbody>
         <tr>This is the body. Replace with rows generated from the countries endpoint</tr>
        </tbody>
      </table>
    );
};
export default CountryTable;