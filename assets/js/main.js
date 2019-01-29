function todolist() {
  //
  var result = document.getElementById("inputvalue").value;
  var li = document.createElement("li");
  li.className = "list";
  var ul = document.getElementById("myList");
  var textnode = document.createTextNode(result);

  var Exist = document.getElementById("valueExist");
  var addvalue = document.getElementById("enterValue");

  var textli = document.getElementsByTagName("li");

  for (var i = 0; i < textli.length; i++) {
    var resultli = textli[i].innerHTML;
    if (result.toUpperCase() === resultli.toUpperCase()) {
      Exist.style.display = "block";
      return;
    } else {
      Exist.style.display = "none";
    }
  }

  if (result === "") {
    addvalue.style.display = "block";
    return;
  } else {
    appendData();
    addvalue.style.display = "none";
  }
  appendData();

  function appendData() {
    li.appendChild(textnode);
    ul.appendChild(li);
  }
}

var ulclick = document.getElementById("myList");

ulclick.onclick = function(event) {
  var target = event.target || event.srcElement;
  var ulcomplete = document.getElementById("newMyList");
  ulcomplete.appendChild(target);
  var listItem = target;

  /* Button */
  var deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete";
  listItem.appendChild(deleteBtn);
  /* */
  var anchors = document.querySelectorAll(".delete");
  for (var i = 0; i < anchors.length; i++) {
    console.log(anchors);
    anchors[i].addEventListener("click", function() {
      console.log(this.parentElement.className);
      this.parentElement.remove();
    });
  }
};
