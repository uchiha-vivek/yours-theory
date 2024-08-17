// components/Editor.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

interface EditorProps {
  content: string;
  setContent: (content: string) => void;
}

// Define modules and formats as separate constants
const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['bold', 'italic', 'underline'],
    [{ align: [] }],
    ['link'],
    ['clean']
  ],
};

const formats = [
  'header', 'font', 'list', 'bullet', 'bold', 'italic', 'underline', 'align', 'link',
];

const Editor: React.FC<EditorProps> = ({ content, setContent }) => {
  return (
    <ReactQuill
      value={content}
      onChange={setContent}
      modules={modules}
      formats={formats}
      className="h-80"
    />
  );
};

export default Editor;
