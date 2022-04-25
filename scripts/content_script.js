//Determine where user is, depending on if the container is already classified as a file we can save computations

window.onload = () => {

  if(document.getElementsByClassName("ef-main").length) {
    //In "files" module

    fileContainer = document.getElementsByClassName("ef-main")[0];
    fileDirectory = document.getElementsByClassName("ef-directory")[0];
    fileDirectoryRows = fileDirectory.getElementsByClassName("ef-item-row");

    //Recursive search in rows

    for(i=0;i< fileDirectoryRows.length; i++) {

      fileDirectoryRowLink = fileDirectoryRows[i].getElementsByTagName("a")[0];

      //Haxed
      
      initHTML = fileDirectoryRowLink.parentElement.innerHTML;
      moddedHTML = initHTML.substring(0,3) + "download " + initHTML.substring(3);

      fileDirectoryRowLink.parentElement.innerHTML = moddedHTML;

    }

  }
  else {
    console.log("ligma");
  }

}


