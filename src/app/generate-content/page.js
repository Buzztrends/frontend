import Header from "@/components/header";
import PostText from "@/components/Generate-Content/post-text";

export default function GenerateContent() {
  return (
    <div>
        <Header header="Create Content"/>
        <div className="post-text float-right">
        <PostText/>
        </div>
    </div>
  )
}