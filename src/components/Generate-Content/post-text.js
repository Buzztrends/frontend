"use client";
import { BiRefresh } from 'react-icons/bi';
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { BsFillEyeFill, BsPencilSquare } from "react-icons/bs";
import TabComponent from "./tab-component";
import { useState } from "react";
import ReactDOM from "react-dom";

const postContent = `<div className="p-2 text-sm overflow-y-auto h-full">
Title: "Art Meets Nutrition with our #SmoothieBowls! ",
<br />
<br />
Do you love a healthy, delicious treat that's as pleasing to the eye as
it is to the palate? If you've been scrolling Instagram lately, you've
likely spotted the viral #SmoothieBowl trend. It's not just about
sipping your nutrients anymore; it's about creating a masterpiece in a
bowl!
<br />
<br />
Whole Foods is thrilled to be part of this exciting trend. We've got all
the organic, wholesome ingredients you need to make your very own
Insta-worthy smoothie bowl. A € Our shelves are filled with vibrant
fruits, crunchy granola, creamy yogurts, and superfood add-ons like chia
seeds and goji berries.
<br />
<br />
What's more, we love seeing your creations! So next time
<br />
<br />
#WholeFoodsSmoothieBowl #HealthyLiving #FoodAsArt
</div>`;

export default function PostText() {
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
      content: <div dangerouslySetInnerHTML={{ __html: content }}></div>,
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
        <div className="border p-2 text-sm bg-gray-200 overflow-y-auto h-96">
          <EditorContent editor={editor} />
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="w-1/2 ml-6 mr-3 block rounded-lg border-black border shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="flex border-b text-primary-color text-lg border-neutral-900 px-6 py-3 items-center justify-between">
          <div className="font-medium items-center">Post Text</div>
          <button className="regenerate-btn p-1 px-4 border border-indigo-800 rounded-lg flex items-center text-base hover:bg-gradient-linear hover:text-white"><div className='mx-2 text-2xl'><BiRefresh/> </div> Regenerate</button>
        </div>
        <div className="px-6 py-4 flex justify-between">
          <TabComponent items={PostTabs} />
        </div>
      </div>
    </>
  );
}
