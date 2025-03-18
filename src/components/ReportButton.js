import React from 'react';

const ReportButton = () => {
  const handleGenerateReport = () => {
    alert('Report generated successfully!');
  };

  return (
    <button className="report-button" onClick={handleGenerateReport}>
      Generate Report
    </button>
  );
};

export default ReportButton;
