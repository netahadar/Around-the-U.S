const popupWindow = document.querySelector(".popup");
const editButton = document.querySelector(".profile__edit-button");
const profileEditCloseButton = document.querySelector(".popup__close-button");
const form = document.querySelector(".popup__form");
const formNameInput = document.querySelector(".popup__form-input_field_name");
const formJobInput = document.querySelector(".popup__form-input_field_job");
const profileName = document.querySelector(".profile__name");
const profileJobTitle = document.querySelector(".profile__job-description");
const addPostButton = document.querySelector(".profile__add-button");
const newPostPopup = document.querySelector(".popup_type_post");
const postCloseButton = document.querySelector(".popup__close-button_type_post");
const createPostForm = document.querySelector(".popup__form_type_new-post");
const postTitle = document.querySelector(".popup__form-input_field_title");
const postLink = document.querySelector(".popup__form-input_field_link");
const galleryList = document.querySelector(".gallery__list");
const galleryTemplae = document.querySelector("#gallery-post").content;
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

function createGallery(myArray) {
    myArray.forEach(function (item) {
        const galleryItem = galleryTemplae.querySelector(".gallery__item").cloneNode(true);
        galleryItem.querySelector(".gallery__photo").src = item.link;
        galleryItem.querySelector(".gallery__photo").alt = item.name;
        galleryItem.querySelector(".gallery__text").textContent = item.name;
        galleryList.append(galleryItem);
    }
    );
}

function openPopup() {
    popupWindow.classList.add("popup_opened");
    formNameInput.value = profileName.textContent;
    formJobInput.value = profileJobTitle.textContent;
}

function closePopup() {
    popupWindow.classList.remove("popup_opened");
}

function formSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = formNameInput.value;
    profileJobTitle.textContent = formJobInput.value;
    closePopup();
}

function postSubmit(evt) {
    evt.preventDefault();
    const newArray = [];

    if (postTitle.valeue == "" || postLink.value == "") {
        alert("please insert image's title and link, or press the close button");
    } else {
        const postDetails = {
            name: postTitle.value,
            link: postLink.value
        }

        newArray.push(postDetails);
        createGallery(newArray);
        newPostPopup.classList.remove("popup_opened");
    }
}



createGallery(initialGalleryItems);
editButton.addEventListener("click", openPopup);
profileEditCloseButton.addEventListener("click", closePopup);
addPostButton.addEventListener("click", function () {
    newPostPopup.classList.add("popup_opened");
});
postCloseButton.addEventListener("click", function () {
    newPostPopup.classList.remove("popup_opened");
});
form.addEventListener("submit", formSubmit);
createPostForm.addEventListener("submit", postSubmit);
