import { useRouteError, Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";

interface ErrorInterface {
    statusText: string;
    message: string;
    name: string;
}

const ErrorPage = () => {
  const error = useRouteError() as ErrorInterface;
  console.error({error});

  return (
    <>
    <div id="error-page" className={styles.container}>
      <div className={styles.childDiv}>
          <img src="/404.png" className={styles.imgStyle}/>
      </div>
      <div className={styles.errorImage}>
          <h1>Oh~ NO!</h1>
          <p>Unexpected {`${error.name}`} Occured!</p>
          <p>
              <i>{error.statusText} {error.message}</i>
          </p>
          <Link to={`/`}>
                        Press to Go to Home
                    </Link>
      </div>
      <div className={styles.childDiv}>
        <img src="/4042.png" className={styles.imgStyle} />
      </div>
    </div>
    <h1>
    "illustrations were drawn by Ddoza."
    </h1>
    </>
  );
}

export default ErrorPage;