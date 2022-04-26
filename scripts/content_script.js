//Define general functions

addDownloadOnClick = element => {

  initHTML = element.parentElement.innerHTML;
  moddedHTML = initHTML.replace("<a ", "<a download ");

  element.parentElement.innerHTML = moddedHTML;

  return true

}

//addDownloadOnClickModule = element => {


//}

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
      
      addDownloadOnClick(fileDirectoryRowLink);

    }

  }
  else if(document.getElementById("context_modules")){
    //Get all "block" modules
    contextModules = document.getElementById("context_modules").getElementsByClassName("context_module");

    for(i=0; i< contextModules.length; i++) {

      contextModulesContent = contextModules[i].getElementsByClassName("content")[0];

      //We want to iterate over the list to get every list object
      contextModuleList = contextModulesContent.getElementsByTagName("ul")[0].getElementsByTagName("li");

      for(j=0; j< contextModuleList.length; j++) {

        //In modules, the file name is stored as a class name in the list tag, just adding "download" to the "a" tag will download HTML

        downloadA = contextModuleList[j].getElementsByTagName("a");
        listClasses = contextModuleList[j].getAttribute("class").match(/\S+/g)||[]

        if((contextModuleList[j].getAttribute("class").match(/\S+/g)||[]).findIndex(element => element.includes("Attachment")) > 0) {
          attachmentIndex = (listClasses).findIndex(element => element.includes("Attachment"));
          fileIndexName = listClasses[attachmentIndex].replace("Attachment_", "");
          
          if(downloadA.length > 1) {

            fileLocationBuilder = downloadA[1].getAttribute("href").split("/").slice(0,3);
            fileLocationBuilder.push("files");
            fileLocationBuilder.push(fileIndexName); 
            fileLocationBuilder.push("download?download_frd=1");

            downloadA[1].setAttribute("href", fileLocationBuilder.join("/"))

            addDownloadOnClick(downloadA[1]);
          }

        }


      }

    }

  }
  else {
    console.log("ligma")
  }

}


