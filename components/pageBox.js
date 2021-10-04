import { useRouter } from "next/dist/client/router";
import boxStyles from "../styles/pagination.module.css";

export default function PageBox({ num }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/feed/${num - 1}`)}
      className={boxStyles.paginationBox}>
      {num}
    </div>
  );
}
