import { addEntryToDb, clearAllEntries } from "../../database.js";

const addBioEventListeners = () => {
    const editBioForm = document.querySelector('.edit-bio-form');
    const editBioButton = document.querySelector('.edit-bio-button');
    const cancelFormButton = document.querySelector('.cancel-edit-bio');

    editBioButton.addEventListener('click', () => {
        editBioForm.style.display = 'block';
    })

    editBioForm.addEventListener('submit', () => {
        event.preventDefault()
        const bioName = document.querySelector('#bioName').value;
        const bioDescription = document.querySelector('#bioDescription').value;
        const bioNameOutput = document.querySelector('.name');
        const bioDescriptionOutput = document.querySelector('.about');
        bioNameOutput.innerText = bioName;
        bioDescriptionOutput.innerText = bioDescription;

        clearAllEntries('bio');
        addEntryToDb('bio', { bioName, bioDescription });
        editBioForm.style.display = 'none';
    })

    cancelFormButton.addEventListener('click', () => {
        editBioForm.style.display = 'none';
    })
}

const addPfpEventListeners = () => {
    const editPfpButton = document.querySelector('#pfpInput');

    editPfpButton.addEventListener('change', () => {
        const pfpreader = new FileReader();
        pfpreader.readAsDataURL(pfpInput.files[0]);

        pfpreader.addEventListener('load', () => {
            addEntryToDb('pfp',pfpreader.result);
        });

        clearAllEntries('pfp');
    })
}

export { addBioEventListeners, addPfpEventListeners }