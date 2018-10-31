const API = {
  url: "http://localhost:8088/legos",
  post(object) {
    return fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(object)
    })
  }
}
document.querySelector(".lego__save").addEventListener("click", event => {
  const creator = document.querySelector("#lego__creator").value
  const creation = document.querySelector("#lego__creation").value
  const color = document.querySelector("#lego__color").value
  const type = document.querySelector("#lego__type").value

  const legoToSave = {
    creator: creator,
    creation: creation,
    color: color,
    type: type
  }
  API.post(legoToSave)
})
