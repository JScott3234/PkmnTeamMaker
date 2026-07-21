

function PkmnMenu(){
    return(
        <>
        <div className="row vh-50 mx-0">
        <div className="col-md-4 border overflow-auto" style={{ height: '22.9rem', maxHeight: '22.9rem' }}>
            <h2>IV/EV Edit Menu</h2>
        </div>
        <div className="col-md-4 border overflow-auto" style={{ height: '22.9rem', maxHeight: '22.9rem' }}>
            <h2>Pkmn Sprite View</h2>
            <img src="" id="pkmn-sprite" alt="Pokemon Sprite"></img>
        </div>
        <div className="col-md-4 border overflow-auto" style={{ height: '22.9rem', maxHeight: '22.9rem' }}>
            <h2>Move Selection Menu</h2>
        </div>
        </div>
        </>
    )
} 

export default PkmnMenu;