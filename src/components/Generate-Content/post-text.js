'use client'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { BsFillEyeFill, BsPencilSquare } from "react-icons/bs";
import TabComponent from "./tab-component";

export default function PostText() {
  
const editor = useEditor({
  extensions: [
    StarterKit,
  ],
  content: `<div className="p-2">
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
</div>`,
})
const PostTabs = [
  {
    tab: (
      <div className="flex justify-between px-4">
        <div className="m-2 text-lg">
          <BsFillEyeFill />
        </div>
        <div className="m-1">Preview</div>
      </div>
    ),
    content: (
      <div className="p-2 text-sm overflow-y-auto h-96">
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
      </div>
    ),
  },
  {
    tab: (
        <div className="flex justify-between mx-4">
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
      <div className="block rounded-lg border-black border shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="border-b text-indigo-900 border-neutral-900 px-6 py-3">
          Post Text
        </div>
        <div className="px-6 py-4 flex justify-between">
          <TabComponent items={PostTabs} />
        </div>
      </div>
    </>
  );
}


