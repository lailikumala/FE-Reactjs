var wrap = null

function AddTodo() {
  var item = document.getElementById("todo").value
  if (item === "") {
    alert("input text tidak boleh kosong!");
  } else {
    var text = document.createTextNode(item);
    var newItem = document.createElement("li");
    wrap = document.getElementById("todoList");
    wrap.appendChild(newItem);
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.onclick = checkedTodo.bind(checkBox);
    var btn = document.createElement("button");
    btn.style.margin = "10px"
    btn.textContent = "Hapus"
    btn.addEventListener('click', () => newItem.remove());
    newItem.appendChild(checkBox);
    newItem.appendChild(text);
    newItem.appendChild(btn);
    document.getElementById("todo").value = "";
  }

  function unchecked() {
    var checkboxes = document.querySelectorAll('#todoList input[type="checkbox"]');
    var uncheckedTodo = 0;
    checkboxes.forEach(function (checkbox) {
      if (!checkbox.checked) {
        uncheckedTodo++;
      }
    });
    document.getElementById("total-uncheced").innerHTML = `<p>
        Total Tugas Belum Selesai: ${uncheckedTodo}
      </p>`
    if (uncheckedTodo === 0) alert("tugas selesai semua")
  }

  function checkedTodo() {
    console.log("unchecked", unchecked())
    if (this.checked) {
      this.parentNode.style.textDecoration = "line-through";
    } else {
      this.parentNode.style.textDecoration = "none";
    }
  }
}

var btnremove = document.getElementById("remove-all")
var todoList = document.getElementById("todoList")
btnremove.addEventListener('click', function () {
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
})

function checklistAll() {
  var uncheckedTodo = 0;
  var checkboxes = document.querySelectorAll('#todoList input[type="checkbox"]');

  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = true;
    checkboxes[i].parentNode.style.textDecoration = 'line-through';
    if (!checkboxes[i].checked) {
      uncheckedTodo++
    }
  }

  document.getElementById("total-uncheced").innerHTML = `<p>
        Total Tugas Belum Selesai: ${uncheckedTodo}
      </p>`
  if (uncheckedTodo === 0) alert("tugas selesai semua")
}