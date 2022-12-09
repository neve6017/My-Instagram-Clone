import EditBioForm from "./EditBio.js";
import { getEntryFromDb } from "../../database.js";

const Bio = async () => {
    const userInfo = await getEntryFromDb('bio');
    return `
       <section class="bio">
            <div class="profile-photo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png" alt="profile-photo">
            </div>
            <div class="profile-info">
                <p class="name">${userInfo[0] ? userInfo[0].bioName : 'User name is unavailable'}</p>
                <p class="about">${userInfo[0] ? userInfo[0].bioDescription : 'User bio is unavailable'}</p>
                <button class="follow-button">Follow</button>
                <button class="edit-bio-button">Edit Profile</button>
            </div>
            ${EditBioForm()}
       </section>
    `
}

export default Bio;
//local storage has a limitation of 10MB