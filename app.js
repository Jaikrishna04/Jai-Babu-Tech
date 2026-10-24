/* =====================================
   JAI BABU TECH
   APP.JS
===================================== */

/* =====================================
   LOADER
===================================== */

window.addEventListener("load", () => {

    const loader =
        document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = "0";

            loader.style.pointerEvents = "none";

            setTimeout(() => {

                loader.style.display = "none";

            }, 500);

        }, 800);

    }

});

/* =====================================
   DARK MODE
===================================== */

const themeToggle =
    document.getElementById("themeToggle");

const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    if (themeToggle) {

        themeToggle.innerHTML = "☀️";

    }

}

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (
            document.body.classList.contains("dark")
        ) {

            localStorage.setItem(
                "theme",
                "dark"
            );

            themeToggle.innerHTML = "☀️";

        } else {

            localStorage.setItem(
                "theme",
                "light"
            );

            themeToggle.innerHTML = "🌙";

        }

    });

}

/* =====================================
   MOBILE MENU
===================================== */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });

/* =====================================
   DYNAMIC INTERNSHIPS
===================================== */

/* const internshipContainer =
    document.getElementById(
        "internshipContainer"
    );

const internships = [

    {
        title:
            "Frontend Developer Intern",

        duration:
            "3 Months",

        mode:
            "Remote",

        stipend:
            "Performance Based",

        status:
            "Open"
    },

    {
        title:
            "Backend Developer Intern",

        duration:
            "3 Months",

        mode:
            "Remote",

        stipend:
            "Performance Based",

        status:
            "Open"
    },

    {
        title:
            "UI UX Design Intern",

        duration:
            "2 Months",

        mode:
            "Remote",

        stipend:
            "Performance Based",

        status:
            "Open"
    },

    {
        title:
            "Digital Marketing Intern",

        duration:
            "2 Months",

        mode:
            "Remote",

        stipend:
            "Performance Based",

        status:
            "Open"
    },

    {
        title:
            "Full Stack Developer Intern",

        duration:
            "4 Months",

        mode:
            "Remote",

        stipend:
            "Performance Based",

        status:
            "Open"
    },

    {
        title:
            "Data Analyst Intern",

        duration:
            "3 Months",

        mode:
            "Remote",

        stipend:
            "Performance Based",

        status:
            "Open"
    }

];

function loadInternships() {

    if (!internshipContainer) return;

    internshipContainer.innerHTML = "";

    internships.forEach(job => {

        internshipContainer.innerHTML += `

        <div class="internship-card">

            <h3>${job.title}</h3>

            <p>
                Duration:
                ${job.duration}
            </p>

            <p>
                Mode:
                ${job.mode}
            </p>

            <p>
                Stipend:
                ${job.stipend}
            </p>

            <span
              class="internship-status">

                ${job.status}

            </span>

        </div>

        `;

    });

}

loadInternships(); */

const internshipContainer =
document.getElementById(
    "internshipContainer"
);

async function loadInternships() {

    try {

        const response =
        await fetch(
            "./data/internships.json"
        );

        const internships =
        await response.json();

        internshipContainer.innerHTML = "";

        internships.forEach(job => {

            internshipContainer.innerHTML += `

            <div class="internship-card">

                <h3>${job.title}</h3>

                <p>
                    Department:
                    ${job.department}
                </p>

                <p>
                    Duration:
                    ${job.duration}
                </p>

                <p>
                    Mode:
                    ${job.mode}
                </p>

                <p>
                    Stipend:
                    ${job.stipend}
                </p>

                <span class="internship-status">

                    ${job.status}

                </span>

            </div>

            `;

        });

    }

    catch(error){

        console.error(error);

    }

}

loadInternships();

/* =====================================
   APPLICATION FORM
===================================== */

const applicationForm =
    document.getElementById(
        "applicationForm"
    );

const successMessage =
    document.getElementById(
        "successMessage"
    );

if (applicationForm) {

    /* applicationForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            const applicantData = {

                name:
                    document.getElementById(
                        "name"
                    ).value,

                email:
                    document.getElementById(
                        "email"
                    ).value,

                phone:
                    document.getElementById(
                        "phone"
                    ).value,

                college:
                    document.getElementById(
                        "college"
                    ).value,

                degree:
                    document.getElementById(
                        "degree"
                    ).value,

                skills:
                    document.getElementById(
                        "skills"
                    ).value

            };

            console.log(
                applicantData
            );

            successMessage.innerHTML =
                "✅ Application submitted successfully.";

            applicationForm.reset();

            setTimeout(() => {

                successMessage.innerHTML =
                    "";

            }, 5000);

        }
    );

}*/

applicationForm.addEventListener(
"submit",

async function(e){

e.preventDefault();

const formData = {

name:
document.getElementById(
"name"
).value,

email:
document.getElementById(
"email"
).value,

phone:
document.getElementById(
"phone"
).value,

college:
document.getElementById(
"college"
).value,

degree:
document.getElementById(
"degree"
).value,

skills:
document.getElementById(
"skills"
).value

};

try{

const response =
await fetch(

"PASTE_YOUR_GOOGLE_SCRIPT_URL_HERE",

{

method:"POST",

body:
JSON.stringify(
formData
)

}

);

const result =
await response.json();

if(result.success){

successMessage.innerHTML =
"✅ Application Submitted Successfully";

applicationForm.reset();

}

else{

successMessage.innerHTML =
"❌ Submission Failed";

}

}

catch(error){

successMessage.innerHTML =
"❌ Server Error";

}

}
)
};

/* =====================================
   CONTACT FORM
===================================== */

const contactForm =
    document.getElementById(
        "contactForm"
    );

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            alert(
                "Thank you for contacting Jai Babu Tech."
            );

            contactForm.reset();

        }
    );

}

/* =====================================
   HEADER SCROLL EFFECT
===================================== */

const header =
    document.querySelector(
        ".header"
    );

window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 100
        ) {

            header.style.boxShadow =
                "0 10px 30px rgba(0,0,0,.15)";

        } else {

            header.style.boxShadow =
                "none";

        }

    }
);

/* =====================================
   SCROLL ANIMATION
===================================== */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "fade-up"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.1
        }
    );

document
    .querySelectorAll(
        ".service-card, .stat-card, .internship-card"
    )
    .forEach(card => {

        observer.observe(card);

    });

/* =====================================
   CURRENT YEAR AUTO UPDATE
===================================== */

const yearElement =
    document.getElementById(
        "currentYear"
    );

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}

/* =====================================
   CONSOLE MESSAGE
===================================== */

console.log(
    "Jai Babu Tech Website Loaded Successfully"
);

/* ==========================
   CURSOR GLOW
========================== */

const glow =
document.getElementById(
"cursorGlow"
);

document.addEventListener(
"mousemove",
e=>{

glow.style.left=
e.clientX-150+"px";

glow.style.top=
e.clientY-150+"px";

}
);

/* ==========================
   FLOATING PARTICLES
========================== */

const particles =
document.getElementById(
"particles"
);

for(let i=0;i<40;i++){

const particle =
document.createElement(
"span"
);

particle.classList.add(
"particle"
);

particle.style.left =
Math.random()*100 + "%";

particle.style.animationDuration =
(5 + Math.random()*10)
+ "s";

particle.style.animationDelay =
Math.random()*5 + "s";

particles.appendChild(
particle
);

}

/* ==========================
   TYPING EFFECT
========================== */

const words = [

"AI Solutions",
"Website Development",
"Software Products",
"Remote Internships",
"Digital Innovation"

];

let i = 0;

setInterval(()=>{

const typing =
document.getElementById(
"typingText"
);

if(typing){

typing.textContent =
words[i];

i =
(i+1)
%
words.length;

}

},2000);

/* ==========================
   SEARCH INTERNSHIP
========================== */

const search =

document.getElementById(
"searchInternship"
);

if(search){

search.addEventListener(
"input",
()=>{

const value =
search.value
.toLowerCase();

document
.querySelectorAll(
".internship-card"
)
.forEach(card=>{

card.style.display =
card.textContent
.toLowerCase()
.includes(value)
? "block"
: "none";

});

});
}

/* ==========================
   COUNTERS
========================== */

document
.querySelectorAll(
".counter"
)
.forEach(counter=>{

counter.innerText = "0";

const update = ()=>{

const target =
+counter.dataset.target;

const current =
+counter.innerText;

const increment =
target/80;

if(current < target){

counter.innerText =
Math.ceil(
current +
increment
);

requestAnimationFrame(
update
);

}
else{

counter.innerText =
target + "+";

}

};

update();

});

/* ==========================
   3D TILT EFFECT
========================== */

document
.querySelectorAll(
".service-card,.stat-card,.internship-card"
)
.forEach(card=>{

card.addEventListener(
"mousemove",
e=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX -
rect.left;

const y =
e.clientY -
rect.top;

const rotateY =
(x / rect.width - .5)
* 20;

const rotateX =
(y / rect.height - .5)
* -20;

card.style.transform =
`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)
`;

});

card.addEventListener(
"mouseleave",
()=>{

card.style.transform =
`
perspective(1000px)
rotateX(0deg)
rotateY(0deg)
`;

});

});

/* ==========================
   GSAP HERO ANIMATION
========================== */

if(typeof gsap !== "undefined"){

gsap.from(
".hero h1",
{
y:100,
opacity:0,
duration:1.3
}
);

gsap.from(
".hero h2",
{
y:60,
opacity:0,
duration:1,
delay:.5
}
);

gsap.from(
".hero p",
{
y:60,
opacity:0,
duration:1,
delay:.8
}
);

}
