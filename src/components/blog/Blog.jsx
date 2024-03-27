import SectionHeader from "../SectionHeader";
import PostList from "./PostList";
import { data } from "../../../data";


const Blog = async () =>{
    const posts = data.posts;
    return (
        <section className="section" id="blog">
            <div className="container mx-auto">
                <SectionHeader pretitle="Our Blog" title="Latest News" />
                {/* post list */}
                <PostList posts={posts} />
            </div>
        </section>
    )
}

export default Blog;