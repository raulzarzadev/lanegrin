import PROJECT_INFO from "CONSTANTS/PROJECT_INFO";

const News = () => {
  const posts = PROJECT_INFO.news.latestPosts;
  return (
    <div>
      <h2>Ultimas noticias</h2>
      <div className="grid gap-2 grid-flow-col overflow-auto  p-2 shadow-inner max-h-60 ">
        {posts.map((post) => (
          <div key={post} className="">
            <div className="fb-post " data-href={post}></div>
          </div>
        ))}
      </div>

      <script
        async
        defer
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"
      ></script>
    </div>
  );
};
export default News;
