function toggleProjectPapers(projectId) {
  let papersDiv = document.getElementById('papers-' + projectId);
  let chevron = document.getElementById('chevron-' + projectId).querySelector('.chevron');

  if (papersDiv.style.display === "none" || papersDiv.style.display === "") {
    papersDiv.style.display = "block";
    chevron.classList.remove('down');
    chevron.classList.add('up');
  } else {
    papersDiv.style.display = "none";
    chevron.classList.remove('up');
    chevron.classList.add('down');
  }
}

function togglePersonPapers(sectionId) {
  let papersDiv = document.getElementById(sectionId);
  let chevron = document.getElementById('chevron-' + sectionId).querySelector('.chevron');

  if (papersDiv.style.display === "none" || papersDiv.style.display === "") {
    papersDiv.style.display = "block";
    chevron.classList.remove('down');
    chevron.classList.add('up');
  } else {
    papersDiv.style.display = "none";
    chevron.classList.remove('up');
    chevron.classList.add('down');
  }
}