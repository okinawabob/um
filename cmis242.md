---
layout: umuc
title: "CMIS242"
subtitle: "Intermediate Programming"
image: "/assets/UMUC-Asia-600x69.png"
permalink: "/cmis242/"
---

![UMUC Asia]({{site.baseurl}}{{page.image}}){: .logo}
{: #Top .anchor}

![Week 0]({{site.baseurl}}/assets/Wk0.png)This is a normal face-2-face class and we will meet for two classes per week and you will need to work through the course material each week and submit weekly assignments. The programming language used in this class will be the Java language which is a popular application development language. It has strict data types and is usually used for creating OS independent programs. Your weekly assignments will be analyzing a described problem and create a solution algorithm to solve the problem sequentially using a flowcharts. The design document will be due the week after the program is assigned and code must be completed two weeks after the program is assigned. This is the second course covering the Java Programming language and CMIS141 is the prerequisite.

We will utilize the [Java language](https://hackernoon.com/top-3-most-popular-programming-languages-in-2018-and-their-annual-salaries-51b4a7354e06) for this class. Java is a versatile general-purpose programming language that is used to create cross-platform applications. Regardless of the platform you want to use for deployment desktop, mobile, or web, Java can meet your needs. Java is an object oriented language with strict data typing. We will use the Java Development Kit (JDK) to compile our source code to byte-code which runs on any operating system with a Java Virtual Machine (JVM).  

You can utilize [Scratch](https://scratch.mit.edu) to do the flowchart algorithm and you may implement the program solution using scratch. However, the final program must be coded using Java.

I recommend the [Visual Studio Code](https://code.visualstudio.com/) editor for creating writing the code. It is an open-source editor created by MicroSoft and supports many different computer languages with many plugins available.

If you have a question you can ask in class or email me at:  

<script>AntiSpam("moc", "tsmc+82.1lmr", "liamg", "CMIS141", "")</script>  

I will post handouts and hyperlinks to videos for the class on this web page which is accessible at the hosting URL  
[islandman.org/um/cmis141/](http://islandman.org/um/cmis242/).

### So lets get started...

This is a fast paced course in an 8 week session.

I recommend you allocate approximately 20 hours per week to this course:

- Lecture = 5 hours per week
- Reading study, video watching, and homework = 15 hours per week
{: .check}

The textbook for this course is very good so be sure to order it early so that you have it before the first week of class. We will be using the 8th edition which covers Java Standard Edition Version 6. Please download and install the Java Development Kit Version 6 on the computer that you intend to do your homework on. The book is concise, easy to read, and has lots of examples. Don't let the thickness scare you off, we will only be covering eleven chapters in this class Chapters 10 through 18 and Chapter 33 and 34.

Please review my [CMIS141 course materials](../cmis141/), especially if I was not your instructor for CMIS141. I made many PowerPoint slides to support the course with excellent code examples and you can print these slide shows using the PDF files for the course. This CMIS141 material is presumed prerequisite knowledge for this class.

I recommend that you get started with Week 1 content today, by clicking Week 1 in the navigation bar above or scrolling down.

Robert Laurie
{: .signature}

## Week 1: Thinking in Objects
{: #Week1 .anchor}

![.]({{site.baseurl}}/assets/cmis242/Textbook8ed.jpg)This week we will be covering content from Chapter 10 Thinking in Objects. It is fairly abstract so please read before coming to the first class. Reading the material before it is covered in class will make the class seem a lot easier and you can ask better questions. If you have not received the book yet then please download the PDF file from the eChapters menu to the right or by clicking this link Chapter 10: Thinking in Objects

You need to bring a USB Drive to all classes to store computer files that you create in class and homework. If you have a notebook computer you should also bring that to class.

The hyperlinks to all required file downloads are shown and you should check and print these items before coming to class each week. You need to come to class to hear the lectures.

Project 1 - Part A - Due last class week 2
Introduction to JavaDoc

- [Project 1 - Part A - Due last class week 2]({{site.baseurl}}/assets/cmis141/01_ProgLangJavaSetup.pdf)
- [Introduction to JavaDoc]({{site.baseurl}}/assets/cmis141/Homework1.pdf)
{: .pdf}

## Week 2: Inheritance and Polymorphism
{: #Week2 .anchor}

This week we will be covering content from Chapter 11 - Inheritance and Polymorphism. It is very abstract so please read before coming to the first class. Reading the material before it is covered in class will make the class seem a lot easier and you can ask better questions. If you have not received the book yet then please download the PDF file from the eChapters menu to the right or by clicking this link Chapter 11: Inheritance and Polymorphism

The hyperlinks to all required file downloads are shown and you should check and print these items before coming to class each week. You need to come to class to hear the lectures.

PowerPoint Slide Show: Chapter 11 Inheritance and Polymorphism
Project 1 - Part A - Due first class week 3
Project 1 - Part B - Due first class week 3
Introduction to JavaDoc

- [PowerPoint Slide Show: Chapter 11 Inheritance and Polymorphism]({{site.baseurl}}/assets/cmis242/Chap11_Inheritance.pdf)
- [Project 1 - Part A - Due first class week 3]({{site.baseurl}}/assets/cmis242/Project1_PartA_Ch10_JavaDoc_Classes.pdf)
- [Project 1 - Part B - Due first class week 3]({{site.baseurl}}/assets/cmis242/Project1_PartB_Ch11_JavaDoc_Inheritance.pdf)
{: .pdf}

Please bring a notebook computer and USB (Thumb) Drive to class to transfer computer files that you create.

## Week 3: GUI Basics
{: #Week3 .anchor}

This week we will be covering content from Chapter 12 - GUI Basics. The goal will be to make a simple window to display output.

![Poker]({{site.baseurl}}/assets/cmis242/PokerHand.gif)

The hyperlinks to all required file downloads are shown and you should check and print these items before coming to class each week. You need to come to class to hear the lectures.

- [PowerPoint Slide Show: Chapter 12 GUI Basics]({{site.baseurl}}/assets/cmis242/BasicGUI.pdf)
- Assignment 2 is worth 40 points and will be due next week. The goal of this assignment is to create a deck of cards, shuffle them, and then display a poker hand with the top 5 cards using actual images of cards. The cards should be shuffled randomly after each hand is dealt so you will unlikely see the same hand dealt twice. You may use the card images in the zip file or find another set of card images. [Card Images zip file]({{site.baseurl}}/assets/cmis242/classic-cards.zip)
- The images should be unzipped and placed in an images folder within the Eclipse project folder. Right click on project folder and select Refresh to view image folder.
- You may utilize or modify my all-in-one [Card1 class]({{site.baseurl}}/assets/cmis242/Card1.java) to assist you in developing this program.
- You can also use my modified dual [GroupOfCards class]({{site.baseurl}}/assets/cmis242/GroupOfCards.java) composed from [Card class]({{site.baseurl}}/assets/cmis242/Card.java)
- In either case you will need to create a CardImage subclass of the Card class and also a GUI class with main
- Create a Word doc and describe the program summary and specifications. Create a UML image for your card class and also a flow chart for the main program sequencing. Paste the UML images into the word document.
- Upload your code to the Assignment 2 submit folder before the due date.
{: .link}

Please bring a notebook computer and USB (Thumb) Drive to class to transfer computer files that you create.

## Week 4: Abstract Classes and Interfaces
{: #Week4 .anchor}

This week we will be covering partial content from Chapter 14 covering Abstract classes and Interfaces. The content is important because it provides the foundation to develop Graphical User Interfaces.

This week you should try to convert your Assignment 2 code to be object oriented if you wrote it as procedural. It is time to think about objects and not procedures. You will have a difficult time with 80 point Project 4 if you are stuck in the procedural world.

The hyperlinks to all required file downloads are shown and you should check and print these items before coming to class each week.

- [Slide Show: Chapter 14 Abstract Classes and Interfaces]({{site.baseurl}}/assets/cmis242/Chap14_AbstractClasses.pdf)
{: .pdf}

Please bring a notebook computer and USB (Thumb) Drive to class to transfer computer files that you create.

## Week 5: Event Driven Programming
{: #Week5 .anchor}

TThis week we will be covering the topic of Event Driven Programming utilizing basic Swing components covered in part of Chapters 16 and 17. Chapter 16 content will be covered in the first class this week. You need to utilize content from only Chapter 16 to do Assignment 3 and you will have only until the second class this week to complete it.

The hyperlinks to all required file downloads are shown and you should check and print these items before coming to class each week.
Please note that I have now uploaded all slide set PDFs as 2-slides per page for easier reading. Beginning with Chapter 11. The code is getting longer now that we have entered the world of OOP and GUI.

- [Project 4: Casino GUI]({{site.baseurl}}/assets/cmis242/CMIS242_Project4.pdf)
- [Slide Show: Chapter 16 Event Driven Programming]({{site.baseurl}}/assets/cmis242/EventProg.pdf)
{: .pdf}

### Assignment 3: Interactive GUI Assignment

Assignment 3 is worth 40 points and is due Thursday July 5. It is relatively short and can be done using content primarily from Chapter 14 and understanding of earlier chapters. You will make a GUI based program to convert between Fahrenheit and Celsius number systems. The program needs to utilize JFrame, JPanel, JLabel, JButton, JTextField Swing components. The program must be able to do both conversions F to C and C to F after the user clicks on their desired conversion.

Now that we are firmly in the OOP GUI paradigm:
Step 1 is the creation of a suitable GUI.
Step 2 is the development of the ActionListener Inner Classes or AnonymoussListner methods to make the event model work with the GUI.

You may want to review content from CMIS141 Slide Set 4 for Temperature Conversion Formula and known test data. Keep in mind we have left the procedural world behind and you now need to consider how to create Object Oriented Program applications with GUI's. Still the formula and test data are useful.

Please bring a notebook computer and USB (Thumb) Drive to class to transfer computer files that you create.

## Week 6: GUI Programming and Applets
{: #Week6 .anchor}

TThis week we will continue with the topic of creating Graphical User Interfaces continuing with Chapter 17 and also Chapter 18. Project 4 is worth 100 points and will be due Week 7 class 1.

- [Slide Show: Chapter 17 Creating Graphical User Interfaces]({{site.baseurl}}/assets/cmis242/CreatingGUI.pdf)
- [Slide Show: Chapter 18 Applets and Multimedia]({{site.baseurl}}/assets/cmis242/AppletsAudio.pdf)
{: .pdf}

Please bring a notebook computer and USB (Thumb) Drive to class to transfer computer files that you create.

## Week 7: Exception Handling and Graphics
{: #Week7 .anchor}

This week we will cover the topics of Exception Handling and Graphics covered in Chapter 13 and Chapter 15. Of particular interest is exception handling of a GUI form covered in the slide set, but not in the book. We will also cover timer events covered in Section 16.12 which will enable you to do animation of a graphic. Project 4 is due class 1 this week and Project 5 will be assigned for completion the last class of Week 8.

- [Project 5: The Final Project]({{site.baseurl}}/assets/cmis242/CMIS242_Project5.pdf)
- [Slide Show: Chapter 13 Exception Handling]({{site.baseurl}}/assets/cmis242/JavaExceptionPPT.pdf)
- [Slide Show: Chapter 15 Graphics]({{site.baseurl}}/assets/cmis242/JavaGraphicsPPT.pdf)
{: .pdf}

Please bring a notebook computer and USB (Thumb) Drive to class to transfer computer files that you create.

## Week 8: GUI and Graphics Project completion
{: #Week8 .anchor}

This week the focus will be on finishing and debugging Project 5. You will present your final project to the class in either class this week. Please verify your program does indeed work using test data before you present. There will be no new content for the course this week. If you would like me to review anything we can do it the first class this week.
