import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="" alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>title</h1>
        <div className={styles.detail}>
          <Image src="" alt="" fill className={styles.avatar} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>
              Jennifer lopez
            </span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              01.01.2024
            </span>
          </div>
        </div>
        <div className={styles.content}>desc</div>
      </div>
    </div>
  )
}

export default SinglePostPage
