const exec = [
  {name: "Sam McBroom", position: "President, Webmaster", year: "Fourth", majors: "Computer Science, Physics", photo: "sam_mcbroom"},
  {name: "Brooke Crouch", position: "Vice President", year: "Third", majors: "Global Sustainability, Environmental Science", photo: "brooke_crouch"},
  {name: "Michael Nicklas", position: "Vice President", year: "Fourth", majors: "Global Sustainability, Environmental Science", photo: "michael_nicklas"},
  {name: "Riley Phillips", position: "Secretary", year: "Second", majors: "English", photo: "riley_phillips"},
  {name: "Courtney Jacobs", position: "Treasurer", year: "Fourth", majors: "Computer Science", photo: "courtney_jacobs"},
  {name: "Madison Crouch", position: "Social Chair", year: "Third", majors: "Civil Engineering, Global Sustainability", photo: "madison_crouch"},
  {name: "Natalie Finman", position: "Social Chair", year: "Fourth", majors: "Commerce", photo: "natalie_finman"},
  {name: "Haley Dues", position: "Outreach Chair", year: "Third", majors: "Civil Engineering", photo: "haley_dues"},
  {name: "Alicia Zheng", position: "Advocacy Chair", year: "Fourth", majors: "Global Sustainability, Spanish", photo: "alicia_zheng"},
  {name: "Chelsea Ulrich", position: "Advocacy Chair", year: "Third", majors: "Psychology", photo: "chelsea_ulrich"}
];

function addExec() {
  exec.forEach(e => {
    let photo = new Image();
    photo.addEventListener("load", () => {
      const fit = photo.width > photo.height ? "wide" : "tall";
      document.getElementById("exec").innerHTML += `<div class="exec-member"><div class="exec-photo"><div class="exec-photo-container"><img class="${fit}" src="assets/images/${e.photo}.png"/></div></div><div class="exec-info"><h4>${e.name}</h4><p>${e.position}</p><p>${e.year} Year</p><p>${e.majors}</p></div></div>`;
    });
    photo.src = `assets/images/${e.photo}.png`;
  });
}
