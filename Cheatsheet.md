# WELCOME TO THE GIT CHEAT SHEET

    AUTHOR:         ESHAN KALP TRIVEDI  (Github: EshanTrivedi21)
    REFERENCE:      GIT GITHUB BOOTCAMP - COLT STEELE (UDEMY)
    DESCRIPTION:    Your very own Git AND Github Cheat Sheet having basic Windows Terminal Cheats as well!

## Terminal Basics

**It is the LIST command which LISTS all the contents of a Directory**

```bash
$ ls
```

**LOCATES to a directory and then LISTS the contents**

```bash
$ ls foldername
```

**Print Working Directory**

```bash
$ pwd
```

**CHANGES and HOPS onto the respective Working Directory**

```bash
$ cd C:\User\<UserName>\foldername
```

**Hops to Parent Directory**

```bash
$ cd ..
```

**Clears the Used Terminal**

```bash
$ clear
```

**Quits out of a command**

```bash
$ q
```

**CREATES an Empty directory inside the Working Directory**

```bash
$ mkdir foldername
```

**Deletes the file**

```bash
$ rm filename
```

**Deletes the directory**

```bash
$ rm -rf foldername
```

**OPENS the File Explorer to the ROOT Directory**

```bash
$ start .
```

## SETTING GIT USER NAME AND EMAIL

**to CHECK if git User-Name is set**

```bash
$ git config user.name
```

**to CHECK if git User-Email is set**

```bash
$ git config user.email
```

**To SET or CHANGE git User-Name**

```bash
$ git config --global user.name "Eshan Trivedi"
```

**To SET or CHANGE git User-Email**

```bash
$ git config --global user.email eshan.trivedi.9@gmail.com
```

**to SET or CHANGE default code editor as VsCode**

```bash
$ git config --global core.editor "code --wait"
```

**to CHANGE git User-Name and git User-Email directly in the config file using vim**

```bash
$ git config --global --edit
```

**To exit vim**

```bash
$ `escape key` + :wq
```

## GETTING GIT HELP

**Use for more details and examples on any of the below (or above) commands e.g. push, pull etc.**

```bash
$ git command --help
```

## CREATING A GIT REPOSITORY

**STEP 1:**

**INITIALIZES an empty repository**

```bash
$ git init
```

**STEP 2:**

**to CHECK the status of a repository, a .git directory is created, all git history is deleted if .git directory is deleted**

```bash
$ git status
```

## STAGING FILE/FILES OF THE REPOSITORY:

**to keep a track of modifications or changes**
**STAGES the file**

```bash
$ git add filename.txt
```

**UN-STAGES the file**

```bash
$ git rm --cached filename.txt
```

**STAGES all files in the repository**

```bash
$ git add --all
# OR
$ git all .
# OR
$ git add .
```

## COMMITING A COMMIT:

**come on who doesnt know about commits**
**COMMITS the STAGED files with a commit message**

```bash
$ git commit -m "commit message"
```

**SKIPS the Staging part and directly COMMITS**

```bash
$ git commit -a -m "commit message"
```

**LOGS all the commits done to the repository**

```bash
$ git log
```

**LOG commits in a single line**

```bash
$ git log --oneline
```

**AMMENDS the previous commit**

```bash
$ git commit --ammend
```

**LOGS the changes**

```bash
$ git diff
```
