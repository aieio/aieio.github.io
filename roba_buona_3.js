/*
$( document ).ready(function() {

  const projectGrid = document.getElementById("project-grid");
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
      const content = clone.querySelector(".project-content");
      const duration = 1;

      gsap.timeline({
          onStart() {
              document.body.classList.add('is-transitioning');
          },
          onComplete() {
              document.body.classList.remove('is-transitioning');
          }
      })
      .set(content, {
          display: 'block',
          height: '0',
          padding: '0'
      })
      .set(clone, {
          overflow: 'visible'
      })
      .add("scaleFS")
      .to(clone, {
          duration,
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "auto",
          borderRadius: "0px",
          ease: Expo.easeInOut
      }, "scaleFS")
      .to(window, {
          duration: scrollDuration(),
          scrollTo: {
              y: window.innerHeight
          },
          ease: Expo.easeInOut
      }, 'scaleFS')
      .add("expand")
      .to(hero, {
          duration,
          backgroundColor: "white",
          ease: Expo.easeOut
      }, 'scaleFS')
      .to(content, {
          duration,
          height: 'auto',
          padding: "5vw 20vw",
          minHeight: "100vh",
          ease: Expo.easeInOut
      }, "expand")
      .add('reveal', '-=0.25')
      .fromTo(content.children, {
          y: -100,
          autoAlpha: 0,
          scale: 1.1,
          transformOrigin: '50% 0%'
      }, {
          y: window.innerHeight,
          autoAlpha: 1,
          scale: 1,
          stagger: 0.1,
          duration: duration/2
      }, "reveal")
      .set(clone, {
          position: 'relative'
      }, "reveal")
      .add(() => {
          if (projectPage.children.length > 1) {
              projectPage.firstElementChild.remove();
          }
          document.body.classList.add("project-active");
          Array.from(projectGrid.children).forEach((child) =>
              child.classList.remove("active")
          );
          projectGrid.children[parseInt(index)].classList.add("active");
      }, "reveal")
  }

  function onProjectClose() {
      const clone = document.querySelector(".clone");
      const projectHero = clone.querySelector(".project-hero");
      const projectContent = clone.querySelector(".project-content");
      const duration = 1;

      gsap.timeline({
          onStart() {
              document.body.classList.add('is-transitioning');
          },
          onComplete() {
              document.body.classList.remove('is-transitioning');
          }
      })
          .add("close")
          .to(window, {
              duration: scrollDuration(),
              scrollTo: {
                  y: 0
              },
              ease: Expo.easeInOut
          }, 'close')
          .to(clone.children, {
              duration,
              opacity: 0,
              ease: Expo.easeInOut
          }, 'close+=0.5')
          .to(projectPage, {
              duration,
              height: "0",
              ease: Expo.easeInOut,
              onComplete() {
                  clone.remove();
                  projectPage.style = null;
              }
          }, 'close+=0.5')
          .add(() => {
              document.body.classList.remove("project-active");
              Array.from(projectGrid.children).forEach((child) =>
                  child.classList.remove("active")
              );
          });
  }

  // This tries to calculate a good scroll duration.
  // If the scrollY is at the top, then the scroll duration is zero.
  // If the scrollY is at the bottom of the page, then the scroll duration is one second.
  // Somewhere in the middle is between zero and one.
  function scrollDuration() {
      const half = window.scrollY / 2;
      const diff = window.scrollY > half ? window.innerHeight : 0;
      const percent = (window.scrollY + diff) / (document.body.clientHeight);
      const seconds = 1;
      const scrollDuration = seconds * percent;
      return scrollDuration;
  }
});*/
