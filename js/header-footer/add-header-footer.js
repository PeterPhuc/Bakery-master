const $ = document.querySelector.bind(document);
const header = $("header");
const footer = $("footer");

// console.log(header);

// console.log(footer);
async function getHeader() {
    fetch('./header-footer/header.html')
        .then(response => response.text())
        .then(data => {
            // console.log(data); // log the content of the file
            header.innerHTML = data;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}


async function getFooter() {
    fetch('./header-footer/footer.html')
        .then(response => response.text())
        .then(data => {
            // console.log(data); // log the content of the file
            footer.innerHTML = data;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

getHeader();
getFooter();