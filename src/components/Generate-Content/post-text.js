"use client";
import { BiRefresh } from 'react-icons/bi';
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { BsFillEyeFill, BsPencilSquare } from "react-icons/bs";
import TabComponent from "./tab-component";
import { useState } from "react";
import ReactDOM from "react-dom";

export default function PostText({ postContent }) {
    const [content, setContent] = useState(postContent);

    // useEffect(() => {
    //   ReactDOM.findDOMNode(document.querySelector(".my-component")).innerHTML = htmlString;
    // }, [htmlString]);

    const editor = useEditor({
        extensions: [StarterKit],
        content: content,
        onUpdate: ({ editor }) => {
            setContent(editor.getHTML());
            // console.log(editor.getJSON());
        },
    });

    const PostTabs = [
        {
            tab: (
                <div className="flex justify-center px-4">
                    <div className="m-2 text-lg">
                        <BsFillEyeFill />
                    </div>
                    <div className="m-1">Preview</div>
                </div>
            ),
            content: <div className="h-[900px] overflow-y-auto" dangerouslySetInnerHTML={{ __html: content }}></div>,
        },
        {
            tab: (
                <div className="flex justify-center mx-4">
                    <div className="m-2 text-lg">
                        <BsPencilSquare />
                    </div>
                    <div className="m-1">Edit</div>
                </div>
            ),
            content: (
                <div className="border p-2 text-sm bg-white overflow-y-auto h-[900px]">
                    <EditorContent editor={editor} />
                </div>
            ),
        },
    ];
    return (
        <>
            <div className="w-1/2 ml-6 mr-3 block rounded-lg border shadow-sidd dark:bg-neutral-700">
                <div className="flex border-b text-primary-color text-lg border-b-2 px-6 py-3 items-center justify-between">
                    <div className="font-medium items-center">Post Text:</div>
                    {/* <button className="regenerate-btn p-1 px-4 border border-indigo-800 rounded-lg flex items-center text-base hover:bg-gradient-linear hover:text-white">
                        <div className='mx-2 text-2xl'>
                            <BiRefresh />
                        </div>
                        Regenerate
                    </button> */}
                </div>
                <div className="px-6 py-4 flex justify-between">
                    <TabComponent items={PostTabs} />
                </div>
            </div>
        </>
    );
}
