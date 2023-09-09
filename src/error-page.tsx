import { useRouteError } from "react-router-dom";

interface ErrorInterface {
    statusText: string;
    message: string;
    name: string;
}

const ErrorPage = () => {
  const error = useRouteError() as ErrorInterface;
  console.error({error});

  const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const imgStyle = {
    width: `100%`
  };

  const childDivStyle = {
    width: `33%`,
  }

  return (
    <>
    <div id="error-page" style={divStyle as React.CSSProperties}>
      <div style={childDivStyle}>
          <img src="/404.png" style={imgStyle}/>
      </div>
      <div style={childDivStyle}>
          <h1>Oh~ NO!</h1>
          <p>Unexpected {`${error.name}`} Occured!</p>
          <p>
              <i>{error.statusText} {error.message}</i>
          </p>
      </div>
      <div style={childDivStyle}>
        <img src="/4042.png" style={imgStyle} />
      </div>
    </div>
    <h1>
    "illustrations were drawn by Ddoza."
    </h1>
    </>
  );
}

export default ErrorPage;