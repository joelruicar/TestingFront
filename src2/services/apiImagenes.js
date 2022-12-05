async function postImages(imagenes, postID) {
  var formdata = new FormData();
  let key = 0;
  console.log(imagenes);
  imagenes.forEach((imagen) => {
    formdata.append(key, imagen, imagen.name);
    key++;
  });

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  const respuesta = await fetch(
    "http://localhost:8000/api/posts/" + postID + "/pictures/",
    requestOptions
  );
  return respuesta;
}

export { postImages };
