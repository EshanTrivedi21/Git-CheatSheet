var data;
function addNormal(data) {
  var a = `<h2 id="${data.heading.toLowerCase().replace(/\ /g, "-")}" class="searchItem">${data.heading}</h2>
    <div class="searchItem">`
  data.data.forEach(element => {
    element.des = element.des.replace(/\n/g, "<br />");
    a += `<p>${element.des}</p>
        <code class="language-bash">
        <pre>$ ${element.com}</pre>
        <button class="copy-btn">
          <img src="./ASSETS/copy-icon.svg" alt="copy" />
        </button>
      </code>`
  })
  return a
}
function addDes(data) {
  var a = `<h2 id="${data.heading.toLowerCase().replace(/\ /g, "-")}" class="searchItem">${data.heading}</h2>`
  data.des = data.des.replace(/\n/g, "<br />");
  a += `<div class="searchItem">
    <p>${data.des}</p>
  </div>`
  return a;
}
function addSubHead(data) {
  var a = `<h2 id="${data.heading.toLowerCase().replace(/\ /g, "-")}" class="searchItem">${data.heading}</h2>`
  data.subHead.forEach(element => {
    a += `<div class="searchItem">
        <h3>${element.head}</h3>`
    element.data.forEach(ele => {
      ele.des = ele.des.replace(/\n/g, "<br />");
      a += `<p>${ele.des}</p>
            <code class="language-bash">
            <pre>$ ${ele.com}</pre>
            <button class="copy-btn">
              <img src="./ASSETS/copy-icon.svg" alt="copy" />
            </button>
          </code>`
    })
  })
  return a
}
fetch('./Assets/code.json')
  .then((response) => response.json())
  .then((json) => {
    var container = document.querySelector("#list_search");
    data = json
    json.forEach(element => {
      if (element.des != undefined) {
        container.insertAdjacentHTML('beforeend', addDes(element))
      } else if (element.subHead != undefined) {
        container.insertAdjacentHTML('beforeend', addSubHead(element))
      }
      else {
        container.insertAdjacentHTML('beforeend', addNormal(element))
      }
    });
    container.insertAdjacentHTML('beforeend', `<h2 id="github-desktop" class="searchItem">GITHUB DESKTOP</h2>
            <div class="searchItem">
              <h3>INSTALLING AND AUTHENTICATING</h3>
              <p><strong>STEP 1:</strong> Download GitHub Desktop for Windows using this [URL](https://desktop.github.com/).
              </p>
              <p><strong>STEP 2:</strong> Click on “File” on the navbar, go down to “Options,” choose “Accounts,” and get
                authentication.</p>
            </div><br>
            <div class="searchItem">
              <h3>CONTRIBUTING TO PROJECTS WITH GITHUB DESKTOP</h3>
              <p><strong>STEP 1:</strong> You can create a new repository by selecting the File menu and clicking New
                repository.
              </p>
              <p><strong>STEP 2:</strong> You can add a repository from your local computer by selecting the File menu and
                clicking Add
                Local Repository.</p>
              <p><strong>STEP 3:</strong> You can clone a repository from GitHub by selecting the File menu and clicking Clone
                Repository.</p>
              <p><strong>STEP 4:</strong> You can use GitHub Desktop to create a branch of a project.</p>
              <p><strong>STEP 5:</strong> After you make changes to a branch, you can review them in GitHub Desktop and make a
                commit
                to
                keep track of
                your changes.</p>
              <p><strong>STEP 6:</strong> You can use GitHub Desktop to create issues or pull requests to collaborate on
                projects with
                other people.</p>
              <p><strong>STEP 7:</strong> When you make changes to your local repositories or when other people make changes
                to the
                remote
                repositories,
                you will need to sync your local copy of the project with the remote repository.</p>
            </div>
      
            <h2 id="github-extensions" class="searchItem">GITHUB EXTENSIONS</h2>
            <div class="searchItem">
              <p>
      
                if you're a Developer and you use Github as your Version Control Tools, there's likely some functionality
                you wish it had. To help with these there are some best extension that you can use for Github.
      
              <ol type="1">
                <li>
                  <p>Octotree: This is a feature-rich extensions that enhance your Github experience. It
                    facilitates you with code tree to all the github repositories, which simplifies your file search and
                    navigation. (though now
                    this is by default provided by Github) It also offers you bookmarking repositories, files and PRs. It
                    increase your productivity at work by lazy-loading and caching. Besides these, it offers several other
                    features in it's Paid
                    Version. </p>
                  <p>
                    <b><i>Download:</i></b> Octotree for
                    <a href="https://chrome.google.com/webstore/detail/gitzip-for-github/ffabmkklhbepgcgfonabamgnfafbdlkn">Google
                      Chrome</a> |
                    <a
                      href="https://microsoftedge.microsoft.com/addons/detail/octotree-github-code-tr/joagmknfcgpikbadjkaikmnhpjadihjg">Edge</a>
                    |
                    <a href="https://addons.mozilla.org/en-US/firefox/addon/octotree/">Firefox</a> |
                    <a href="https://apps.apple.com/us/app/octotree-pro/id1457450145?mt=12">Safari</a> (Free, Paid)
                  </p>
                  <br />
                </li>
                <br>
                <li>
                  <p>
                    GitZip for GitHub: Every day and night we are facing situation to download the files from
                    Github. GitZip for GitHub provides you the simpleast way for downloading files or subfolders individually
                    from any repository.
                    You can select items by double-clicking the empty space after the file name and clicking the download
                    arrow
                    that appears in the bottom-right corner. Alternatively, right-click anywhere, hover the cursor over GitZip
                    Download
                    and decide whether to download the entire folder or selected files. It also offers the dark theme and is
                    completely free to use.
                    <br>
                    <br>
                    <b><i>Download:</i></b> Gitzip for Github for <a
                      href="https://chrome.google.com/webstore/detail/gitzip-for-github/ffabmkklhbepgcgfonabamgnfafbdlkn">Google
                      Chrome</a>
                    <br />
                  </p>
                </li>
                <br>
                <li>
                  <p>
                    Refined Github: Refined GitHub is another Chrome extension that adds more than 200 features
                    to your GitHub. Most of these features are focused on improving the interface and experience. It
                    highlights
                    the most
                    useful comments and shows reaction avatars for comments. It adds gray dots and arrows to the whitespace in
                    code, making them visible. Similarly, it makes the pull request references and URLs in code clickable.
                    With
                    hundreds
                    of features available. The best part is that You can turn off any of these features individually by going
                    to
                    Extensions > Refined GitHub > Extension Options. This free extension has over 50,000 downloads on Chrome.
                    It’s available
                    on Firefox and Safari too.
                    <br>
                    <br>
                    <b><i>Download:</i></b> Refined GitHub for
                    <a href="https://chrome.google.com/webstore/detail/refined-github/hlepfoohegkhhmjieoechaddaejaokhf">Google
                      Chrome</a> |
                    <a href="https://apps.apple.com/us/app/refined-github/id1519867270">Safari</a>
                    <a href="https://addons.mozilla.org/en-US/firefox/addon/refined-github-/">Firefox</a> | (Free)
                    <br />
                  </p>
                </li>
              </ol>
              </p>`)
  });
