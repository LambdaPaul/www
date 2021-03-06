import Layout from '../../components/layout';
import { getAllPosts, getPost } from '../../util/slug';
import ReactMarkdown from 'react-markdown';
import style from '../../styles/post.module.css';

function Post({ post }: any) { // eh
    return (<>
        <Layout name={post.title} title={post.title} ancestors={[{ name: 'Posts', path: 'posts' }]}>
            {post.cover
                && <div className={style.imageBlock} style={{ backgroundImage: `url(/assets/images/${post.cover})` }}></div>}
            <div className={style.spacer}></div>
            <section className={`${style.block} block`}>
                <ReactMarkdown>{post.content}</ReactMarkdown>
            </section>
            <div className={style.spacer}></div>
        </Layout>

    </>
    );
}

export async function getStaticProps({ params }: any) {
    const post = getPost(params.page);

    return {
        props: { post }
    };
}

export async function getStaticPaths() {
    const posts = getAllPosts();
    return {
        paths: posts.map((post: any) => {
            return {
                params: {
                    page: post.slug
                }
            }
        }),
        fallback: false
    };
}


export default Post;
