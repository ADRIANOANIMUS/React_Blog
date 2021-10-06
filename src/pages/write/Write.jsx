import "./write.css"

export default function Write() {
    return (
        <div className = "write">
            <form className ="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i class="fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none" }}/>
                    <input type="text" placeholder ="Title" className ="writeIput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder ="Tell your story..." type ="text" className ="writeIput writeText">

                    </textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
