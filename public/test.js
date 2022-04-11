fetch("/api/hello")
  .then((res) => res.json())
  .then((data) => console.log(data));
