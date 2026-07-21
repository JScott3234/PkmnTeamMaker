import PkmnMenu from './components/PkmnMenu.jsx'
import TeamMenu from './components/TeamMenu.jsx'
import DexMenu from './components/DexMenu.jsx'
import SearchBar from './components/SearchBar.jsx'
import Footer from './components/Footer.jsx'

function Maker(){
    return(
        <>
        <div className="container-fluid px-0"></div>
            <div className="text-light px-3 py-2">
                <h1>Team Maker</h1>
                <p>Build you a team</p>
            </div>

            <div className="row text-light bg-dark mx-0 text-center">
            <div className="col-sm-9 border container-fluid d-flex flex-column vh-100 px-0">
                <div className="h-50">
                    <PkmnMenu/>
                </div>
                <div className="h-50">
                    <TeamMenu/>
                </div>
            </div>

            <div className="col-sm-3 border-top border-bottom border-end vh-100">
                <SearchBar/>
                <DexMenu/>
            </div>
        </div>
            <Footer/>
        </>
    )
}

export default Maker;