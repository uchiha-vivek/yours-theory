'use client';
import { useState } from 'react';
import Editor from '@/components/Editor';
import Blog from '@/components/Blog';
const Write: React.FC = () => {
    const [content, setContent] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [blog,setBlog] =  useState<{ title: string; content: string }[]>([]);

    const handleClick = () => {
        setBlog((prev) => [...prev,{title,content}])
        setTitle('')
        setContent('')
        console.log('Button clicked');
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Write a New Blog Post</h1>
            <input
                type="text"
                placeholder="Title"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <div className="mb-4"> {/* Add margin-bottom to create space between editor and button */}
                <Editor content={content} setContent={setContent} />
            </div>
            <div className="flex justify-center">
                <button
                    className="px-4 py-2 text-white rounded mt-10 bg-blue-400"
                    onClick={handleClick}
                >
                    Publish
                </button>
            </div>
            <div className='mt-8' >
                 {blog.map((chat,index) => (
                    <Blog  key={index} title={chat.title} content={chat.content}  />
                 ) )}
            </div>
        </div>
    );
};

export default Write;
