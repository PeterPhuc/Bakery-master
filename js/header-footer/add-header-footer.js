const $ = document.querySelector.bind(document);
const header = $("header");
const footer = $("footer");

const categoryMenusidebar = [
    {
        title: "Trang chủ",
        lv: 0,
        link: "index.html",
    },
    {
        title: "Sản phẩm",
        lv: 0,
        link: "product.html",
        submenu: [
            {
                title: "Bánh bông lan",
                lv: 1,
                link: "product-detail.html",
                submenu: [
                    {
                        title: "Bông lan trứng muối",
                        lv: 2,
                        link: "product-detail.html",
                    }
                ]
            },
            {
                title: "Bánh nướng",
                lv: 1,
                link: "product-detail.html",
            },
            {
                title: "Bánh kem",
                lv: 1,
                submenu: [
                    {
                        title: "Bánh kem bắp",
                        lv: 2,
                        link: "product-detail.html",
                    },
                    {
                        title: "Bánh kem bắp",
                        lv: 2,
                        link: "product-detail.html",
                    },
                    {
                        title: "Bánh kem bắp",
                        lv: 2,
                        link: "product-detail.html",
                    },
                    {
                        title: "Bánh kem bắp",
                        lv: 2,
                        link: "product-detail.html",
                    },
                    {
                        title: "Bánh kem bắp",
                        lv: 2,
                        link: "product-detail.html",
                    },
                    {
                        title: "Bánh kem bắp",
                        lv: 2,
                        link: "product-detail.html",
                    },
                    {
                        title: "Bánh kem thường",
                        lv: 2,
                        link: "product-detail.html",
                        submenu: [
                            {
                                title: "Bánh kem dâu",
                                lv: 3,
                                link: "product-detail.html",
                            },
                            {
                                title: "Bánh kem hình trứng gà",
                                lv: 3,
                                link: "product-detail.html",
                            }
                        ]
                    },
                    {
                        title: "Bánh kem thường và hoa",
                        lv: 2,
                        link: "product-detail.html",
                        submenu: [
                            {
                                title: "Bánh kem giỏ hoa hồng",
                                lv: 3,
                                submenu: [
                                    {
                                        title: "Hoa hồng trắng nơ đỏ",
                                        lv: 4,
                                        link: "product-detail.html",
                                    },
                                    {
                                        title: "Hoa hồng tím",
                                        lv: 4,
                                        link: "product-detail.html",
                                    }
                                ]
                            },
                            {
                                title: "Bánh kem cây xương rồng",
                                lv: 3,
                                link: "product-detail.html",
                            }
                        ]
                    }
                ]
            },
        ]
    },
    {
        title: "Bánh sinh nhật",
        lv: 0,
        submenu: [
            {
                title: "Bánh sinh nhật bé trai",
                lv: 1
            },
            {
                title: "Bánh sinh nhật bé gái",
                lv: 1
            },
            {
                title: "Bánh kem dành cho Nam",
                lv: 1
            },
            {
                title: "Bánh kem dành cho Nữ",
                lv: 1
            }
        ]
    },
    {
        title: "Giới thiệu",
        lv: 0,
        link: "gioi-thieu.html",
    },
    {
        title: "Hệ thống cửa hàng",
        lv: 0,
        link: "cua-hang.html",
    },
    {
        title: "Tin tức",
        lv: 0,
        link: "news.html",
    }
];

let templateHeaderMenu = ``;
function RenderMenuHeaderDesktop(array, lv) {
    switch (lv) {
        case 0:
            templateHeaderMenu += `
                            <ul class="nav-list">
                        `;
            break;
        case 1:
            templateHeaderMenu += `
                            <div class="nav-submenu nav-submenu--lv-1">
                                <ul class="nav-submenu__nav-list">
                        `;
            break;
        default:
            templateHeaderMenu += `
                            <div class="nav-submenu nav-submenu--lv-nested">
                                <ul class="nav-submenu__nav-list">
                        `;
            break;
    }

    for (let i = 0; i < array.length; i++) {
        switch (lv) {
            case 0:
                templateHeaderMenu += `
                                <li class="nav-item">
                                    <a href="${array[i].link}" class="nav-link" title="${array[i].title}">${array[i].title}</a>
                            `;
                if (array[i].submenu) {
                    RenderMenuHeaderDesktop(array[i].submenu, array[i].lv + 1);
                }
                templateHeaderMenu += `</li>`;
                break;
            default:
                templateHeaderMenu += `
                                <li class="nav-submenu-li">
                                    <a class="submenu-item" href="${array[i].link}">${array[i].title}
                            `;
                if (array[i].submenu) {
                    templateHeaderMenu += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></a>`;
                    RenderMenuHeaderDesktop(array[i].submenu, array[i].lv + 1);
                } else {
                    templateHeaderMenu += `</a>`;
                }
                templateHeaderMenu += `</li>`;
                break;
        }
    }

    switch (lv) {
        case 0:
            templateHeaderMenu += `</ul>`;
            break;
        default:
            templateHeaderMenu += `
                                </ul>
                            </div>
                        `;
            break;
    }
}



let templateSideBarHeaderMenu = `<ul class="nav-list">`;
function RenderMenuHeaderMobile(array, currentIndex) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].submenu) {
            let id = currentIndex + "" + i;
            templateSideBarHeaderMenu += `
                <li class="nav-item">
                    <a href="${array[i].link}" class="nav-link" title="${array[i].title}">${array[i].title}</a>
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#${id}" aria-expanded="false" aria-controls="${id}">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                    </button>
            `;

            templateSideBarHeaderMenu += `<ul class="nav-list nav-submenu accordion-collapse collapse" id="${id}">`;
            RenderMenuHeaderMobile(array[i].submenu, currentIndex + "" + i);
            templateSideBarHeaderMenu += `</ul>`
        } else {
            templateSideBarHeaderMenu += `
                <li class="nav-item">
                    <a href="${array[i].link}" class="nav-link" title="${array[i].title}">${array[i].title}</a>
            `;
        }
        templateSideBarHeaderMenu += `</li>`;
    }
}



async function getHeader() {
    fetch('./header-footer/header.xml')
        .then(response => response.text())
        .then(data => {
            // console.log(data); // log the content of the file
            header.innerHTML = data;

            const menu_mobileIcon = document.querySelector(".nav-mobile-icon");
            const navbarWrapper = document.querySelector(".nav-wrapper");
            const overlay = document.querySelector("span.overlay");
            const btnClose = document.querySelector(".btn-close");

            function handleClass(state1, state2) {
                menu_mobileIcon.classList.toggle("show");
                navbarWrapper.classList.add(state1);
                navbarWrapper.classList.remove(state2);
            }

            menu_mobileIcon.addEventListener('click', function () {
                handleClass('open', 'close')
            });
            btnClose.addEventListener('click', function () {
                handleClass('close', 'open')
            });
            overlay.addEventListener('click', function () {
                handleClass('close', 'open')
            });

            const navHeaderDesktop = document.querySelector(".header-wrapper .nav-container nav.nav");
            RenderMenuHeaderDesktop(categoryMenusidebar, 0);
            navHeaderDesktop.innerHTML = templateHeaderMenu;
            


            RenderMenuHeaderMobile(categoryMenusidebar, "");
            templateSideBarHeaderMenu += `</ul>`;
            const navMobile = document.querySelector(".nav-mobile-container .nav-mobile-main nav.nav");
            navMobile.innerHTML = templateSideBarHeaderMenu;

        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}


async function getFooter() {
    fetch('./header-footer/footer.xml')
        .then(response => response.text())
        .then(data => {
            // console.log(data);
            footer.insertAdjacentHTML("beforeend", data);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

getHeader();
getFooter();





// (0, 'Sản phẩm', 0, 0),
// (1, 'Bánh bông lan', 0, 1),
// (2, 'Bông lan trứng muối', 1, 2),
// (3, 'Bánh nướng', 0, 1),
// (4, 'Bánh kem', 0, 1),
// (5, 'Bánh kem bắp', 4, 2),
// (6, 'Bánh kem thường', 4, 2),
// (7, 'Bánh kem dâu', 6, 3),
// (8, 'Bánh kem hình trứng gà', 6, 3),
// (9, 'Bánh kem thường và hoa', 4, 2),
// (10, 'Bánh kem giỏ hoa hồng', 9, 3),
// (11, 'Hoa hồng trắng nơ đỏ', 10, 4),
// (12, 'Hoa hồng tím', 10, 4),
// (13, 'Bánh kem cây xương rồng', 9, 3),
// (14, 'Bánh sinh nhật', 0, 0),
// (15, 'Bánh sinh nhật bé trai', 14, 1),
// (16, 'Bánh sinh nhật bé gái', 14, 1),
// (17, 'Bánh kem dành cho Nam', 14, 1),
// (18, 'Bánh kem dành cho Nữ', 14, 1);






















