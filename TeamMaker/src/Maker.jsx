import PkmnMenu from './PkmnMenu.jsx'
import TeamMenu from './TeamMenu.jsx'

function Maker(){
    return(
        // no idea why root has a nullspace between the banner and the page content
        <>
            <div className="container-fluid text-light bg-dark px-0">
                <h1>Team Maker</h1>
                <p>Build you a team</p>
            </div>

            <div className="row text-light bg-dark px-0 text-center">
            <div className="col-sm-9 border container-fluid flex-column vh-100 px-0">
                <div className="container-fluid border-bottom h-50">
                    <PkmnMenu/>
                </div>
                <div className="container-fluid h-50">
                    <TeamMenu/>
                </div>
            </div>

            <div className="col-sm-3 border-top border-bottom flex-column vh-100">
                Search Bar w/ Full pokedex
            </div>
        </div>
        </>
    )
}

export default Maker;