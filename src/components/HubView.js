import React from 'react';

const HubView = () => {
  return (
    <div className="hub-view">
      <div className="hub-title">
        <p>WSI</p>
        <p>Zoomed</p>
        <p>out View</p>
        <p>(Hub)</p>
      </div>
      <table className="hub-table">
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Blood</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12345</td>
            <td>A+</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HubView;
