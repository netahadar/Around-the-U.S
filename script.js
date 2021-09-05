// Edit profile popup's objects:
const profilePopup = document.querySelector(".popup_type_profile");
const editButton = document.querySelector(".profile__edit-button");
const profileEditCloseButton = document.querySelector(".popup__close-button");
const profileForm = document.forms.profile;
const formNameInput = profileForm.elements.name;
const formJobInput = profileForm.elements.job;
const profileName = document.querySelector(".profile__name");
const profileJobTitle = document.querySelector(".profile__job-description");

// Full sized photo popup's objects:
const photoPopup = document.querySelector(".popup_type_photo");
const fullScreenPhoto = document.querySelector(".popup__photo");
const popupPhotoDescription = document.querySelector(".popup__text");
const closePhotoPopup = document.querySelector(".popup__close-button_type_photo");

// New post popup's objects:
const addPostButton = document.querySelector(".profile__add-button");
const newPostPopup = document.querySelector(".popup_type_post");
const postCloseButton = document.querySelector(".popup__close-button_type_post");
const createPostForm = document.forms.post;
const postTitle = createPostForm.elements.title;
const postLink = createPostForm.elements.link;
const galleryList = document.querySelector(".gallery__list");
const galleryTemplate = document.querySelector("#gallery-post").content;
const initialGalleryItems = [
    {
        name: "Huntington beach",
        link: "./blocks/images/huntington-beach.jpg"
    },
    {
        name: "Vermont",
        link: "./blocks/images/vermont.jpg"
    },
    {
        name: "Mount Rainier Washington",
        link: "./blocks/images/mount-Rainier-washington.jpg"
    },
    {
        name: "San Fransisco",
        link: "./blocks/images/san-francisco.jpg"
    },
    {
        name: "Sedona",
        link: "./blocks/images/sedona.jpg"
    },
    {
        name: "Montauk beach",
        link: "./blocks/images/montauk.jpg"
    },
]


//Create a new gallery Item:

function createGalleryPost(name, link) {
    // Clone gallery template:
    const galleryItem = galleryTemplate.querySelector(".gallery__item").cloneNode(true);
    const galleryPhoto = galleryItem.querySelector(".gallery__photo")
    galleryPhoto.setAttribute("src", link);
    galleryPhoto.setAttribute("alt", name);
    galleryItem.querySelector(".gallery__text").textContent = name;
    //Create event listener to like button of the new post:
    const likeButton = galleryItem.querySelector(".gallery__like-button");
    likeButton.addEventListener("click", likePost);
    // Create event listener to trash button of the new post: 
    const deleteButton = galleryItem.querySelector(".gallery__trash-button");
    deleteButton.addEventListener("click", deletePost);
    //Create event listener to the photo of the new post:
    galleryPhoto.addEventListener("click", openPhoto);
    //return the new post to append/prepand:    
    return galleryItem;
}

// Open popup's event handler:
function openPopup(popupWindow) {
    popupWindow.classList.add("popup_opened");
}

//Close popup's event handler:
function closePopup(popupWindow) {
    popupWindow.classList.remove("popup_opened");
}

//Open profile popup's event handler:
function openProfilePopup() {
    openPopup(profilePopup);
    //Display current profile information in form fields:
    formNameInput.value = profileName.textContent;
    formJobInput.value = profileJobTitle.textContent;
}

// Submit edit profile form's handler:
function submitForm(evt) {
    evt.preventDefault();
    //Applay new input to the profile:
    profileName.textContent = formNameInput.value;
    profileJobTitle.textContent = formJobInput.value;
    //close popup after submit:
    closePopup(profilePopup);
}

// Submit new post form's handler:
function submitPost(evt) {
    evt.preventDefault();

    //create new post:
    const name = postTitle.value;
    const link = postLink.value;
    galleryList.prepend(createGalleryPost(name, link));
    //close popup:
    closePopup(newPostPopup);
    createPostForm.reset();
}

//Create event listener for closing popups by clicking the overlay:
function createOverlayEventListener() {
    const popupList = Array.from(document.querySelectorAll(".popup"));
    popupList.forEach(popup => {
        popup.addEventListener("click", () => closePopup(popup));
    })
}


// Like button's handler:
function likePost(evt) {
    evt.preventDefault();
    const button = evt.target;
    button.classList.toggle("gallery__like-button_active");
}


//Delete button's handler:
function deletePost(evt) {
    evt.preventDefault();
    let parentItem = evt.currentTarget.parentElement;
    parentItem.remove();
    parentItem = null;
}

//Full sized photo popup's handler:
function openPhoto(evt) {
    evt.preventDefault();
    const target = evt.target;
    const link = target.src;
    const name = target.alt;
    openPopup(photoPopup);
    //Set the image to be displayed:
    fullScreenPhoto.setAttribute("src", link);
    fullScreenPhoto.setAttribute("alt", name);
    popupPhotoDescription.textContent = name;
}


// Create first 6 posts:
initialGalleryItems.forEach(item => {
    galleryList.append(createGalleryPost(item.name, item.link));
});

//Event listeners for edit profile:
editButton.addEventListener("click", openProfilePopup);
profileEditCloseButton.addEventListener("click", () => closePopup(profilePopup));
profileForm.addEventListener("submit", submitForm);

//Event listeners for adding a new post:
addPostButton.addEventListener("click", () => openPopup(newPostPopup));
postCloseButton.addEventListener("click", () => closePopup(newPostPopup));
createPostForm.addEventListener("submit", submitPost);


//Event listener to photo popup:
//(This popup opening listener is set at the createGalleryItem function)
closePhotoPopup.addEventListener("click", () => closePopup(photoPopup));

//Call function that sets event listeners for the popups
createOverlayEventListener();