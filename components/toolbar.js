import { useRouter } from "next/dist/client/router";
import styles from "../styles/toolbar.module.css";

export default function Toolbar() {
  const router = useRouter();
  return (
    <div className={styles.toolBar}>
      <div className={styles.toolLink} onClick={() => router.push("/")}>
        {"Home"}
      </div>
      <div className={styles.toolLink} onClick={() => router.push("/feed/0")}>
        {"Feed"}
      </div>
      <div className={styles.toolLink} onClick={() => router.push("/eom")}>
        {"EOM"}
      </div>
    </div>
  );
}
