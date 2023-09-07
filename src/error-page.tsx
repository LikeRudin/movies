import { useRouteError } from "react-router-dom";

interface ErrorInterface {
    statusText: string;
    message: string;
}

const ErrorPage = () => {
  const error = useRouteError() as ErrorInterface;
  console.error(error);

  const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const imgStyle = {
    alignSelf: "center",
    width: '15%',
  };

  return (
    <div id="error-page" style={divStyle as React.CSSProperties}>
    <div >
        <img src="/404.png" style={imgStyle}/>
        <img src="/4042.png" style={imgStyle} />
    </div>
    <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
    </div>
    </div>
  );
}

export default ErrorPage;