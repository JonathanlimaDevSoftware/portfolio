// DownloadButton.tsx
import React from 'react';
import '../../styles/components/_btn.scss';
interface DownloadButtonProps {
  fileName: string;
  filePath: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ fileName, filePath }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    link.click();
  };

  return (
    <button onClick={handleDownload} className="btn download-button">
      Download CV
    </button>
  );
};

export default DownloadButton;



