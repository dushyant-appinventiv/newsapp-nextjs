import PageBox from "./pageBox";
import styles from "../styles/pagination.module.css";

function getBox() {
  let componentArr = [];
  for (let i = 0; i < 20; i++) {
    componentArr.push(<PageBox num={i + 1} key={i} />);
  }
  return componentArr;
}

export default function Pagination() {
  return <div className={styles.paginationBar}>{getBox()}</div>;
}
