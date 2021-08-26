// Profile edit popup's objects:
const popupWindow = document.querySelector(".popup");
const editButton = document.querySelector(".profile__edit-button");
const profileEditCloseButton = document.querySelector(".popup__close-button");
const form = document.querySelector(".popup__form");
const formNameInput = document.querySelector(".popup__form-input_field_name");
const formJobInput = document.querySelector(".popup__form-input_field_job");
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
const createPostForm = document.querySelector(".popup__form_type_new-post");
const postTitle = document.querySelector(".popup__form-input_field_title");
const postLink = document.querySelector(".popup__form-input_field_link");
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


//Create new gallery Item:

function createGalleryPost(name, link) {
    // Create post:
    const galleryItem = galleryTemplate.querySelector(".gallery__item").cloneNode(true);
    galleryItem.querySelector(".gallery__photo").src = link;
    galleryItem.querySelector(".gallery__photo").alt = name;
    galleryItem.querySelector(".gallery__text").textContent = name;

    // Event listener to trash button:
    const deleteButton = galleryItem.querySelector(".gallery__trash-button");
    deleteButton.addEventListener("click", function (evt) {
        const parentItem = evt.target.closest(".gallery__item");
        parentItem.remove();
    });

    //Event listener to like button:
    const likeButton = galleryItem.querySelector(".gallery__like-button");
    likeButton.addEventListener("click", function (evt) {
        const button = evt.target;
        button.classList.toggle("gallery__like-button_active");
    });

    //Event listener to photo popup:
    const galleryPhoto = galleryItem.querySelector(".gallery__photo");
    galleryPhoto.addEventListener("click", function () {
        photoPopup.classList.add("popup_opened");
        fullScreenPhoto.setAttribute("src", link);
        fullScreenPhoto.setAttribute("alt", name);
        popupPhotoDescription.textContent = name;
    });
    
    // Close new post's popup when submitting:
    newPostPopup.classList.remove("popup_opened");

    return galleryItem;
}

// Open profile edit's popup:
function openPopup() {
    popupWindow.classList.add("popup_opened");
    formNameInput.value = profileName.textContent;
    formJobInput.value = profileJobTitle.textContent;
}

//Close profile edit's popup:
function closePopup() {
    popupWindow.classList.remove("popup_opened");
}

// Submit profile edit's form:
function submitForm(evt) {
    evt.preventDefault();
    profileName.textContent = formNameInput.value;
    profileJobTitle.textContent = formJobInput.value;
    closePopup();
}

// Submit new post's form:
function submitPost(evt) {
    evt.preventDefault();

    // content validation:
    if (postTitle.valeue == "" || postLink.value == "") {
        alert("please insert image's title and link, or press the close button");
    } else {
        name = postTitle.value;
        link = postLink.value;
        galleryList.prepend(createGalleryPost(name, link));
    }
}


// Create first 6 posts:
initialGalleryItems.forEach(function (item) {
    return galleryList.append(createGalleryPost(item.name, item.link));
});

//Event listeners for profile edit:
editButton.addEventListener("click", openPopup);
profileEditCloseButton.addEventListener("click", closePopup);
form.addEventListener("submit", submitForm);

//Event listeners for adding a new post:
addPostButton.addEventListener("click", function () {
    newPostPopup.classList.add("popup_opened");
});
postCloseButton.addEventListener("click", function () {
    newPostPopup.classList.remove("popup_opened");
});
createPostForm.addEventListener("submit", submitPost);
closePhotoPopup.addEventListener("click", function () {
    photoPopup.classList.remove("popup_opened");
});
