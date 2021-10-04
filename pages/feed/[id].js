import NewsCard from "../../components/newscard";
import Pagination from "../../components/pagination";
import Toolbar from "../../components/toolbar";

export default function Feed(props) {
  const { feedID, feed, error } = props;
  const { title, url, description, author, publishedAt, urlToImage } = feed;
  return (
    <>
      <Toolbar />
      {!error?.status ? (
        <>
          <NewsCard
            url={url}
            title={title}
            description={description}
            publishedAt={publishedAt}
            author={author}
            img={urlToImage}
          />
          <Pagination />
        </>
      ) : (
        <h4> {"Feed ID " + feedID + " invalid!. " + error?.msg} </h4>
      )}
    </>
  );
}

export const getServerSideProps = async (context) => {
  if (context.params.id < 0 || context.params.id >= 20) {
    return {
      props: {
        feedID: context.params.id,
        error: {
          status: true,
          msg: "Can only access ID ranging from [0-19], both inclusive :)",
        },
        feed: {},
      },
    };
  }

  const newsAPI = `https://newsapi.org/v2/top-headlines?country=IN&category=business`;
  const apiData = await fetch(newsAPI, {
    headers: {
      Authorization: process.env.NEXT_PUBLIC_API_KEY,
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log("Error fetching news: ", err);
    });
  const { author, title, description, urlToImage, publishedAt, url } =
    apiData?.articles[context.params.id];
  return {
    props: {
      feedID: context.params.id,
      error: {
        status: false,
        msg: "",
      },
      feed: {
        author,
        title,
        description,
        urlToImage,
        url,
        publishedAt,
      },
    },
  };
};
