function changeContent(game) {
    let contentArea = document.getElementById('description');
    if (game === 'bellflower') {
        contentArea.innerHTML = `
        <div class="text-description">
            <h1>Bell Flower</h1>
            <p>     
                saepe deserunt! Iure veniam nihil reiciendis sed ducimus 
                impedit commodi accusamus, placeat harum officia at, architecto ab beatae, error provident.
                s, placeat harum officia at, architecto ab beatae, error provident.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente velit
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente velit
                saepe deserunt! Iure veniam nihil reiciendis sed ducimus 
                impedit commodi accusamu
            </p>
            <a href="">https//www.itch.io/jueguito1</a>
        </div>
        <div class="screenshots">
            <img src="bf-screenshot-1.png" alt="">
            <img src="bf-screenshot-2.png" alt="">
            <img src="bf-screenshot-3.png" alt="">
            <img src="bf-screenshot-4.png" alt="">
        </div>
        `;
    } else if (game === 'dudeney') {
        contentArea.innerHTML = `
        <div class="text-description">
            <h1>Dudeney</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente velit
                saepe deserunt! Iure veniam nihil reiciendis sed ducimus 
                impedit commodi accusamusaepe deserunt! Iure veniam nihil reiciendis sed ducimus 
                impedit commodi accusamus, placeat harum officia at, architecto ab beatae, error provident.
                s, placeat harum officia at, architecto ab beatae, error provident.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente velit
            </p>
            <a href="">https//www.itch.io/jueguito2</a>
        </div>
        <div class="screenshots">
        <img src="ddn-screenshot-2.png">
        <img src="ddn-screenshot-3.png">
        <img src="ddn-screenshot-1.png">
        </div>
        `;
    } else if (game === 'calesita') {
        contentArea.innerHTML = `
        <div class="text-description">
            <h1>Calesita</h1>
            <p>
                impedit commodi accusamusaepe deserunt! Iure veniam nihil reiciendis sed ducimus 
                impedit commodi accusamus, placeat harum officia at, architecto ab beatae, error provident.
                s, placeat harum officia at, architecto ab beatae, error provident.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente velit
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente velit
                saepe deserunt! Iure veniam nihil reiciendis sed ducimus 
            </p>
            <a href="">https//www.itch.io/jueguito3</a>
        </div>
        <div class="screenshots">
            <img src="clst-screenshoot-1.png">
            <img src="clst-screenshoot-2.png">
        </div>
        `;
    } else if (game === 'steps') {
        contentArea.innerHTML = `
        <div class="text-description">
            <h1>Steps</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente velit
                saepe deserunt! Iure veniam nihil reiciendis sed ducimus 
                impedit commodi accusamus, placeat harum officia at, architecto ab beatae, error provident.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente velit
                saepe deserunt! Iure veniam nihil reiciendis sed ducimus 
                impedit commodi accusamus, placeat harum officia at, architecto ab beatae, error provident.
            </p>
            <a href="">https//www.itch.io/jueguito4</a>
        </div>
        <div class="screenshots">
            <img src="stp-screenshot-1.png">
            <img src="stp-screenshot-2.png">
        </div>
        `;

    }
}
