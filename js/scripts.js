const showNames = ["show 1", "show 2", "show3"];

const test = document.getElementById("test");

const card = `<div class="card" style="width: 18rem;">
  <img src="https://static.tvmaze.com/uploads/images/original_untouched/82/206980.jpg" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">${showNames[0]}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;

// test.append(card);

function addCards(shows) {
  let allCards = "";
  for (let index = 0; index < showNames.length; index++) {
    allCards += `<div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
    <div class="card h-100 shadow">
        <h6 class="card-header">
            <a href="showDetail.html" class="text-decoration-none text-nowrap d-block">
                ${shows[index]}
            </a>
        </h6>
        <div class="card-img-top">
            <a href="showDetail.html" class="text-decoration-none text-nowrap d-block">
                <div class="row m-0 p-0">
                    <div class="col m-0 p-0">
                        <img src="https://static.tvmaze.com/uploads/images/original_untouched/0/2400.jpg"
                            class="d-block w-100">
                    </div>
                </div>
            </a>
        </div>
        <div class="card-body p-0 m-0">
            <p class="card-genre text-center px-0 m-0 py-1">Drama, Crime, Thriller</p>
        </div>
        <div class="card-footer">
            <a href="showDetail.html" class="text-decoration-none text-nowrap d-block">
                <i class="bi bi-card-list"></i> Details
            </a>
            <a href="#" class="text-decoration-none text-nowrap d-block" data-bs-toggle="modal"
                data-bs-target="#selectList">
                <i class="bi bi-plus-square"></i> Add to list
            </a>
        </div>
    </div>
</div>`;
  }
  test.innerHTML = allCards;
}

addCards(showNames);
