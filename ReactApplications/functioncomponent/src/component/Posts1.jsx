import useFetchData from "../hooks/fetchDataHook1";
const Posts = () => {
    const URL = "https://jsonplaceholder.typicode.com/posts";
    const postData = useFetchData(URL);
    return(
        <>
            <h2>Fetch Posts</h2>
            {postData?.map(post => 
                <div key ={post.id}>
                    <h4>{post.title}</h4>
                    <p> {post.body} </p>
                    <hr />
                </div>
            )}
        </>
    )
}

export default Posts