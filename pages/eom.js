import Toolbar from "../components/toolbar";

export default function EOM({ employee }) {
  return (
    <div>
      <Toolbar />
      <div>
        <h1> {"Employee of the Month"} </h1>
        <h3> {employee?.name} </h3>
        <h6> {employee?.position} </h6>
        <img src={employee?.image} alt={"emp-image"} />
        <p> {employee?.description} </p>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const apiURL =
    "https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth";
  const apiRes = await fetch(apiURL)
    .then((res) => res.json())
    .catch((err) => {
      console.log("Error :", err);
    });
  return {
    props: {
      employee: apiRes,
    },
  };
};
