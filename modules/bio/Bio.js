import EditBioForm from "./EditBio.js";
import { getEntryFromDb } from "../../database.js";

const Bio = async () => {
    const userInfo = await getEntryFromDb('bio');
    const userPfp = await getEntryFromDb('pfp');
    return `
       <section class="bio">
            <div class="profile-photo">
                <img src= ${userPfp[0]} alt="profile-photo">
            </div>
            <div class="profile-info">
                <p class="name">${userInfo[0] ? userInfo[0].bioName : 'User name is unavailable'}</p>
                <p class="about">${userInfo[0] ? userInfo[0].bioDescription : 'User bio is unavailable'}</p>
                <button class="follow-button" id="follow-button">Follow</button>
                <button class="edit-bio-button">Edit Profile</button>
                <input type="file" name="pfp" id="pfpInput">
                <input type="button" class="edit-pfp-button" onclick="document.getElementById('pfpInput').click()" value="Edit Photo">
                <script src="./modules/bio/FollowButton.js"></script>
            </div>
            ${EditBioForm()}
       </section>
    `
}

export default Bio;
//local storage has a limitation of 10MB