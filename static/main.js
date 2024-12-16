load_annoucement();

function load_annoucement() {
    //TODO: remove current existing annoucement then request php to
    // echo latest data from the Annoucement_Table in db 
}

function post_annoucement(){
    const text = document.getElementById("post-content").value;

    if(text) {
        let confirmation = window.confirm("Are You Sure You want to Post the Content?")

        if(confirmation) {
            const announcement_content = document.getElementById("announcement-content");

            const newAnnoucement = document.createElement("div")
            newAnnoucement.textContent = text
            newAnnoucement.className = "annoucement-text"
            announcement_content.appendChild(newAnnoucement);

            //TODO: fetch data to php to update Annoucement_Table in db 
            // and call for load_annoucement() 
        }
    }
    else{
        window.alert("Your Announcement Content Cannot Be Empty")
    }
}