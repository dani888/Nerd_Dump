import { Link} from 'react-router-dom'



function Games(props) {
    return (
      <div className="homer">
       <h1>Games Page</h1>
        <Link to ="/games/breakout">
          <div>Breakout</div>
        </Link>
      </div>
    )
  }
    
  export default Games;