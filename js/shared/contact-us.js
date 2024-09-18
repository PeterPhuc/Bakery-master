const contactUs = document.querySelector(".section-collection.home-contact-us");
async function getContactUs() {
    fetch('./shared/contact-us.xml')
        .then(response => response.text())
        .then(data => {
            // console.log(data); // log the content of the file
            contactUs.innerHTML = data;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

// getContactUs();