import "./TopBar.css"

export default function TopBar(){

    return(
        <div className="Top">
            <div className="topLeft">
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-pinterest"></i>
            <i class="fab fa-instagram"></i>
            </div>            
            <div className="topCenter">
                <ul className="topList"></ul>
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
            </div>            
            <div className="topRight">R</div>            
            
        </div>

    )
}