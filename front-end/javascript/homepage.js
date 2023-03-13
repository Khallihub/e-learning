const email = JSON.parse(localStorage.getItem("email"));
let accessToken = JSON.parse(localStorage.getItem(email))[0].access_token;
let courses = [];
let size;
let enrolledCourses = JSON.parse(localStorage.getItem(email))[1];
console.log(enrolledCourses);
async function getCourse() {
  let response = await fetch("http://127.0.0.1:3000/courses/getCourses", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  let data = await response.json();
  courses.push(data);
  if (courses[0]?.statusCode == 401){
    window.open('login.html', '_self')
  }
  localStorage.setItem('courses', JSON.stringify(data))
  size = courses[0].length;
  let arr = myRandomInts(3, size);
  let arr2 = myRandomInts(3, size);
  console.log(arr, arr2);
  renderCourses(arr, arr2, courses);
}
getCourse();
let courseName
try {
  document.getElementById('cont').addEventListener('click', function(event) {
    // Check if the clicked element is a descendant of the parent element
    if (event.target.closest('div[id]')) {
      // Get the ID of the parent element
      const parentID = event.target.closest('div[id]').id;
      localStorage.setItem('course', parentID)
      courseName = parentID
    }
    
    if (courseName){
      window.open('learn.html', '_self')
    }
  });
} catch (error) {
  console.error(error);
}

function myRandomInts(quantity, max) {
  const arr = [];
  while (arr.length < quantity) {
    var candidateInt = Math.floor(Math.random() * max) + 1;
    if (arr.indexOf(candidateInt) === -1) arr.push(candidateInt);
  }
  return arr;
}

async function renderCourses(arr, arr2, courses) {
  let inphtmltrend = `<h1>Trending Courses</h1>
          <div
            class="d-flex flex-md-nowrap flex-sm-wrap flex-wrap justify-content-evenly align-items-center bg-secondary"
          >
            <div class="d-flex" >
              <div id="${await courses[0][arr[0] - 1]?.Name}">
                <a href="#trend">
                  <div class="card m-2 p-3">
                    <img
                      class="w-100"
                      src="images/video.png"
                      alt="thumbnail for the video"
                    />
                    <h2 class="card-title text-black">${await courses[0][
                      arr[0] - 1
                    ]?.Name}</h2>
                    <p class="card-text text-dark">
                    ${await courses[0][arr[0] - 1]?.desciption}
                    </p>
                  </div>
                </a>
              </div>
              <div id="${await courses[0][
                arr[1] - 1
              ]?.Name}"
                class="d-lg-none d-xl-none d-xxl-none d-md-none d-sm-block d-none"
              >
                <a href="#trend">
                  <div class="card m-2 p-3">
                    <img
                      class="w-100"
                      src="images/video.png"
                      alt="thumbnail for the video"
                    />
                    <h2 class="card-title text-black">${await courses[0][
                      arr[1] - 1
                    ]?.Name}</h2>
                    <p class="text-dark card-text">
                    ${await courses[0][arr[1] - 1]?.desciption}
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div class="d-flex">
              <div id="${await courses[0][
                arr[2] - 1
              ]?.Name}">
                <a href="#trend">
                  <div class="card m-2 p-3">
                    <img
                      class="w-100"
                      src="images/video.png"
                      alt="thumbnail for the video"
                    />
                    <h2 class="card-title text-black">${await courses[0][
                      arr[2] - 1
                    ]?.Name}</h2>
                    <p class="card-text text-dark">
                    ${await courses[0][arr[2] - 1]?.desciption}
                    </p>
                  </div>
                </a>
              </div>
              <div
                class="d-lg-none d-xl-none d-xxl-none d-md-none d-sm-block d-none invisible"
              >
                <a href="#trend">
                  <div class="card m-2 p-3">
                    <img
                      class="w-100"
                      src="images/video.png"
                      alt="thumbnail for the video"
                    />
                    <h2 class="card-title text-black">TITLE</h2>
                    <p class="text-dark card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div
              class="d-flex d-block d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block"
            >
              <div id="${await courses[0][
                arr[1] - 1
              ]?.Name}">
                <a href="#trend">
                  <div class="card m-2 p-3">
                    <img
                      class="w-100"
                      src="images/video.png"
                      alt="thumbnail for the video"
                    />
                    <h2 class="card-title text-black">${await courses[0][
                      arr[1] - 1
                    ]?.Name}</h2>
                    <p class="card-text text-dark">
                    ${await courses[0][arr[1] - 1]?.desciption}
                    </p>
                  </div>
                </a>
              </div>
              <div
                class="d-lg-none d-xl-none d-xxl-none d-md-none d-sm-block d-none"
              >
                <a href="#trend">
                  <div class="card m-2 p-3">
                    <img
                      class="w-100"
                      src="images/video.png"
                      alt="thumbnail for the video"
                    />
                    <h2 class="card-title text-black">TITLE</h2>
                    <p class="text-dark card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        `;
  document.getElementById("trend").innerHTML = inphtmltrend;

  let inphtmlinterestedin = ` <h1>You may be interested in</h1>
                <div
                  class="d-flex flex-md-nowrap flex-sm-wrap flex-wrap justify-content-evenly align-items-center bg-secondary"
                >
                  <div class="d-flex">
                    <div id="${await courses[0][
                      arr2[0] - 1
                    ]?.Name}">
                      <a href="#trend">
                        <div class="card m-2 p-3">
                          <img
                            class="w-100"
                            src="images/video.png"
                            alt="thumbnail for the video"
                          />
                          <h2 class="card-title text-black">${await courses[0][
                            arr2[0] - 1
                          ]?.Name}</h2>
                          <p class="card-text text-dark">
                          ${await courses[0][arr2[0] - 1]?.desciption}
                          </p>
                        </div>
                      </a>
                    </div>
                    <div id="${await courses[0][
                      arr2[1] - 1
                    ]?.Name}"
                      class="d-lg-none d-xl-none d-xxl-none d-md-none d-sm-block d-none"
                    >
                      <a href="#trend">
                        <div class="card m-2 p-3">
                          <img
                            class="w-100"
                            src="images/video.png"
                            alt="thumbnail for the video"
                          />
                          <h2 class="card-title text-black">${await courses[0][
                            arr2[1] - 1
                          ]?.Name}</h2>
                          <p class="text-dark card-text">
                          ${await courses[0][arr2[1] - 1]?.desciption}
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="d-flex">
                    <div id="${await courses[0][
                      arr2[2] - 1
                    ]?.Name}">
                      <a href="#trend">
                        <div class="card m-2 p-3">
                          <img
                            class="w-100"
                            src="images/video.png"
                            alt="thumbnail for the video"
                          />
                          <h2 class="card-title text-black">${await courses[0][
                            arr2[2] - 1
                          ]?.Name}</h2>
                          <p class="card-text text-dark">
                          ${await courses[0][arr2[2] - 1]?.desciption}
                          </p>
                        </div>
                      </a>
                    </div>
                    <div
                      class="d-lg-none d-xl-none d-xxl-none d-md-none d-sm-block d-none invisible"
                    >
                      <a href="#trend">
                        <div class="card m-2 p-3">
                          <img
                            class="w-100"
                            src="images/video.png"
                            alt="thumbnail for the video"
                          />
                          <h2 class="card-title text-black">TITLE</h2>
                          <p class="text-dark card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    class="d-flex d-block d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block"
                  >
                    <div id="${await courses[0][
                      arr2[1] - 1
                    ]?.Name}">
                      <a href="#trend">
                        <div class="card m-2 p-3">
                          <img
                            class="w-100"
                            src="images/video.png"
                            alt="thumbnail for the video"
                          />
                          <h2 class="card-title text-black">${await courses[0][
                            arr2[1] - 1
                          ]?.Name}</h2>
                          <p class="card-text text-dark">
                          ${await courses[0][arr2[1] - 1]?.desciption}
                          </p>
                        </div>
                      </a>
                    </div>
                    <div
                      class="d-lg-none d-xl-none d-xxl-none d-md-none d-sm-block d-none"
                    >
                      <a href="#trend">
                        <div class="card m-2 p-3">
                          <img
                            class="w-100"
                            src="images/video.png"
                            alt="thumbnail for the video"
                          />
                          <h2 class="card-title text-black">TITLE</h2>
                          <p class="text-dark card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              `;
  document.getElementById("interested").innerHTML = inphtmlinterestedin;

  let inphtmlcon = `<h2>Continue Learning</h2>
  <div class="d-flex flex-column flex-md-nowrap flex-sm-wrap flex-wrap bg-secondary">
    <div class="m-3 d-flex">
      <div>
        <a href="#trend">
          <div class="card m-2 p-3">
            <img class="w-100" src="images/video.png" alt="thumbnail for the video" />
            <h2 class="card-title text-black">TITLE</h2>
            <p class="text-dark card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div class="progress text text-end d-flex justify-content-between">
              <div class="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0"
                aria-label="progress bar" aria-valuemax="100"></div>
              <span class="text-dark">50%</span>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="m-3 d-flex">
      <div>
        <a href="#trend">
          <div class="card m-2 p-3">
            <img class="w-100" src="images/video.png" alt="thumbnail for the video" />
            <h2 class="card-title text-black">TITLE</h2>
            <p class="text-dark card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div class="progress text text-end d-flex justify-content-between">
              <div class="progress-bar w-75" role="progressbar" aria-valuenow="50" aria-valuemin="0"
                aria-label="progress bar" aria-valuemax="100"></div>
              <span class="text-dark">75%</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>`;
}
