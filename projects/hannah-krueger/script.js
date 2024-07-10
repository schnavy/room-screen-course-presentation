
document.addEventListener('DOMContentLoaded', (event) => {
    const container = document.getElementById('room-wrapper-1');
    const header = document.getElementById('drag-btn-1');
    
    header.addEventListener('click', () => {
        container.style.display = 'block'; // Set display to block to allow position to be effective
        container.style.position = 'absolute';
    }, { once: true }); // Ensures the event listener is only triggered once
});

document.addEventListener('DOMContentLoaded', (event) => {
  const container = document.getElementById('room-wrapper-2');
  const header = document.getElementById('drag-btn-2');
  
  header.addEventListener('click', () => {
      container.style.display = 'block'; // Set display to block to allow position to be effective
      container.style.position = 'absolute';
  }, { once: true }); // Ensures the event listener is only triggered once
});

document.addEventListener('DOMContentLoaded', (event) => {
  const container = document.getElementById('room-wrapper-3');
  const header = document.getElementById('drag-btn-3');
  
  header.addEventListener('click', () => {
      container.style.display = 'block'; // Set display to block to allow position to be effective
      container.style.position = 'absolute';
  }, { once: true }); // Ensures the event listener is only triggered once
});

document.addEventListener('DOMContentLoaded', (event) => {
  const container = document.getElementById('room-wrapper-4');
  const header = document.getElementById('drag-btn-4');
  
  header.addEventListener('click', () => {
      container.style.display = 'block'; // Set display to block to allow position to be effective
      container.style.position = 'absolute';
  }, { once: true }); // Ensures the event listener is only triggered once
});

function myFunction() {
    var x = document.getElementById("room-wrapper-1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function myFunction3() {
    var x = document.getElementById("room-wrapper-2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function myFunction5() {
    var x = document.getElementById("room-wrapper-3");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function myFunction7() {
    var x = document.getElementById("room-wrapper-4");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }




  function myFunction2() {
    var x = document.getElementById("illustration");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  
  function myFunction4() {
    var x = document.getElementById("graphics");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function myFunction6() {
    var x = document.getElementById("comics");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function myFunction8() {
    var x = document.getElementById("playroom");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

// Make the DIV element draggable:
dragElement(document.getElementById(""));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}





function makeDragable(dragHandle, dragTarget) {
    // used to prevent dragged object jumping to mouse location
    let xOffset = 0;
    let yOffset = 0;
  
    let handle = document.querySelector(dragHandle);
    handle.addEventListener("mousedown", startDrag, true);
    handle.addEventListener("touchstart", startDrag, true);
  
    /*sets offset parameters and starts listening for mouse-move*/
    function startDrag(e) {
      e.preventDefault();
      e.stopPropagation();
      let dragObj = document.querySelector(dragTarget);
      
      // shadow element would take the original place of the dragged element, this is to make sure that every sibling will not reflow in the document
      let shadow = dragObj.cloneNode();
      shadow.id = ""
      // You can change the style of the shadow here
      shadow.style.opacity = 0.5
      dragObj.parentNode.insertBefore(shadow, dragObj.nextSibling);
  
      let rect = dragObj.getBoundingClientRect();
      dragObj.style.left = rect.left;
      dragObj.style.top = rect.top;
      dragObj.style.position = "absolute";
      dragObj.style.zIndex = 999999;
  
      /*Drag object*/
      function dragObject(e) {
        e.preventDefault();
        e.stopPropagation();
        if(e.type=="mousemove") {
          dragObj.style.left = e.clientX-xOffset + "px"; // adjust location of dragged object so doesn't jump to mouse position
          dragObj.style.top = e.clientY-yOffset + "px";
        } else if(e.type=="touchmove") {
          dragObj.style.left = e.targetTouches[0].clientX-xOffset +"px"; // adjust location of dragged object so doesn't jump to mouse position
          dragObj.style.top = e.targetTouches[0].clientY-yOffset +"px";
        }
      }
      /*End dragging*/
      document.addEventListener("mouseup", function() {
        // hide the shadow element, but still let it keep the room, you can delete the shadow element to let the siblings reflow if that is what you want
        shadow.style.opacity = 0
        shadow.style.zIndex = -999999
        window.removeEventListener('mousemove', dragObject, true);
        window.removeEventListener('touchmove', dragObject, true);
      }, true)
  
      if (e.type=="mousedown") {
        xOffset = e.clientX - rect.left; //clientX and getBoundingClientRect() both use viewable area adjusted when scrolling aka 'viewport'
        yOffset = e.clientY - rect.top;
        window.addEventListener('mousemove', dragObject, true);
      } else if(e.type=="touchstart") {
        xOffset = e.targetTouches[0].clientX - rect.left;
        yOffset = e.targetTouches[0].clientY - rect.top;
        window.addEventListener('touchmove', dragObject, true);
      }
    }
  }
  
  makeDragable('room-wrapper-header', 'room-wrapper-1')
  makeDragable('#handle2', '#moveable2')
  makeDragable('#handle3', '#moveable3')




document.getElementById('form-image-3').addEventListener('click', function() {
  this.classList.toggle('enlarged');
});
