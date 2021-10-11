import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
    return (
        <div className ="settings">
            <div className="settingsWrapper"></div>
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update your cout</span>
                <span className="settingsUpdateTitle">Delete your count</span>
            </div>
            <Sidebar/>
        </div>
    )
}
