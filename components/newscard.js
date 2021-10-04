import Image from "next/image";

export default function NewsCard(props) {
  return (
    <>
      <h2
        style={{ cursor: "pointer" }}
        onClick={() => (window.location.href = props?.url)}>
        {props?.title}
      </h2>
      <h4> {props?.author} </h4>
      <h6> {props?.publishedAt} </h6>
      {props?.img ? (
        // <img
        //   src={props?.img}
        //   height={"400px"}
        //   width={"500px"}
        //   alt={"news-img"}
        // />
        <Image
          src={props?.img}
          height={"400px"}
          width={"500px"}
          alt={"news-img"}
          layout={"intrinsic"}
        />
      ) : null}
      <p> {props?.description} </p>
    </>
  );
}
