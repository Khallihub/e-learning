courseName = localStorage.getItem("course");
courses = JSON.parse(localStorage.getItem("courses"));
if (!courses) {
  window.open("login.html", "_self");
}
let courseObject;
for (let course of courses) {
  if (course?.Name == courseName) {
    courseObject = course;
  }
}
renderCourse(courseObject);
function renderCourse(courseObject) {
  let inhtmlmain = `<h1 class="text-center">${courseObject.Name}</h1>
    <p>
    ${courseObject.texta}
    </p>
    <video class="mw-100" controls>
      <source src="videos/video.mp4" type="video/mp4" />
      <track src="videos/captions.vtt" kind="captions" label="English" srclang="en" />
    </video>
    <p>
    ${courseObject.textb}
    </p>
    <audio class="mw-100 audio" src="audios/audio.mp3" controls></audio>`;

  document.getElementById("main_").innerHTML = inhtmlmain;
  let size = courseObject.extra.length;
  let inhtmlque = "";
  for (let i = 0; i < size; i++) {
    j = i + 1;
    inhtmlque += `
        <li class="list-unstyled">
            <fieldset id="${j}">
              <legend>
                ${courseObject.extra[i].question}
              </legend>
              <input class="mx-2" type="radio" name="question${j}" id="choice-A${j}" />
              <label class="mx-2" for="choice-A${j}">${courseObject.extra[i].A}</label>
              <br>
              <input class="mx-2" type="radio" name="question${j}" id="choice-B${j}" />
              <label class="mx-2" for="choice-B${j}">${courseObject.extra[i].B}</label>
              <br>
              <input class="mx-2" type="radio" name="question${j}" id="choice-C${j}" />
              <label class="mx-2" for="choice-C${j}">${courseObject.extra[i].C}</label>
              <br>
              <input class="mx-2" type="radio" name="question${j}" id="choice-D${j}" />
              <label class="mx-2" for="choice-D${j}">${courseObject.extra[i].D}</label>
              <br>
            </fieldset>
          </li>`;
  }
  document.getElementById("questions").innerHTML = inhtmlque;
}

document.getElementById("questions").addEventListener("click", function (e) {
  let questionNumber =
    document.getElementById(e.target.id).parentElement.id - 1;
  let answer = document.getElementById(e.target.id).id;
  answer = answer.charAt(7);
  try {
    if (courseObject.extra[questionNumber].answer[0] == answer) {
      document
        .querySelector(`label[for=${e.target.id}]`)
        .classList.toggle("bg-success");
      document
        .querySelector(`label[for=${e.target.id}]`)
        .classList.toggle("text-white");
    } else {
      document
        .querySelector(`label[for=${e.target.id}]`)
        .classList.toggle("bg-danger");
      document
        .querySelector(`label[for=${e.target.id}]`)
        .classList.toggle("text-white");
    }
  } catch {}
});
