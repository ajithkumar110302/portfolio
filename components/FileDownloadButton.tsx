import React from 'react';

const FileDownloadButton = () => {
  return (
    <a href="/Ajithkumar_A_Software_Engineer.pdf" download>
        <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>Resume</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button>
    </a>
  );
};

export default FileDownloadButton;