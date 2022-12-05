async function getPetWithID(id) {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  try {
    const respuesta = await fetch(
      "http://127.0.0.1:8000/api/lostpetsposts/" + id,
      requestOptions
    );
    if (respuesta.ok) {
      console.log("Todo bien");
    } else {
      return respuesta.status;
    }
  } catch (err) {
    console.log(err);
  }
}

async function createNewPetLost(pet) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify(pet);
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  const respuesta = await fetch(
    "http://localhost:8000/api/lostpetsposts/",
    requestOptions
  );
  return respuesta;
}

async function createNewPetFound(pet) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify(pet);
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  const respuesta = await fetch(
    "http://localhost:8000/api/foundpetsposts/",
    requestOptions
  );
  return respuesta;
}

async function getAllLostPets() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const respuesta = await fetch(
    "http://127.0.0.1:8000/api/lostpetsposts",
    requestOptions
  );

  return respuesta;
}

async function getAllFoundPets() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const respuesta = await fetch(
    "http://localhost:8000/api/foundpetsposts",
    requestOptions
  );

  return respuesta;
}

async function getPetByID(id, found) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const respuesta = await fetch(
    "http://127.0.0.1:8000/api/" + found + "petsposts/" + id,
    requestOptions
  );

  return respuesta;
}

async function getPetByIDFound(id) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const respuesta = await fetch(
    "http://127.0.0.1:8000/api/foundpetsposts/" + id,
    requestOptions
  );

  return respuesta;
}

async function getComments(id) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const respuesta = await fetch(
    `http://127.0.0.1:8000/api/posts/${id}/comments/`,
    requestOptions
  );

  return respuesta;
}

async function createComment(text, currentUser, id) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = { message: text, user: currentUser };
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(raw),
    redirect: "follow",
  };

  const respuesta = await fetch(
    `http://127.0.0.1:8000/api/posts/${id}/comments/`,
    requestOptions
  );
  return respuesta;
}

async function notifyFound(text, id) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = { message: text };
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(raw),
    redirect: "follow",
  };

  const respuesta = await fetch(
    `http://127.0.0.1:8000/api/posts/${id}/found/`,
    requestOptions
  );
  return respuesta;
}

async function closePost(id) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const respuesta = await fetch(
    `http://127.0.0.1:8000/api/posts/${id}/close/`,
    requestOptions
  );
  return respuesta;
}

/* async function deleteComment(id){
   var myHeaders = new Headers();
   myHeaders.append("Content-Type", "application/json");
   var raw = JSON.stringify(id);
   var requestOptions = {
     method: 'DELETE',
     headers: myHeaders,
     body: raw,
     redirect: 'follow'
   };

 const respuesta = await fetch("", requestOptions)
 return respuesta;
};*/

async function getFilteredPets(parametrosBusqueda) {
  const urlDestino =
    "http://localhost:8000/api/lostpetsposts" +
    "?order_by=" +
    parametrosBusqueda.order +
    "&breed=" +
    parametrosBusqueda.breed +
    "&species=" +
    parametrosBusqueda.species +
    "&town=" +
    parametrosBusqueda.town +
    "&lat=" +
    parametrosBusqueda.lat +
    "&lang=" +
    parametrosBusqueda.lang +
    "&reward=" +
    parametrosBusqueda.reward;

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const respuesta = await fetch(urlDestino, requestOptions);
  return respuesta;
}
async function getFoundFilteredPets(parametrosBusqueda) {
  const urlDestino =
    "http://localhost:8000/api/foundpetsposts" +
    "?order_by=" +
    parametrosBusqueda.order +
    "&breed=" +
    parametrosBusqueda.breed +
    "&species=" +
    parametrosBusqueda.species +
    "&town=" +
    parametrosBusqueda.town +
    "&lat=" +
    parametrosBusqueda.lat +
    "&lang=" +
    parametrosBusqueda.lang;

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const respuesta = await fetch(urlDestino, requestOptions);
  return respuesta;
}

async function getPetSpecie() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const respuesta = await fetch(
    "http://localhost:8000/api/species",
    requestOptions
  );

  return respuesta;
}

export {
  createNewPetFound,
  createNewPetLost,
  getPetWithID,
  getAllLostPets,
  getAllFoundPets,
  getPetByID,
  getComments,
  createComment,
  getFilteredPets,
  getPetSpecie,
  getPetByIDFound,
  getFoundFilteredPets,
  notifyFound,
  closePost,
};
