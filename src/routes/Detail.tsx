import { useLocation } from "react-router-dom";

const Detail = () => {
    const location = useLocation();
    console.log(location);
    const {name, thumbnail} = location.state.movie;
    return (
        <>
        {`${name}`}
        {thumbnail? <img src={`${thumbnail.path}.${thumbnail.extension}`}  />: null }
        </>
    )
    
  }
  export default Detail;
