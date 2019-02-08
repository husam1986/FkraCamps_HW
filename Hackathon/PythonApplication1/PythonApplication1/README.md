# Josephus-problem
A python solution for Josephus problem

# Problem Statement:
There are N people standing in a circle. Let’s number them 0 through (N-1). Person 0 has a sword. He kills the person alive to his left and passes the sword along to the next (alive) person. That person in turn kills the person alive to his left and the sword on. This continues till there is only one person alive. 

Find the number of the alive person.

# My Approach:
Remove the person from the list when they die.Leaving the last man standing as the only person left in the collection.

# Prerequisites:
Python 2.7 or higher

# Files:
1.josephus_problem.py: The main solution file.

2.test_josephus_problem.py: This contains the unit test for josephus_problem.py solution.

3.josephus_problem.log: In this file program events are logged.

# Executing the program:
For executing the solution you need to run command: python josephus_problem.py N

Here N is the number of persons. It can be any positive number.

For Example:
		
		Command-> python josephus_problem.py 100
		
		Output-> Person Alive: 73


For execution the unit tests, If you have pytest installed then run:     
                  
		  $pytest


If you don't have pytest installed then run:
                  
		  $python test_josephus_problem.py

