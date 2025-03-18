import React from 'react';

const LeftPanel = () => {
  const rbcData = [
    { type: 'Angled Cells', count: 222, percentage: '67%' },
    { type: 'Borderline Ovalocytes', count: 50, percentage: '20%' },
    { type: 'Burr Cells', count: 87, percentage: '34%' },
    { type: 'Fragmented Cells', count: 2, percentage: '0.12%' },
  ];

  const wbcData = [
    { type: 'Basophil', count: 222, percentage: '67%' },
    { type: 'Eosinophil', count: 50, percentage: '20%' },
    { type: 'Lymphocyte', count: 87, percentage: '34%' },
    { type: 'Monocyte', count: 2, percentage: '0.12%' },
  ];

  const plateletsData = [
    { type: 'Count', count: 222, percentage: '' },
    { type: 'Percentage', count: '', percentage: '67%' },
  ];

  return (
    <div className="left-panel">
      {/* RBC Section */}
      <div className="section">
        <h3>RBC</h3>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Count</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {rbcData.map((item) => (
              <tr key={item.type}>
                <td>{item.type}</td>
                <td>{item.count}</td>
                <td>{item.percentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* WBC Section */}
      <div className="section wbc-section">
        <h3>WBC</h3>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Count</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {wbcData.map((item) => (
              <tr key={item.type}>
                <td>{item.type}</td>
                <td>{item.count}</td>
                <td>{item.percentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Platelets Section */}
      <div className="section platelets-section">
        <h3>Platelets</h3>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Count</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {plateletsData.map((item) => (
              <tr key={item.type}>
                <td>{item.type}</td>
                <td>{item.count}</td>
                <td>{item.percentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeftPanel;
