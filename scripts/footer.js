import { footerContent } from './contents/footerContent.js';
window.addEventListener("DOMContentLoaded", () => {
    renderFooter(footerContent);
});

function renderFooter(contents) {
    const footerContainer = document.querySelector(".footer");
    let footerContent = `
        <div class="row">
            <div class="col-md-3 col-sm-5 d-flex flex-column text-center my-5">
                <p><a href="./index.html" class=" ">${contents[0].title}</a></p>
                <p><a href="./about.html" class="">${contents[0].link1}</a></p>
                <p><a href="./team.html" class="">${contents[0].link2}</a></p>
                <p><a href="./index.html" class="">${contents[0].link3}</a></p>
            </div>
            <div class="col-md-3 col-sm-5 text-center my-5">
                <p><a href="#" class="">${contents[1].title}</a></p>
                <p><a href="./webDevelopment.html" class="">${contents[1].link1}</a></p>
                <p><a href="./mobileApp.html" class="">${contents[1].link2}</a></p>
                <p><a href="./softwareEngineering.html" class="">${contents[1].link3}</a></p>
            </div>
            <div class="col-md-3 col-sm-5 text-center my-5">
                <p><a href="#" class="">${contents[2].title}</a></p>
                <p><a href="#" class="">${contents[2].link1}</a></p>
                <p><a href="#" class="">${contents[2].link2}</a></p>
                <p><a href="#" class="">${contents[2].link3}</a></p>
            </div>
            <div class="col-md-3 col-sm-5 text-center my-5">
                <p><a href="#" class="">${contents[3].title}</a></p>
                <p><a href="#" class="">${contents[3].link1}</a></p>
                <p><a href="#" class="">${contents[3].link2}</a></p>
                <p><a href="#" class="">${contents[3].link3}</a></p>
            </div>
        </div>
        <div class="row bg-dark">
            <div>
                <h3 class="text-white text-center">Powered by EM956 Community</h3>
            </div>
        </div>
    `;

    footerContainer.innerHTML = footerContent;
}