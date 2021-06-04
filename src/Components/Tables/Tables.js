import React from "react";
import "../Tables/main.css";

export default function Tables() {
  return (
    <div>
      <div className="row-view-2">
        <table className="table-view border-normal">
          <thead>
            <tr className="center">
              <th className="background-red color-white"> F_Name </th>
              <th className="background-red color-white"> L_Name </th>
              <th className="background-red color-white"> Age </th>
              <th className="background-red color-white"> Address </th>
              <th className="background-red color-white"> Salary </th>
            </tr>
          </thead>
          <tbody>
            <tr className="center">
              <td> Darshan </td>
              <td> Hegde </td>
              <td> 24 </td>
              <td> Sirsi </td>
              <td> 1,00,000 </td>
            </tr>
          </tbody>
        </table>
        <table className="table-view">
          <thead>
            <tr>
              <th className="background-red color-white"> Name </th>
              <th className="background-red color-white"> USN </th>
              <th className="background-red color-white"> Age </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> Jim </td>
              <td> 1MT18IS412 </td>
              <td> 30 </td>
            </tr>
          </tbody>
        </table>

        <table className="table-view">
          <thead>
            <tr>
              <th className="background-green color-white"> F_Name </th>
              <th className="background-green color-white"> L_Name </th>
              <th className="background-green color-white"> Age </th>
              <th className="background-green color-white"> Address </th>
              <th className="background-green color-white"> Salary </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover-grey">
              <td> Darshan </td>
              <td> Hegde </td>
              <td> 24 </td>
              <td> Sirsi </td>
              <td> 1,00,000 </td>
            </tr>
            <tr className="hover-orange">
              <td> Darshan </td>
              <td> Hegde </td>
              <td> 24 </td>
              <td> Sirsi </td>
              <td> 1,00,000 </td>
            </tr>
            <tr className="hover-blue">
              <td> Darshan </td>
              <td> Hegde </td>
              <td> 24 </td>
              <td> Sirsi </td>
              <td> 1,00,000 </td>
            </tr>
          </tbody>
        </table>
        <table className="table-view">
          <thead>
            <tr>
              <th className="background-green color-white"> F_Name </th>
              <th className="background-green color-white"> L_Name </th>
              <th className="background-green color-white"> Age </th>
              <th className="background-green color-white"> Address </th>
              <th className="background-green color-white"> Salary </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> Darshan </td>
              <td> Hegde </td>
              <td> 24 </td>
              <td> Sirsi </td>
              <td> 1,00,000 </td>
            </tr>
          </tbody>
        </table>
        <table className="table-view">
          <thead>
            <tr>
              <th className="background-blue color-white"> F_Name </th>
              <th className="background-blue color-white"> L_Name </th>
              <th className="background-blue color-white"> Age </th>
              <th className="background-blue color-white"> Address </th>
              <th className="background-blue color-white"> Salary </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover-grey">
              <td> Darshan </td>
              <td> Hegde </td>
              <td> 24 </td>
              <td> Sirsi </td>
              <td> 1,00,000 </td>
            </tr>
            <tr className="hover-orange">
              <td> Darshan </td>
              <td> Hegde </td>
              <td> 24 </td>
              <td> Sirsi </td>
              <td> 1,00,000 </td>
            </tr>
            <tr className="hover-blue">
              <td> Darshan </td>
              <td> Hegde </td>
              <td> 24 </td>
              <td> Sirsi </td>
              <td> 1,00,000 </td>
            </tr>
          </tbody>
        </table>
        <table className="table-view">
          <thead>
            <tr>
              <th className="background-orange color-white"> F_Name </th>
              <th className="background-orange color-white"> L_Name </th>
              <th className="background-orange color-white"> Age </th>
              <th className="background-orange color-white"> Address </th>
              <th className="background-orange color-white"> Salary </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover-red">
              <td> Darshan </td>
              <td> Hegde </td>
              <td> 24 </td>
              <td> Sirsi </td>
              <td> 1,00,000 </td>
            </tr>
            <tr className="hover-coral">
              <td> Darshan </td>
              <td> Hegde </td>
              <td> 24 </td>
              <td> Sirsi </td>
              <td> 1,00,000 </td>
            </tr>
            <tr className="hover-darkochid">
              <td> Darshan </td>
              <td> Hegde </td>
              <td> 24 </td>
              <td> Sirsi </td>
              <td> 1,00,000 </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
