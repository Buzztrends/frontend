import TabComponent from "./tab-component";

export default function PostText() {
  return (
      <div className="block rounded-lg border-black border md:w-1/2 m-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="border-b text-indigo-900 border-neutral-900 px-6 py-3">
          Post Text
        </div>
        <div className="px-6 py-4">

        <TabComponent items={PostTabs} />
        </div>
      </div>
    // </div>
  );
}

const PostTabs = [
  {
    tab: <div>Preview</div>,
    content: <div>Content of Preview</div>,
  },
  {
    tab: <div>Edit</div>,
    content: <div>Content of Edit</div>,
  },
];
