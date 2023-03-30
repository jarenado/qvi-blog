---

title: Stuff they don't teach at bootcamps
date: "2022-09-29T19:14:37.121Z"
publish: "false"
image: "./bootcamp.jpg"
imageAlt: "Bootcamp"
tags: ['junior-engineers', 'software-engineering', 'unsolicited-advice']
categories: ['Engineering']

---

* learn the command line

* learn vim or emacs
    * I'm not hating on VSCode. But not everyone uses it (shocker!). If you jump on a colleagues machine
      and want to make a quick git commit, you can do it from the command line. I don't use VSCode and I don't know what sort
      of weird porcelain you use for git. Almost everyone's machine launches vi when you type git commit. It takes 5 minutes to learn
      how to make a quick edit to a commit message in vim. See also [Link to vim article]
* git basics and workflows
   - For over a decade git has been the industry standard for version control. Why do so many junior engineers not understand the very basics?
     Why are they not being taught this?
* code review isn't QA
    - Code review is just that. You look for code smells. In the, you know, code. It doesn't mean pull the branch down to your machine and test it out.
      there's literally an entire discipline for that (QA).
      I understand that if you have a new engineer, or someone very junior, as a senior engineer or lead, you might want to check their work, but that's not code review.
      it's the engineer's job to make sure the build doesn't break.
      It's not my job to QA my colleagues' work. it will get caught by QA or a broken build. set up a robust CI/CD system and stop stressing about other people's work.
      Aint no one got time for that shit.
* don't let the perfect be the enemy of the good
    * requirements change and so does code. often.
