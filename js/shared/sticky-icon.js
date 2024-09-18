const stickyIcon = document.querySelector(".sticky-icon-zone");
async function getStickyIcon() {
    fetch('./shared/sticky-icon.xml')
        .then(response => response.text())
        .then(data => {
            // console.log(data); // log the content of the file
            stickyIcon.innerHTML = data;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

getStickyIcon();