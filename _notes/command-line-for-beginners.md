---
layout: page
title: Command Line for Beginners
author: Jessica Dillion
displayIndex: false
---

[Windows & Unix Command Line Equivalents](http://www.lemoda.net/windows/windows2unix/windows2unix.html)

<code>~</code> - home directory

<code>pwd</code> - present working directory, where you are currently at.

<code>ls</code> - short for 'list'. List what's in your current directory.

<code>cd /</code> - change directory.

<code>mkdir folderName</code> - make directory.

<code>touch fileName.ext</code> - make an empty file.

<!--
touch helloworld.txt

We just made an empty file called helloworld.txt. Print the content of your practice directory, and make sure you see your file. Success! Now, brace yourself, because we're about to enter the world of the command line editor. This is an important tool, but it's very easy to mess up, so make sure you follow along closely. Type:

vi helloworld.txt

This opens the editor. The most important thing to know about vi is that it has two states: insert mode and command mode. Right now, you're in command mode. Press the "i" key on your keyboard to enter insert mode; you should see "– INSERT –" at the bottom of your screen. If you did it right, you should be able to type freely! Let's just be boring and type "Hello world!". Once you're done, hit escape to exit insert mode (If you take away one thing from this blog, it should be this: in vi, "i" is for insert, escape is for command). Then, in command mode, type ":wq" to tell vi that you want to write (save) your changes and quit. The colon is super duper important! Don't forget it.

Phew, that was a close one. Let's make sure that our changes really were saved inside the file.

cat helloworld.txt

This new command is short for concatenate, and it just spits out the content of the file onto the command line. Do you see "Hello world!"? If so, fantastic job! If not, try using vi to edit the file again.

Okay, so we can make a directory, we can make and edit a file, and we can see the contents of that file. Let's look at copying and moving files. These two commands are very similar, but it's important to take note of their differences. To copy a file, type:

cp helloworld.txt helloagain.txt

"ls", and make sure you have both files inside your practice directory. "cat" your new helloagain.txt file and you'll see that it has the same content as the original. This command just copies the first file to a new file. You're not limited to supplying just the name for the file; you can also supply the path (For instance, type cp helloworld.txt ~/helloagain.txt to copy the file into your home directory).

Let's move a file. The command for that is mv, and it looks something like this:

mv helloworld.txt ~

What are we doing? We're moving the file immediately after the command into the directory immediately after the file name. Type:

ls ~

…and you should see your helloworld.txt file in your home directory. That's not all that "mv" does though: you can give "mv" a file name instead of a directory, and it will change the file's name for you, e.g.

mv ~/helloworld.txt ~/hi.txt

"ls" your home directory again and you'll see your renamed file. Let's do a little bit of cleanup and take care of what we've made. Type

rm helloagain.txt

This command will delete the helloagain.txt file inside your current directory.

"cd" back to your home directory. You should have both hi.txt and helloagain.txt here, so use "rm" to take care of those, if you want more practice. Speaking of which, type:

rmdir practice

This deletes the practice directory. An important note about the "rmdir" command: the folder MUST be empty. bash will bark at you if it's not. If you've been following along, then it should be empty anyway.

If you want to delete an entire directory, including the contents, you can type rm -rf . Be careful with this, as it's a powerful tool! Never, EVER type "rm -rf /". With those flags set, you'll delete your entire root directory, otherwise known as the most important directory on your computer. This is a common prank that people like to pull on command line newbies, so be on your guard.

That's all for this installment! Tune in two weeks from now to learn more command line goodness! -->

## Finding & Grepping

<code>find ~ -name *.jpg</code> - find all jpg's in home directory.  command name (find) &#124; directory to search (~) &#124; flag (-name *.jpg)

<code>grep "blog" temp.txt</code> - search a given file for an expression. Returns every line in temp.txt where "blog" is located.
<code>grep "bl.g" temp.txt</code> - wildcard ".". Would return blog blag blrg
<code>grep -i "cats" ~/cats.txt</code> - case insensitive flag.

<code>history &vert; grep "find"</code> - searches command line history for all commands with "find" in them. &#124; (pipe) takes output on left side and feeds it to the command on the right.

<code>!5</code> - executes the command following the number 5.

<code>ps aux</code> - lists all the processes running by process id.

<code>ps aux &vert; grep terminal</code> - search through processes.

<code>lsof</code> - list currently open files.

<code>lsof &vert; grep 1234</code> - with process id from <code>ps aux</code>, you can see what the process has open.

[Source](https://quickleft.com/blog/command-line-tutorials-summary-what-s-next/)
