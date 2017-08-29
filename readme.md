# Compose classes test repo

I like functional programming. So I do favor composition over inheritance. Also, I do like Angular. However, there are a load of classes in there, and it's not really FP friendly. This is my way to aid that problem.

In this repo is a custom decorator that let you add pure functions to angular classes. (including components.)

Its very much a work in progress. The current problem is AOT. I need to find a way so I can make this work with AOT, otherwise it will be a no go.


It needs TS 2.4.x, and the project needs to be compiled to es2015+