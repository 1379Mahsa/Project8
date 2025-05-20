
function addTodo() {
    console.log('POST Request');
}


function updateTodo() {
    console.log('PUT Request');
}


function getTodos() {
    console.log('GET Request');
}


function removeTodo() {
    console.log('DELETE Request');
}



function showOutput(res) {
    document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
 `;
}

document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('put').addEventListener('click', updateTodo);
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('delete').addEventListener('click', removeTodo);
