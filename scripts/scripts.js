const legoCreation = {
  id: 1,
  creator: "Per Sun",
  color: "Black",
  type: "Animal",
  creation: "Black Cow"
}

document.querySelector(".lego__save").addEventListener("click", event => {
  const creator = document.querySelector(".lego__creator").value
  const creation = document.querySelector(".lego__creation").value
  const color = document.querySelector("lego__color").value
  const type = document.querySelector("lego__type").value

  const legoToSave = {
    creator: creator,
    creation: creation,
    color: color,
    type: type
  }
})

