/*
$( document ).ready(function() {

  // js che si occupa di aprire e chiudere i progetti

  const projects = document.getElementById("projects");
  const projectClose = document.getElementById("project-close");
  const projectItems = document.querySelectorAll(".project-item");
  const projectPage = document.getElementById("project-page");

  projectClose.addEventListener("click", onProjectClose);
  projectItems.forEach((item) => item.addEventListener("click", onProjectClick));

  function onProjectClick(event) {
      const { target } = event;
      const { index } = target.dataset;
      const { width, height, top, left } = target.getBoundingClientRect();
      const clone = document.createElement("div");
      clone.style.height = height + "px";
      clone.style.width = width + "px";
      clone.style.top = top + "px";
      clone.style.left = left + "px";
      clone.style.position = "absolute";
      clone.style.zIndex = 10;
      clone.classList.add("project-item");
      clone.classList.add("clone");
      clone.innerHTML = target.innerHTML;
      projectPage.appendChild(clone);

      const title = clone.querySelector(".project-title");
      const hero = clone.querySelector(".project-hero");
      const contenutoPagina = clone.querySelector(".project-content");
      const duration = 1;

      gsap.timeline()
          .add("scaleFS")
          .set(contenutoPagina, {
          display: 'block',
          height: '0',
          padding: '0'
          })
          .to(clone, {
              duration,
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "0px",
              backgroundColor:"#f8f8f8",
              ease: Expo.easeInOut
          }, "scaleFS")
          .to(contenutoPagina, {
              duration,
              opacity: 1,
              ease: Expo.easeInOut
          }, "scaleFS")
          .to(title, {
              duration,
              fontSize: "48px",
              padding: "30px 50px",
              ease: Expo.easeInOut
          }, "scaleFS")
          .to(hero, {
              duration,
          backgroundColor:"#ffffff",
              ease: Expo.easeInOut
          }, "scaleFS")
          .to(contenutoPagina, {
          duration,
          height: 'auto',
          padding: "5vw 20vw",
          minHeight: "100vh",
          ease: Expo.easeInOut
          }, "scaleFS")
          .add(() => {
              let variabilina = window.innerHeight;
              window.scrollTo(0, variabilina);
        // se ci sono più progetti aperti
        // solo un progetto aperto per volta
              if (projectPage.children.length > 1) {
                  projectPage.firstElementChild.remove();
              }

              //imposto attivo il blocco dei progetti non il body
              //document.body.classList.add("project-active");
              //$(".proj-cont").addClass("project-active");
              document.getElementById("contenitproget").classList.add("project-active");

        //imposto attivo solo il progetto corrente?
              Array.from(projects.children).forEach((child) =>
                  child.classList.remove("active")
              );
              projects.children[parseInt(index)].classList.add("active");
          })
          .add(() => {
              const projectHero = projectPage.querySelector(".project-hero");
              gsap.set(clone, {
                  position: "relative",
                  height: "auto",
                  opacity: 1
              });
              gsap.set(projectHero, {
                  height: "auto",
                  backgroundColor:"white"
              });
          });
  }

  function onProjectClose() {
      const clone = document.querySelector(".clone");
      const projectHero = clone.querySelector(".project-hero");
      const projectContent = clone.querySelector(".project-content");
      const duration = 1;

      gsap.timeline()
          .add("close")
          .to([projectHero, projectContent], {
              duration,
              height: "0vh",
              padding: "0",
              ease: Expo.easeInOut
          },  "close")
          .to(clone, {
              duration,
              minHeight: "0vh",
              ease: Expo.easeInOut,
              onComplete() {
                  clone.remove();
              }
          }, "close")
          .to(projectContent.children, {
              duration,
              opacity: 0,
              ease: Expo.easeInOut
          }, "close")
          .to(window, {
              duration,
              scrollTo: {
                  y: window.innerHeight
              },
              ease: Expo.easeInOut
          }, "close")
          .add(() => {
              //document.body.classList.remove("project-active");
              //$(".proj-cont").addClass("project-active");
              document.getElementById("contenitproget").classList.remove("project-active");
              Array.from(projects.children).forEach((child) => child.classList.remove("active"));
          });
  }
});
*/
