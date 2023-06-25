var wrap = null

function AddTodo() {
  var item = document.getElementById("todo").value
  if (item === "") {
    alert("input text tidak boleh kosong!");
  } else {
    var text = document.createTextNode(item);
    var newItem = document.createElement("li");
    newItem.classList.add("task", "list-group-item", "d-flex", "justify-content-between", "align-items-center", "border-start-0", "border-top-0", "border-end-0", "border-bottom", "rounded-0", "mb-2");
    wrap = document.getElementById("todoList");
    wrap.appendChild(newItem);
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("checked", "m-2")
    checkBox.onclick = checkedTodo.bind(checkBox);
    var btn = document.createElement("button");
    btn.classList.add("remove", "justify-content-end", "border-0", "bg-dark", "text-white");
    wrap = document.getElementById("todoList");
    btn.textContent = "X"
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
    unchecked()
    if (this.checked === true) {
      this.parentNode.style.textDecoration = "line-through"
      this.parentNode.style.color = "#aaa"
      this.parentNode.style.backgroundColor = "#ccc"

    } else {
      this.parentNode.style.textDecoration = "none";
      this.parentNode.style.color = "#000"
      this.parentNode.style.backgroundColor = "white"
    }
  }
}


function removeAll() {
  var todoList = document.getElementById("todoList")

  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
}